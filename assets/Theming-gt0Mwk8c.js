import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as d}from"./index-DsPf7qMj.js";import"./index-CHISt2gJ.js";import"./_commonjsHelpers-CqkleIqs.js";function s(r){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...d(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"theming",children:"Theming"}),`
`,e.jsx(n.p,{children:"Tokens come in three layers. Components only ever use layer 2."}),`
`,e.jsxs(n.p,{children:[`| Layer | File | Example | Who changes it |
| --- | --- | --- | --- |
| 1. Primitives | `,e.jsx(n.code,{children:"styles/tokens.css"})," | ",e.jsx(n.code,{children:"--color-brand-600"}),", ",e.jsx(n.code,{children:"--radius-base"}),` | the DS, rarely |
| 2. Semantic tokens | `,e.jsx(n.code,{children:"styles/themes.css"})," | ",e.jsx(n.code,{children:"--primary"}),", ",e.jsx(n.code,{children:"--muted-foreground"}),", ",e.jsx(n.code,{children:"--border"}),` | themes and apps |
| 3. Tailwind bridge | `,e.jsx(n.code,{children:"styles/index.css"})," (",e.jsx(n.code,{children:"@theme inline"}),") | ",e.jsx(n.code,{children:"bg-primary"}),", ",e.jsx(n.code,{children:"text-muted-foreground"})," | nobody, it's generated |"]}),`
`,e.jsxs(n.p,{children:["Because the bridge is ",e.jsx(n.code,{children:"inline"}),`, utilities read the CSS variable at runtime. Switching
mode or theme is just changing a class or attribute. Nothing is rebuilt.`]}),`
`,e.jsx(n.h2,{id:"semantic-colours",children:"Semantic colours"}),`
`,e.jsxs(n.p,{children:[`| Token | Use for |
| --- | --- |
| `,e.jsx(n.code,{children:"background"})," / ",e.jsx(n.code,{children:"foreground"}),` | page surface and body text |
| `,e.jsx(n.code,{children:"card"}),", ",e.jsx(n.code,{children:"popover"})," (+ ",e.jsx(n.code,{children:"-foreground"}),`) | raised surfaces |
| `,e.jsx(n.code,{children:"primary"}),` | the main action, focus and selection |
| `,e.jsx(n.code,{children:"secondary"}),", ",e.jsx(n.code,{children:"accent"}),", ",e.jsx(n.code,{children:"muted"}),` | quiet surfaces and hover states |
| `,e.jsx(n.code,{children:"muted-foreground"}),` | secondary text, captions, placeholders |
| `,e.jsx(n.code,{children:"destructive"}),", ",e.jsx(n.code,{children:"success"}),", ",e.jsx(n.code,{children:"warning"}),", ",e.jsx(n.code,{children:"info"}),` | status. Always pair with an icon or label; colour alone is not enough. |
| `,e.jsx(n.code,{children:"border"}),", ",e.jsx(n.code,{children:"input"}),", ",e.jsx(n.code,{children:"ring"}),` | lines, field borders, focus rings |
| `,e.jsx(n.code,{children:"chart-1"})," … ",e.jsx(n.code,{children:"chart-8"}),` | chart series, in fixed order |
| `,e.jsx(n.code,{children:"chart-seq-1"})," … ",e.jsx(n.code,{children:"chart-seq-5"})," | magnitude (heatmaps), light to dark |"]}),`
`,e.jsxs(n.p,{children:["Write ",e.jsx(n.code,{children:"bg-success/10 text-success"}),", not ",e.jsx(n.code,{children:"bg-green-100 text-green-700"}),"."]}),`
`,e.jsx(n.h2,{id:"dark-mode",children:"Dark mode"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"Providers"})," uses next-themes, which toggles a ",e.jsx(n.code,{children:".dark"})," class on ",e.jsx(n.code,{children:"<html>"}),`. Every token has a
dark value. To add a toggle:`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`"use client";
import { useTheme } from "next-themes";
const { resolvedTheme, setTheme } = useTheme();
<Button variant="ghost" onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}>…</Button>
`})}),`
`,e.jsx(n.h2,{id:"re-branding-an-app",children:"Re-branding an app"}),`
`,e.jsxs(n.p,{children:["Override the semantic tokens in the app's CSS ",e.jsx(n.strong,{children:"after"})," importing the DS stylesheet:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`@import "tailwindcss";
@import "@techdevx/design-system/styles.css";

:root {
  --primary: oklch(0.55 0.2 250);
  --ring: oklch(0.62 0.2 250);
  --radius: 0.5rem;
}
.dark {
  --primary: oklch(0.68 0.17 250);
}
`})}),`
`,e.jsxs(n.p,{children:["Keep ",e.jsx(n.code,{children:"--primary-foreground"})," readable on ",e.jsx(n.code,{children:"--primary"})," (4.5:1 contrast for text)."]}),`
`,e.jsx(n.h2,{id:"multiple-themes-in-one-app",children:"Multiple themes in one app"}),`
`,e.jsxs(n.p,{children:["Themes are keyed on ",e.jsx(n.code,{children:'[data-theme="…"]'}),". The DS ships ",e.jsx(n.code,{children:"emerald"})," as an example:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`[data-theme="ocean"] { --primary: oklch(0.6 0.15 220); --ring: oklch(0.65 0.15 220); }
[data-theme="ocean"].dark { --primary: oklch(0.7 0.13 220); }
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<Providers theme={{ attribute: ["class", "data-theme"] }}>…</Providers>
`})}),`
`,e.jsxs(n.p,{children:["You can also scope a theme to part of a page: ",e.jsx(n.code,{children:'<div data-theme="ocean">…</div>'}),"."]}),`
`,e.jsx(n.h2,{id:"chart-colours",children:"Chart colours"}),`
`,e.jsxs(n.p,{children:[`The chart palette was validated for colour-blind safety, so don't change its hex values
per app. Series use `,e.jsx(n.code,{children:"--chart-1..8"}),` in a fixed order and are never cycled. A 9th series
folds into "Other". Use one y-axis per chart, and always show a legend when there are
2 or more series.`]})]})}function a(r={}){const{wrapper:n}={...d(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(s,{...r})}):s(r)}export{a as default};
