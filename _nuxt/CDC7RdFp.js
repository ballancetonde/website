import{E as H,aa as P,H as z,g as y,w as _,a8 as o,i as N,o as s,X as n,b as U,a as V,c as r,j as l,aj as E,D as S,d as c,t as p,F as D,r as F,af as L,ab as A,aE as O}from"./BZBye_eQ.js";import{_ as R}from"./CRHlbcbN.js";import{t as x}from"./LYvMSirF.js";const T={slots:{root:"relative isolate",container:"flex flex-col lg:grid py-24 sm:py-32 lg:py-40 gap-16 sm:gap-y-24",wrapper:"",headline:"mb-4",title:"text-5xl sm:text-7xl text-pretty tracking-tight font-bold text-(--ui-text-highlighted)",description:"text-lg sm:text-xl/8 text-(--ui-text-muted)",links:"mt-10 flex flex-wrap gap-x-6 gap-y-3"},variants:{orientation:{horizontal:{container:"lg:grid-cols-2 lg:items-center",description:"text-pretty"},vertical:{container:"",headline:"justify-center",wrapper:"text-center",description:"text-balance",links:"justify-center"}},reverse:{true:{wrapper:"order-last"}},headline:{true:{headline:"font-semibold text-(--ui-primary) flex items-center gap-1.5"}},title:{true:{description:"mt-6"}}}},X={key:1,class:"hidden lg:block"},q=S;var b;const G=x({extend:x(T),...((b=q.uiPro)==null?void 0:b.pageHero)||{}}),I=H({__name:"PageHero",props:{as:{},headline:{},title:{},description:{},links:{},orientation:{default:"vertical"},reverse:{type:Boolean},class:{},ui:{}},setup(w){const t=w,a=P(),i=z(()=>G({orientation:t.orientation,reverse:t.reverse,title:!!t.title||!!a.title}));return(e,J)=>{var d;const $=L,j=R;return s(),y(N(E),{as:e.as,"data-orientation":e.orientation,class:o(i.value.root({class:[t.class,(d=t.ui)==null?void 0:d.root]}))},{default:_(()=>{var u;return[n(e.$slots,"top"),U(j,{class:o(i.value.container({class:(u=t.ui)==null?void 0:u.container}))},{default:_(()=>{var m,g,h,f,v,k;return[V("div",{class:o(i.value.wrapper({class:(m=t.ui)==null?void 0:m.wrapper}))},[e.headline||a.headline?(s(),r("div",{key:0,class:o(i.value.headline({class:(g=t.ui)==null?void 0:g.headline,headline:!a.headline}))},[n(e.$slots,"headline",{},()=>[c(p(e.headline),1)])],2)):l("",!0),e.title||a.title?(s(),r("h1",{key:1,class:o(i.value.title({class:(h=t.ui)==null?void 0:h.title}))},[n(e.$slots,"title",{},()=>[c(p(e.title),1)])],2)):l("",!0),e.description||a.description?(s(),r("div",{key:2,class:o(i.value.description({class:(f=t.ui)==null?void 0:f.description}))},[n(e.$slots,"description",{},()=>[c(p(e.description),1)])],2)):l("",!0),(v=e.links)!=null&&v.length||a.links?(s(),r("div",{key:3,class:o(i.value.links({class:(k=t.ui)==null?void 0:k.links}))},[n(e.$slots,"links",{},()=>[(s(!0),r(D,null,F(e.links,(C,B)=>(s(),y($,A({key:B,size:"xl",ref_for:!0},C),null,16))),128))])],2)):l("",!0)],2),a.default?n(e.$slots,"default",{key:0}):e.orientation==="horizontal"?(s(),r("div",X)):l("",!0)]}),_:3},8,["class"]),n(e.$slots,"bottom")]}),_:3},8,["as","data-orientation","class"])}}}),W=Object.assign(I,{__name:"UPageHero"}),Y=O("/soiree-jeu-2.jpg");export{Y as _,W as a};
