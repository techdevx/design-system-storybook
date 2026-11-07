import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as d}from"./index-DsPf7qMj.js";import"./index-CHISt2gJ.js";import"./_commonjsHelpers-CqkleIqs.js";function t(s){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...d(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"getting-started",children:"Getting started"}),`
`,e.jsxs(n.h2,{id:"1-point-the-techdevx-scope-at-github-packages",children:["1. Point the ",e.jsx(n.code,{children:"@techdevx"})," scope at GitHub Packages"]}),`
`,e.jsxs(n.p,{children:["The package is private on GitHub Packages. Add this to the app's ",e.jsx(n.code,{children:".npmrc"}),":"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ini",children:`@techdevx:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=\${NODE_AUTH_TOKEN}
`})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"NODE_AUTH_TOKEN"})," is a GitHub token with ",e.jsx(n.code,{children:"read:packages"}),`. In CI, pass it as a secret.
In Docker builds, pass it as a build secret, never as a build arg.`]}),`
`,e.jsx(n.h2,{id:"2-install",children:"2. Install"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`pnpm add @techdevx/design-system
pnpm add react react-dom next-themes   # peers
`})}),`
`,e.jsx(n.h2,{id:"3-stylesheet",children:"3. Stylesheet"}),`
`,e.jsx(n.p,{children:`In the app's global CSS, import Tailwind, then the tokens, then point Tailwind's
scanner at the compiled package so it generates the classes the components use:`}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`@import "tailwindcss";
@import "@techdevx/design-system/styles.css";
@source "../node_modules/@techdevx/design-system/dist";
`})}),`
`,e.jsxs(n.p,{children:["Adjust the ",e.jsx(n.code,{children:"@source"})," path so it resolves from the CSS file to ",e.jsx(n.code,{children:"node_modules"}),`.
In a monorepo this is often `,e.jsx(n.code,{children:"../../../node_modules/..."}),`. If components render
unstyled, this path is wrong.`]}),`
`,e.jsx(n.h2,{id:"4-providers",children:"4. Providers"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`// app/layout.tsx (Next.js App Router)
import { Providers } from "@techdevx/design-system/providers";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
`})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"Providers"}),` sets up the theme (light/dark), shared tooltip timing and the toast container.
Pass `,e.jsx(n.code,{children:'theme={{ defaultTheme: "system" }}'})," or ",e.jsx(n.code,{children:'toaster={{ position: "top-center" }}'})," to configure them."]}),`
`,e.jsx(n.h2,{id:"5-use-components",children:"5. Use components"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { Button } from "@techdevx/design-system/button";
import { Card, CardContent, CardHeader, CardTitle } from "@techdevx/design-system/card";
import { Plus } from "@techdevx/design-system/icons";

<Card>
  <CardHeader><CardTitle>Leads</CardTitle></CardHeader>
  <CardContent>
    <Button><Plus /> New lead</Button>
  </CardContent>
</Card>
`})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Every component has its own subpath; there is no root import."}),`
`,e.jsxs(n.li,{children:["Entries tagged ",e.jsx(n.code,{children:"client"})," ship ",e.jsx(n.code,{children:'"use client"'}),". You can still render them from Server Components."]}),`
`,e.jsxs(n.li,{children:["Merge classes with ",e.jsx(n.code,{children:"cn()"})," from ",e.jsx(n.code,{children:"@techdevx/design-system/lib/utils"}),"."]}),`
`]}),`
`,e.jsx(n.h2,{id:"6-tell-your-ai-agent-about-it",children:"6. Tell your AI agent about it"}),`
`,e.jsxs(n.p,{children:["Add to the app's ",e.jsx(n.code,{children:"AGENTS.md"})," / ",e.jsx(n.code,{children:"CLAUDE.md"}),":"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-md",children:`## UI
UI components come from \`@techdevx/design-system\`. Before building any UI, read
\`node_modules/@techdevx/design-system/llms.txt\` (the full component catalog + "which one?" guide).
Use an existing component when one fits. Don't add another UI library or hand-roll an equivalent.
`})}),`
`,e.jsx(n.h2,{id:"upgrading",children:"Upgrading"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`pnpm up @techdevx/design-system@latest
`})}),`
`,e.jsxs(n.p,{children:["Read the ",e.jsx(n.a,{href:"https://github.com/techdevx/design-system/blob/main/packages/design-system/CHANGELOG.md",rel:"nofollow",children:"CHANGELOG"}),` first.
Minor versions add components; breaking changes only ship in major versions.`]})]})}function a(s={}){const{wrapper:n}={...d(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(t,{...s})}):t(s)}export{a as default};
