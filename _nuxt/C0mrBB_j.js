import{H as _,a4 as B,a0 as P,D as i,c as m,o as r,e as n,$ as s,a as v,w as U,a5 as V,a2 as a,h as z,t as S,a3 as $,a6 as A,B as D}from"./DunD--uw.js";import{r as L}from"./W_-f9dS_.js";import{t as h}from"./C5XpO-NK.js";import"./C2bHYaEW.js";const N={slots:{base:["group relative block p-4 sm:p-6 border border-(--ui-border) rounded-[calc(var(--ui-radius)*1.5)] bg-(--ui-bg)","transition-colors"],icon:"size-6 mb-2 block",title:"text-(--ui-text-highlighted) font-semibold",description:"text-[15px] text-(--ui-text-muted)",externalIcon:["size-4 align-top absolute right-2 top-2 text-(--ui-text-dimmed) pointer-events-none","transition-colors"]},variants:{color:{primary:{icon:"text-(--ui-primary)"},secondary:{icon:"text-(--ui-secondary)"},success:{icon:"text-(--ui-success)"},info:{icon:"text-(--ui-info)"},warning:{icon:"text-(--ui-warning)"},error:{icon:"text-(--ui-error)"},neutral:{icon:"text-(--ui-text-highlighted)"}},to:{true:""},title:{true:{description:"mt-1"}}},compoundVariants:[{color:"primary",to:!0,class:{base:"hover:bg-(--ui-primary)/10 hover:border-(--ui-primary)",externalIcon:"group-hover:text-(--ui-primary)"}},{color:"secondary",to:!0,class:{base:"hover:bg-(--ui-secondary)/10 hover:border-(--ui-secondary)",externalIcon:"group-hover:text-(--ui-secondary)"}},{color:"success",to:!0,class:{base:"hover:bg-(--ui-success)/10 hover:border-(--ui-success)",externalIcon:"group-hover:text-(--ui-success)"}},{color:"info",to:!0,class:{base:"hover:bg-(--ui-info)/10 hover:border-(--ui-info)",externalIcon:"group-hover:text-(--ui-info)"}},{color:"warning",to:!0,class:{base:"hover:bg-(--ui-warning)/10 hover:border-(--ui-warning)",externalIcon:"group-hover:text-(--ui-warning)"}},{color:"error",to:!0,class:{base:"hover:bg-(--ui-error)/10 hover:border-(--ui-error)",externalIcon:"group-hover:text-(--ui-error)"}},{color:"neutral",to:!0,class:{base:"hover:bg-(--ui-bg-elevated)/50 hover:border-(--ui-border-inverted)",externalIcon:"group-hover:text-(--ui-text-highlighted)"}}],defaultVariants:{color:"primary"}},j=D;var x,f;const E=h({extend:h(N),...((f=(x=j.uiPro)==null?void 0:x.prose)==null?void 0:f.card)||{}}),H=_({inheritAttrs:!1,__name:"Card",props:{to:{},target:{},icon:{},title:{},color:{},class:{},ui:{}},setup(y){const e=y,k=B(),C=P(),t=i(()=>E({color:e.color,to:!!e.to,title:!!e.title})),c=i(()=>e.target||(e.to&&typeof e.to=="string"&&e.to.startsWith("http")?"_blank":void 0)),I=i(()=>(e.title||"Card link").trim());return(o,l)=>{var p,d,g,b;const w=$,u=A;return r(),m("div",{class:a(t.value.base({class:e.class}))},[o.to?(r(),n(w,V({key:0,"aria-label":I.value},{to:o.to,target:c.value,...o.$attrs},{class:"focus:outline-none",tabindex:"-1",raw:""}),{default:U(()=>l[0]||(l[0]=[v("span",{class:"absolute inset-0","aria-hidden":"true"},null,-1)])),_:1},16,["aria-label"])):s("",!0),o.icon?(r(),n(u,{key:1,name:o.icon,class:a(t.value.icon({class:(p=e.ui)==null?void 0:p.icon}))},null,8,["name","class"])):s("",!0),o.to&&c.value==="_blank"?(r(),n(u,{key:2,name:z(C).ui.icons.external,class:a(t.value.externalIcon({class:(d=e.ui)==null?void 0:d.externalIcon}))},null,8,["name","class"])):s("",!0),v("p",{class:a(t.value.title({class:(g=e.ui)==null?void 0:g.title}))},S(o.title),3),k.default?(r(),m("p",{key:3,class:a(t.value.description({class:(b=e.ui)==null?void 0:b.description}))},[L(o.$slots,"default",{mdcUnwrap:"p"})],2)):s("",!0)],2)}}}),G=Object.assign(H,{__name:"ProseCard"});export{G as default};
