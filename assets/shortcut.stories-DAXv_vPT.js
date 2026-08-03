import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as i}from"./index-UiW3gZKV.js";import{c as w}from"./utils-DCADjnpI.js";import{a as N,K as C}from"./kbd-C6lYeCj3.js";import"./_commonjsHelpers-CqkleIqs.js";const l={mod:"⌘",meta:"⌘",cmd:"⌘",alt:"⌥",option:"⌥",shift:"⇧",ctrl:"⌃",control:"⌃"},m={mod:"Ctrl",meta:"Win",cmd:"Ctrl",alt:"Alt",option:"Alt",shift:"Shift",ctrl:"Ctrl",control:"Ctrl"},p={enter:"↵",return:"↵",esc:"Esc",escape:"Esc",backspace:"⌫",delete:"⌦",tab:"Tab",space:"Space",up:"↑",down:"↓",left:"←",right:"→"};function K(){return typeof navigator>"u"?!1:/Mac|iPhone|iPad|iPod/.test(navigator.platform??navigator.userAgent)}function s({keys:g,className:j,...S}){const[c,b]=i.useState(!1);i.useEffect(()=>{b(K())},[]);const k=g.split("+").map(a=>{const t=a.trim(),r=t.toLowerCase();return c&&l[r]?l[r]:!c&&m[r]?m[r]:p[r]?p[r]:t.length===1?t.toUpperCase():t});return e.jsx(N,{"data-slot":"shortcut",className:w(j),...S,children:k.map((a,t)=>e.jsx(C,{children:a},`${a}-${t}`))})}s.__docgenInfo={description:'Platform-aware keyboard-shortcut hint built on `Kbd`. Pass `keys="mod+K"`\nand macOS users see ⌘K while everyone else sees Ctrl K. Purely visual —\npair with `aria-keyshortcuts` on the target control.',methods:[],displayName:"Shortcut",props:{keys:{required:!0,tsType:{name:"string"},description:'Shortcut spec, keys joined with `+`. `"mod"` renders ⌘ on Apple\nplatforms and Ctrl elsewhere; `"shift"`, `"alt"`, `"enter"`, `"esc"`,\narrows, and single characters are prettified automatically.\nExamples: `"mod+K"`, `"shift+Enter"`, `"G then I"` is two Shortcuts.'}}};const _={title:"UI/Shortcut",component:s,tags:["autodocs"],args:{keys:"mod+K"}},n={render:()=>e.jsx(s,{keys:"mod+K"})},o={render:()=>e.jsxs("div",{className:"flex flex-col gap-2 text-sm",children:[e.jsxs("span",{className:"flex items-center justify-between gap-8",children:["Open command palette ",e.jsx(s,{keys:"mod+K"})]}),e.jsxs("span",{className:"flex items-center justify-between gap-8",children:["Send message ",e.jsx(s,{keys:"shift+enter"})]}),e.jsxs("span",{className:"flex items-center justify-between gap-8",children:["Toggle sidebar ",e.jsx(s,{keys:"mod+B"})]}),e.jsxs("span",{className:"flex items-center justify-between gap-8",children:["Dismiss ",e.jsx(s,{keys:"esc"})]})]})};var d,u,f;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => <Shortcut keys="mod+K" />
}`,...(f=(u=n.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};var h,x,y;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-2 text-sm">
      <span className="flex items-center justify-between gap-8">
        Open command palette <Shortcut keys="mod+K" />
      </span>
      <span className="flex items-center justify-between gap-8">
        Send message <Shortcut keys="shift+enter" />
      </span>
      <span className="flex items-center justify-between gap-8">
        Toggle sidebar <Shortcut keys="mod+B" />
      </span>
      <span className="flex items-center justify-between gap-8">
        Dismiss <Shortcut keys="esc" />
      </span>
    </div>
}`,...(y=(x=o.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};const I=["Default","Combinations"];export{o as Combinations,n as Default,I as __namedExportsOrder,_ as default};
