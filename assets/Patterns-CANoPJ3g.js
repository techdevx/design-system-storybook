import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as i}from"./index-DsPf7qMj.js";import"./index-CHISt2gJ.js";import"./_commonjsHelpers-CqkleIqs.js";function s(r){const n={code:"code",h1:"h1",h2:"h2",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"page-patterns",children:"Page patterns"}),`
`,e.jsxs(n.p,{children:[`Recipes for the screens a CRM or admin app is built from. Each one lists the
components to use and how they fit together. The `,e.jsx(n.code,{children:"apps/admin"}),` example app in this
repo shows working versions.`]}),`
`,e.jsx(n.p,{children:"All pages sit inside the app shell:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { DashboardLayout, PageHeader } from "@techdevx/design-system/layouts";
// DashboardLayout = Sidebar + Header + content area; it goes off-canvas below 768px.
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"1-list-page-leads-customers-deals",children:"1. List page (leads, customers, deals)"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`┌ PageHeader ─ title · description ───────────── [+ New lead] ┐
│ FilterBar  [Filter (2)] [Status is Active ×] [Owner is me ×] │
│            SavedViews ▾                          Search…     │
├ DataTable ───────────────────────────────────────────────────┤
│ ☐ Name            Status        Owner         Value          │
│ ☐ Acme Corp       ● Active      (AL)          $4,200         │
│ …                                                            │
├ Pagination ──────────────────────────────────────────────────┤
└──────────── BulkActionBar: 3 selected · Assign · Delete ✕ ───┘
`})}),`
`,e.jsxs(n.p,{children:[`| Part | Component |
| --- | --- |
| Title and primary action | `,e.jsx(n.code,{children:"PageHeader"})," (",e.jsx(n.code,{children:"actions"})," slot) with ",e.jsx(n.code,{children:"Button"}),` |
| Filters | `,e.jsx(n.code,{children:"FilterBar"})," + ",e.jsx(n.code,{children:"SavedViews"})," from ",e.jsx(n.code,{children:"/filter-builder"})," (use ",e.jsx(n.code,{children:"DataToolbar"}),` for simple faceted filters) |
| Table | `,e.jsx(n.code,{children:"DataTable"})," with ",e.jsx(n.code,{children:"DataTableColumnHeader"}),"; use ",e.jsx(n.code,{children:"DataGrid"}),` for 1k+ rows or inline editing |
| Status cells | `,e.jsx(n.code,{children:"StatusBadge"})," from ",e.jsx(n.code,{children:"/status"}),", not a hand-coloured ",e.jsx(n.code,{children:"Badge"}),` |
| Owner cells | `,e.jsx(n.code,{children:'UserPicker variant="avatar"'})," (editable) or ",e.jsx(n.code,{children:"AvatarGroup"}),` (read-only) |
| Selection actions | `,e.jsx(n.code,{children:"BulkActionBar"})," + ",e.jsx(n.code,{children:"BulkActionBarAction"}),"; confirm deletes with ",e.jsx(n.code,{children:"Popconfirm"})," or ",e.jsx(n.code,{children:"AlertDialog"}),` |
| No rows | `,e.jsx(n.code,{children:"EmptyState"}),` with a "Create" action. With filters active, say so and offer "Clear filters". |
| Loading | `,e.jsx(n.code,{children:"TableSkeleton"})," on first load, ",e.jsx(n.code,{children:"LoadingOverlay"})," on refetch |"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<PageHeader title="Leads" description="Everyone in your pipeline." actions={<Button><Plus /> New lead</Button>} />
<DataTable columns={columns} data={rows} searchColumn="name" searchPlaceholder="Search leads…" />
`})}),`
`,e.jsxs(n.p,{children:[`On mobile the table scrolls horizontally. Keep the first column meaningful (name + subtitle)
and hide low-value columns below `,e.jsx(n.code,{children:"sm:"}),"."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"2-record-detail-page-one-lead-deal-or-ticket",children:"2. Record detail page (one lead, deal or ticket)"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`┌ Breadcrumb  Leads / Acme Corp ───────────────────────────────┐
├ PageHeader  Acme Corp  ● Active        [Edit] [⋯ DropdownMenu]│
├──────────────────────────────┬───────────────────────────────┤
│ Tabs: Overview · Activity ·  │ Card "Details"                │
│       Notes · Files          │   DescriptionList             │
│                              │   Owner   UserPicker          │
│ Activity → ActivityFeed      │   Stage   Select / InlineEdit │
│ Notes    → CommentThread     │ Card "Tags" TagsInput         │
│ Files    → AttachmentList    │                               │
└──────────────────────────────┴───────────────────────────────┘
`})}),`
`,e.jsxs(n.p,{children:[`| Part | Component |
| --- | --- |
| Path back to the list | `,e.jsx(n.code,{children:"Breadcrumb"})," from ",e.jsx(n.code,{children:"/layouts"}),` |
| Label/value facts | `,e.jsx(n.code,{children:"DescriptionList"})," (",e.jsx(n.code,{children:'orientation="horizontal"'}),` in a sidebar card) |
| Quick edits | `,e.jsx(n.code,{children:"InlineEdit"}),", ",e.jsx(n.code,{children:"UserPicker"}),", ",e.jsx(n.code,{children:"Select"}),` |
| History | `,e.jsx(n.code,{children:"ActivityFeed"})," or ",e.jsx(n.code,{children:"Timeline"}),` |
| Discussion | `,e.jsx(n.code,{children:"CommentThread"}),` (supports @mentions and replies) |
| Pipeline progress | `,e.jsx(n.code,{children:"Stepper"}),` |
| Destructive actions | `,e.jsx(n.code,{children:"AlertDialog"})," (full confirm) or ",e.jsx(n.code,{children:"Popconfirm"})," (quick confirm) |"]}),`
`,e.jsxs(n.p,{children:["Layout: ",e.jsx(n.code,{children:"grid gap-6 lg:grid-cols-[1fr_320px]"}),". The side column stacks under the main column on mobile."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"3-dashboard",children:"3. Dashboard"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`┌ PageHeader  Dashboard          DateRangePicker (presets) ┐
├ StatCard ─┬ StatCard ─┬ StatCard ─┬ StatCard ────────────┤
│ $48k ▲12% │ 2,340     │ 1,204 ▼2% │ 312                  │
├───────────┴───────────┴───────────┴──────────────────────┤
│ Chart (trend, 1 y-axis)        │ BarList (top sources)   │
├────────────────────────────────┼─────────────────────────┤
│ FunnelChart (pipeline)         │ Heatmap (activity)      │
└────────────────────────────────┴─────────────────────────┘
`})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["KPIs: ",e.jsx(n.code,{children:"StatCard"})," (",e.jsx(n.code,{children:"label"}),", ",e.jsx(n.code,{children:"value"}),", ",e.jsx(n.code,{children:"change"}),", ",e.jsx(n.code,{children:"trend"}),", optional ",e.jsx(n.code,{children:"Sparkline"}),") in ",e.jsx(n.code,{children:"grid gap-4 sm:grid-cols-2 lg:grid-cols-4"}),"."]}),`
`,e.jsxs(n.li,{children:["Time range: ",e.jsx(n.code,{children:"DateRangePicker presets"})," drives every widget on the page."]}),`
`,e.jsxs(n.li,{children:["Charts: pick the form using ",e.jsx(n.strong,{children:"Docs › Which Component"}),". Use one y-axis per chart; if two measures have different units, draw two charts."]}),`
`,e.jsx(n.li,{children:"Every chart already renders a screen-reader data table, so don't add another."}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"4-settings",children:"4. Settings"}),`
`,e.jsxs(n.p,{children:["Use ",e.jsx(n.code,{children:"SettingsDialog"}),` for user/account preferences opened from the header, and a
full page for org-level admin.`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<SettingsDialog
  trigger={<Button variant="ghost">Settings</Button>}
  sections={[
    { id: "profile", label: "Profile", icon: <User />, content: <ProfileForm /> },
    { id: "notifications", label: "Notifications", icon: <Bell />, content: <NotificationPrefs /> },
  ]}
/>
`})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Rows: ",e.jsx(n.code,{children:"SettingsRow"})," (label + description on the left, control on the right). It stacks on mobile."]}),`
`,e.jsxs(n.li,{children:["Forms: ",e.jsx(n.code,{children:"Form"})," + ",e.jsx(n.code,{children:"Field"})," with the app's own validation schema. Validation stays in the app."]}),`
`,e.jsxs(n.li,{children:["Saving: ",e.jsx(n.code,{children:"toast()"})," to confirm. Use an inline ",e.jsx(n.code,{children:"Alert"})," only for errors that need reading."]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"5-calendar--scheduling",children:"5. Calendar / scheduling"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"EventCalendar"}),` (month, week and day views) for meetings, follow-ups and bookings. Open
event details in a `,e.jsx(n.code,{children:"Sheet"})," on desktop and a ",e.jsx(n.code,{children:"Drawer"})," on mobile. Use ",e.jsx(n.code,{children:"DateTimePicker"}),` in
the create form.`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"6-auth-screens",children:"6. Auth screens"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"AuthCard"}),` covers sign-in, sign-up and forgot-password. The app supplies the handlers and the
auth provider. The DS supplies layout, fields, errors and the OAuth button row.`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"rules-of-thumb",children:"Rules of thumb"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"One primary button per screen"}),", in ",e.jsx(n.code,{children:"PageHeader"})," ",e.jsx(n.code,{children:"actions"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Empty, loading and error states are part of the page."})," Design all three: ",e.jsx(n.code,{children:"EmptyState"}),", ",e.jsx(n.code,{children:"Skeleton"}),", ",e.jsx(n.code,{children:"Result"}),"/",e.jsx(n.code,{children:"Alert"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Never colour alone for status."})," ",e.jsx(n.code,{children:"StatusBadge"})," has an icon or dot plus a label."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Mobile first-class."})," Large pickers turn into bottom sheets on their own; don't wrap them."]}),`
`]})]})}function c(r={}){const{wrapper:n}={...i(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(s,{...r})}):s(r)}export{c as default};
