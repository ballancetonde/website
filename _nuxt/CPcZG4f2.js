import{H as x,a0 as _,e as v,o as U,w as l,a as c,b as w,a2 as a,h as s,a6 as I,t as p,B}from"./DunD--uw.js";import{U as T}from"./PNLXixl9.js";import{r as k}from"./W_-f9dS_.js";import{t as u}from"./C5XpO-NK.js";import"./B4znLj67.js";import"./ByIZEmDE.js";import"./C2bHYaEW.js";const L={slots:{base:"",trigger:["group relative rounded-[calc(var(--ui-radius)/2)] inline-flex items-center gap-1.5 text-(--ui-text-muted) hover:text-(--ui-text) text-sm focus-visible:ring-2 focus-visible:ring-(--ui-primary) focus:outline-none","transition-colors"],triggerIcon:"size-4 shrink-0 group-data-[state=open]:rotate-180 transition-transform duration-200",triggerLabel:"truncate"}},P=B;var m,g;const S=u({extend:u(L),...((g=(m=P.uiPro)==null?void 0:m.prose)==null?void 0:g.collapsible)||{}}),y=x({__name:"Collapsible",props:{icon:{},name:{default:"properties"},openText:{default:"Show"},closeText:{default:"Hide"},class:{},ui:{}},setup(f){const o=f,d=_(),t=S();return(e,z)=>{const b=I,C=T;return U(),v(C,{"unmount-on-hide":!1,class:a(s(t).base({class:o.class}))},{default:l(({open:h})=>{var n,r,i;return[c("button",{class:a(s(t).trigger({class:(n=o.ui)==null?void 0:n.trigger}))},[w(b,{name:e.icon||s(d).ui.icons.chevronDown,class:a(s(t).triggerIcon({class:(r=o.ui)==null?void 0:r.triggerIcon}))},null,8,["name","class"]),c("span",{class:a(s(t).triggerLabel({class:(i=o.ui)==null?void 0:i.triggerLabel}))},p(h?e.closeText:e.openText)+" "+p(e.name),3)],2)]}),content:l(()=>[k(e.$slots,"default",{mdcUnwrap:"p"})]),_:3},8,["class"])}}}),$=Object.assign(y,{__name:"ProseCollapsible"});export{$ as default};
