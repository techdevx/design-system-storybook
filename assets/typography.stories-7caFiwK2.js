import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{S as _,d as W}from"./index-BGcWswtl.js";import{c as m}from"./utils-DCADjnpI.js";import{c}from"./index-CkIaN0ex.js";import"./index-CHISt2gJ.js";import"./_commonjsHelpers-CqkleIqs.js";const K={1:"3xl",2:"2xl",3:"xl",4:"lg",5:"md",6:"sm"},F=c("scroll-m-20 font-semibold tracking-tight text-balance",{variants:{size:{"4xl":"text-3xl sm:text-4xl","3xl":"text-2xl sm:text-3xl","2xl":"text-xl sm:text-2xl",xl:"text-xl",lg:"text-lg",md:"text-base",sm:"text-sm"}},defaultVariants:{size:"2xl"}}),X=c("",{variants:{size:{xs:"text-xs",sm:"text-sm",base:"text-base",lg:"text-lg"},tone:{default:"text-foreground",muted:"text-muted-foreground",success:"text-success",warning:"text-warning",destructive:"text-destructive",info:"text-info"},weight:{normal:"font-normal",medium:"font-medium",semibold:"font-semibold"},truncate:{true:"truncate",false:""},lineClamp:{1:"line-clamp-1",2:"line-clamp-2",3:"line-clamp-3",4:"line-clamp-4"},numeric:{true:"tabular-nums",false:""}},defaultVariants:{size:"base",tone:"default",weight:"normal"}}),G=c(["rounded-sm font-medium underline-offset-4 transition-colors outline-none touch-manipulation","focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"],{variants:{variant:{default:"text-primary hover:underline",muted:"text-muted-foreground underline hover:text-foreground",subtle:"text-foreground underline decoration-muted-foreground/40 hover:decoration-foreground"}},defaultVariants:{variant:"default"}}),Z=c("relative rounded-sm bg-muted px-[0.3em] py-[0.15em] font-mono text-[0.875em] font-medium text-foreground"),$=c("border-l-2 border-border pl-4 italic text-muted-foreground"),J=c(["text-base leading-7 text-foreground","[&_h1]:mt-8 [&_h1]:mb-4 [&_h1]:scroll-m-20 [&_h1]:text-3xl [&_h1]:font-semibold [&_h1]:tracking-tight [&_h1]:text-balance","[&_h2]:mt-8 [&_h2]:mb-3 [&_h2]:scroll-m-20 [&_h2]:border-b [&_h2]:border-border [&_h2]:pb-2 [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:tracking-tight [&_h2]:text-balance","[&_h3]:mt-6 [&_h3]:mb-2 [&_h3]:scroll-m-20 [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:tracking-tight","[&_h4]:mt-6 [&_h4]:mb-2 [&_h4]:text-lg [&_h4]:font-semibold [&_h4]:tracking-tight","[&_h5]:mt-4 [&_h5]:mb-2 [&_h5]:text-base [&_h5]:font-semibold","[&_h6]:mt-4 [&_h6]:mb-2 [&_h6]:text-sm [&_h6]:font-semibold [&_h6]:text-muted-foreground","[&>:first-child]:mt-0 [&>:last-child]:mb-0","[&_p]:my-4 [&_p]:leading-7","[&_strong]:font-semibold [&_em]:italic [&_small]:text-sm","[&_a]:font-medium [&_a]:text-primary [&_a]:underline [&_a]:underline-offset-4 [&_a:hover]:opacity-80","[&_ul]:my-4 [&_ul]:ml-6 [&_ul]:list-disc [&_ol]:my-4 [&_ol]:ml-6 [&_ol]:list-decimal","[&_li]:mt-1.5 [&_li]:marker:text-muted-foreground [&_li>ul]:my-1.5 [&_li>ol]:my-1.5","[&_code]:rounded-sm [&_code]:bg-muted [&_code]:px-[0.3em] [&_code]:py-[0.15em] [&_code]:font-mono [&_code]:text-[0.875em]","[&_pre]:my-4 [&_pre]:overflow-x-auto [&_pre]:rounded-md [&_pre]:border [&_pre]:border-border [&_pre]:bg-muted [&_pre]:p-4 [&_pre]:text-sm","[&_pre_code]:bg-transparent [&_pre_code]:p-0 [&_pre_code]:text-[1em]","[&_blockquote]:my-4 [&_blockquote]:border-l-2 [&_blockquote]:border-border [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:text-muted-foreground","[&_hr]:my-8 [&_hr]:border-border [&_img]:my-4 [&_img]:max-w-full [&_img]:rounded-md","[&_table]:my-4 [&_table]:block [&_table]:w-full [&_table]:overflow-x-auto [&_table]:border-collapse [&_table]:text-sm","[&_th]:border-b [&_th]:border-border [&_th]:px-3 [&_th]:py-2 [&_th]:text-left [&_th]:font-medium [&_th]:text-muted-foreground","[&_td]:border-b [&_td]:border-border [&_td]:px-3 [&_td]:py-2"],{variants:{size:{sm:"text-sm leading-6 [&_p]:leading-6",base:""},maxWidth:{true:"max-w-prose",false:""}},defaultVariants:{size:"base",maxWidth:!1}});function l({level:n=2,size:a,asChild:s=!1,className:i,...r}){const o=s?_:`h${n}`;return e.jsx(o,{"data-slot":"heading",className:m(F({size:a??K[n]}),i),...r})}function t({as:n="p",asChild:a=!1,size:s,tone:i,weight:r,truncate:o,lineClamp:u,numeric:v,className:y,...k}){const U=a?_:n;return e.jsx(U,{"data-slot":"text",className:m(X({size:s,tone:i,weight:r,truncate:o,lineClamp:u,numeric:v}),y),...k})}function d({variant:n,asChild:a=!1,external:s=!1,className:i,children:r,target:o,rel:u,...v}){const y=a?_:"a",k=s?e.jsx("span",{className:"sr-only",children:" (opens in new tab)"}):null;return e.jsxs(y,{"data-slot":"link",className:m(G({variant:n}),i),target:s?"_blank":o,rel:s?u??"noopener noreferrer":u,...v,children:[a?e.jsx(W,{children:r}):r,k]})}function A({size:n,maxWidth:a,asChild:s=!1,className:i,...r}){const o=s?_:"div";return e.jsx(o,{"data-slot":"prose",className:m(J({size:n,maxWidth:a}),i),...r})}function B({className:n,...a}){return e.jsx("code",{"data-slot":"code",className:m(Z(),n),...a})}function Q({className:n,...a}){return e.jsx("blockquote",{"data-slot":"blockquote",className:m($(),n),...a})}l.__docgenInfo={description:"Typography primitives on design-system tokens: `Heading` (h1–h6 with a\nvisual `size` independent of level), `Text` (size/tone/weight/truncate/\nlineClamp/tabular numerals), `Link` (styled anchor, `asChild` for router\nlinks, `external` for new-tab links), `Prose` (readable long-form styles for\nraw HTML/markdown output), `Code` (inline) and `Blockquote`. Server-safe.\n\n`Heading` keeps document outline (`level`) separate from visual weight\n(`size`), so a card title can be an `h3` that looks like `md`.",methods:[],displayName:"Heading",props:{level:{required:!1,tsType:{name:"union",raw:"1 | 2 | 3 | 4 | 5 | 6",elements:[{name:"literal",value:"1"},{name:"literal",value:"2"},{name:"literal",value:"3"},{name:"literal",value:"4"},{name:"literal",value:"5"},{name:"literal",value:"6"}]},description:"Semantic level: renders `h1`..`h6`. Default `2`.",defaultValue:{value:"2",computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"4xl" | "3xl" | "2xl" | "xl" | "lg" | "md" | "sm"',elements:[{name:"literal",value:'"4xl"'},{name:"literal",value:'"3xl"'},{name:"literal",value:'"2xl"'},{name:"literal",value:'"xl"'},{name:"literal",value:'"lg"'},{name:"literal",value:'"md"'},{name:"literal",value:'"sm"'}]},description:"Visual size, independent of `level`. Defaults from the level (1 → 3xl … 6 → sm)."},asChild:{required:!1,tsType:{name:"boolean"},description:"Render into the child element (Radix Slot).",defaultValue:{value:"false",computed:!1}},ref:{required:!1,tsType:{name:"ReactRef",raw:"React.Ref<HTMLHeadingElement>",elements:[{name:"HTMLHeadingElement"}]},description:""}}};t.__docgenInfo={description:"Body text with size, semantic tone, weight, truncation and tabular-numeral options.",methods:[],displayName:"Text",props:{as:{required:!1,tsType:{name:"union",raw:'"p" | "span" | "div"',elements:[{name:"literal",value:'"p"'},{name:"literal",value:'"span"'},{name:"literal",value:'"div"'}]},description:"Element to render. Default `p`. Ignored when `asChild` is set.",defaultValue:{value:'"p"',computed:!1}},asChild:{required:!1,tsType:{name:"boolean"},description:"Render into the child element (Radix Slot).",defaultValue:{value:"false",computed:!1}},truncate:{required:!1,tsType:{name:"boolean"},description:"Single-line ellipsis."},lineClamp:{required:!1,tsType:{name:"union",raw:"1 | 2 | 3 | 4",elements:[{name:"literal",value:"1"},{name:"literal",value:"2"},{name:"literal",value:"3"},{name:"literal",value:"4"}]},description:"Clamp to N lines with an ellipsis."},numeric:{required:!1,tsType:{name:"boolean"},description:"Tabular (fixed-width) numerals, for figures that line up or update in place."},ref:{required:!1,tsType:{name:"ReactRef",raw:"React.Ref<HTMLElement>",elements:[{name:"HTMLElement"}]},description:""}},composes:["Omit"]};d.__docgenInfo={description:"Styled text link. Use `asChild` to wrap a router link; `external` for new-tab links.",methods:[],displayName:"Link",props:{asChild:{required:!1,tsType:{name:"boolean"},description:"Render into the child element, e.g. a Next.js `<Link>`.",defaultValue:{value:"false",computed:!1}},external:{required:!1,tsType:{name:"boolean"},description:'Open in a new tab: adds `target="_blank"`, `rel="noopener noreferrer"` and an sr-only hint.',defaultValue:{value:"false",computed:!1}},ref:{required:!1,tsType:{name:"ReactRef",raw:"React.Ref<HTMLAnchorElement>",elements:[{name:"HTMLAnchorElement"}]},description:""}},composes:["LinkVariantProps"]};A.__docgenInfo={description:"Readable long-form styles for raw HTML children (CMS bodies, rendered\nmarkdown, email content): headings, paragraphs, lists, code, blockquotes,\ntables and links. Set `maxWidth` to cap line length at `max-w-prose`.",methods:[],displayName:"Prose",props:{asChild:{required:!1,tsType:{name:"boolean"},description:"Render into the child element (e.g. `<article>`).",defaultValue:{value:"false",computed:!1}},ref:{required:!1,tsType:{name:"ReactRef",raw:"React.Ref<HTMLDivElement>",elements:[{name:"HTMLDivElement"}]},description:""}},composes:["ProseVariantProps"]};B.__docgenInfo={description:"Inline code. For multi-line blocks use `CodeBlock`.",methods:[],displayName:"Code",props:{ref:{required:!1,tsType:{name:"ReactRef",raw:"React.Ref<HTMLElement>",elements:[{name:"HTMLElement"}]},description:""}}};Q.__docgenInfo={description:"Quoted passage with a leading rule.",methods:[],displayName:"Blockquote",props:{ref:{required:!1,tsType:{name:"ReactRef",raw:"React.Ref<HTMLQuoteElement>",elements:[{name:"HTMLQuoteElement"}]},description:""}}};const se={title:"UI/Typography",component:l,tags:["autodocs"],args:{children:"Quarterly pipeline review",level:2}},h={},p={render:()=>e.jsxs("div",{className:"space-y-3",children:[e.jsx(l,{level:1,size:"4xl",children:"4xl — Display"}),e.jsx(l,{level:1,children:"h1 — 3xl"}),e.jsx(l,{level:2,children:"h2 — 2xl"}),e.jsx(l,{level:3,children:"h3 — xl"}),e.jsx(l,{level:4,children:"h4 — lg"}),e.jsx(l,{level:5,children:"h5 — md"}),e.jsx(l,{level:6,children:"h6 — sm"}),e.jsx(l,{level:2,size:"md",children:"h2 that looks like md (size is independent of level)"})]})},x={render:()=>e.jsxs("div",{className:"max-w-md space-y-2",children:[e.jsx(t,{size:"lg",children:"Large body text"}),e.jsx(t,{children:"Base body text"}),e.jsx(t,{size:"sm",tone:"muted",children:"Small muted helper text"}),e.jsx(t,{size:"xs",tone:"muted",children:"Extra-small caption"}),e.jsx(t,{tone:"success",weight:"medium",children:"Deal won"}),e.jsx(t,{tone:"warning",weight:"medium",children:"Renewal due in 7 days"}),e.jsx(t,{tone:"destructive",weight:"medium",children:"Payment failed"}),e.jsx(t,{tone:"info",weight:"medium",children:"Synced 2 minutes ago"}),e.jsx(t,{weight:"semibold",numeric:!0,children:"RM 1,204,330.00"}),e.jsx(t,{truncate:!0,className:"w-48",children:"This line is far too long to fit and will be truncated with an ellipsis"}),e.jsx(t,{lineClamp:2,size:"sm",className:"w-64",children:"Clamped to two lines. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."})]})},f={render:()=>e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx(d,{href:"#",children:"Default link"}),e.jsx(d,{href:"#",variant:"muted",children:"Muted link"}),e.jsx(d,{href:"#",variant:"subtle",children:"Subtle link"}),e.jsx(d,{href:"https://example.com",external:!0,children:"External link (opens in new tab)"}),e.jsxs(t,{size:"sm",tone:"muted",children:["Inline: read the ",e.jsx(d,{href:"#",children:"billing guide"})," before upgrading."]})]})},g={render:()=>e.jsxs("div",{className:"max-w-md space-y-4",children:[e.jsxs(t,{children:["Run ",e.jsx(B,{children:"pnpm catalog"})," after adding a component."]}),e.jsx(Q,{children:"The best CRM is the one your team actually updates."})]})},b={render:()=>e.jsxs(A,{maxWidth:!0,children:[e.jsx("h1",{children:"Onboarding playbook"}),e.jsxs("p",{children:["Every new account goes through three stages. Read the"," ",e.jsx("a",{href:"https://example.com",children:"full policy"})," for edge cases."]}),e.jsx("h2",{children:"Stages"}),e.jsxs("ol",{children:[e.jsx("li",{children:"Kickoff call within 48 hours"}),e.jsxs("li",{children:["Data import",e.jsxs("ul",{children:[e.jsx("li",{children:"Contacts and companies"}),e.jsx("li",{children:"Open deals"})]})]}),e.jsx("li",{children:"Training session"})]}),e.jsx("h3",{children:"Notes"}),e.jsxs("p",{children:["Use ",e.jsx("code",{children:"status=active"})," to filter. ",e.jsx("strong",{children:"Never"})," skip the import check."]}),e.jsx("blockquote",{children:"Customers who finish training in week one churn 40% less."}),e.jsx("pre",{children:e.jsx("code",{children:`curl -X POST /api/accounts \\
  -d '{"plan":"pro"}'`})}),e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Stage"}),e.jsx("th",{children:"Owner"}),e.jsx("th",{children:"SLA"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"Kickoff"}),e.jsx("td",{children:"AE"}),e.jsx("td",{children:"48h"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Import"}),e.jsx("td",{children:"CSM"}),e.jsx("td",{children:"5 days"})]})]})]}),e.jsx("hr",{}),e.jsx("p",{children:"Last reviewed by the CS team."})]})};var w,j,T;h.parameters={...h.parameters,docs:{...(w=h.parameters)==null?void 0:w.docs,source:{originalSource:"{}",...(T=(j=h.parameters)==null?void 0:j.docs)==null?void 0:T.source}}};var R,L,C;p.parameters={...p.parameters,docs:{...(R=p.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => <div className="space-y-3">
      <Heading level={1} size="4xl">
        4xl — Display
      </Heading>
      <Heading level={1}>h1 — 3xl</Heading>
      <Heading level={2}>h2 — 2xl</Heading>
      <Heading level={3}>h3 — xl</Heading>
      <Heading level={4}>h4 — lg</Heading>
      <Heading level={5}>h5 — md</Heading>
      <Heading level={6}>h6 — sm</Heading>
      <Heading level={2} size="md">
        h2 that looks like md (size is independent of level)
      </Heading>
    </div>
}`,...(C=(L=p.parameters)==null?void 0:L.docs)==null?void 0:C.source}}};var H,q,S;x.parameters={...x.parameters,docs:{...(H=x.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => <div className="max-w-md space-y-2">
      <Text size="lg">Large body text</Text>
      <Text>Base body text</Text>
      <Text size="sm" tone="muted">
        Small muted helper text
      </Text>
      <Text size="xs" tone="muted">
        Extra-small caption
      </Text>
      <Text tone="success" weight="medium">
        Deal won
      </Text>
      <Text tone="warning" weight="medium">
        Renewal due in 7 days
      </Text>
      <Text tone="destructive" weight="medium">
        Payment failed
      </Text>
      <Text tone="info" weight="medium">
        Synced 2 minutes ago
      </Text>
      <Text weight="semibold" numeric>
        RM 1,204,330.00
      </Text>
      <Text truncate className="w-48">
        This line is far too long to fit and will be truncated with an ellipsis
      </Text>
      <Text lineClamp={2} size="sm" className="w-64">
        Clamped to two lines. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </Text>
    </div>
}`,...(S=(q=x.parameters)==null?void 0:q.docs)==null?void 0:S.source}}};var N,z,E;f.parameters={...f.parameters,docs:{...(N=f.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-2">
      <Link href="#">Default link</Link>
      <Link href="#" variant="muted">
        Muted link
      </Link>
      <Link href="#" variant="subtle">
        Subtle link
      </Link>
      <Link href="https://example.com" external>
        External link (opens in new tab)
      </Link>
      <Text size="sm" tone="muted">
        Inline: read the <Link href="#">billing guide</Link> before upgrading.
      </Text>
    </div>
}`,...(E=(z=f.parameters)==null?void 0:z.docs)==null?void 0:E.source}}};var M,V,D;g.parameters={...g.parameters,docs:{...(M=g.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => <div className="max-w-md space-y-4">
      <Text>
        Run <Code>pnpm catalog</Code> after adding a component.
      </Text>
      <Blockquote>The best CRM is the one your team actually updates.</Blockquote>
    </div>
}`,...(D=(V=g.parameters)==null?void 0:V.docs)==null?void 0:D.source}}};var I,P,O;b.parameters={...b.parameters,docs:{...(I=b.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <Prose maxWidth>
      <h1>Onboarding playbook</h1>
      <p>
        Every new account goes through three stages. Read the{" "}
        <a href="https://example.com">full policy</a> for edge cases.
      </p>
      <h2>Stages</h2>
      <ol>
        <li>Kickoff call within 48 hours</li>
        <li>
          Data import
          <ul>
            <li>Contacts and companies</li>
            <li>Open deals</li>
          </ul>
        </li>
        <li>Training session</li>
      </ol>
      <h3>Notes</h3>
      <p>
        Use <code>status=active</code> to filter. <strong>Never</strong> skip the import check.
      </p>
      <blockquote>Customers who finish training in week one churn 40% less.</blockquote>
      <pre>
        <code>{'curl -X POST /api/accounts \\\\\\n  -d \\'{"plan":"pro"}\\''}</code>
      </pre>
      <table>
        <thead>
          <tr>
            <th>Stage</th>
            <th>Owner</th>
            <th>SLA</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Kickoff</td>
            <td>AE</td>
            <td>48h</td>
          </tr>
          <tr>
            <td>Import</td>
            <td>CSM</td>
            <td>5 days</td>
          </tr>
        </tbody>
      </table>
      <hr />
      <p>Last reviewed by the CS team.</p>
    </Prose>
}`,...(O=(P=b.parameters)==null?void 0:P.docs)==null?void 0:O.source}}};const re=["Default","Headings","TextVariants","Links","InlineCodeAndQuote","ProseContent"];export{h as Default,p as Headings,g as InlineCodeAndQuote,f as Links,b as ProseContent,x as TextVariants,re as __namedExportsOrder,se as default};
