import{d as A,aA as S,aB as B,D as k,E as t,e,w as h,H as l,n as o,G as r,P as C,O as p,f as c,U as x,S as U,J as G,c as N,t as P,K as V}from"./EK8vmNfY.js";const $={slots:{base:"font-medium inline-flex items-center",label:"truncate",leadingIcon:"shrink-0",leadingAvatar:"shrink-0",leadingAvatarSize:"",trailingIcon:"shrink-0"},variants:{buttonGroup:{horizontal:"not-only:first:rounded-e-none not-only:last:rounded-s-none not-last:not-first:rounded-none",vertical:"not-only:first:rounded-b-none not-only:last:rounded-t-none not-last:not-first:rounded-none"},color:{primary:"",secondary:"",success:"",info:"",warning:"",error:"",neutral:""},variant:{solid:"",outline:"",soft:"",subtle:""},size:{xs:{base:"text-[8px]/3 px-1 py-0.5 gap-1 rounded-[calc(var(--ui-radius))]",leadingIcon:"size-3",leadingAvatarSize:"3xs",trailingIcon:"size-3"},sm:{base:"text-[10px]/3 px-1.5 py-1 gap-1 rounded-[calc(var(--ui-radius))]",leadingIcon:"size-3",leadingAvatarSize:"3xs",trailingIcon:"size-3"},md:{base:"text-xs px-2 py-1 gap-1 rounded-[calc(var(--ui-radius)*1.5)]",leadingIcon:"size-4",leadingAvatarSize:"3xs",trailingIcon:"size-4"},lg:{base:"text-sm px-2 py-1 gap-1.5 rounded-[calc(var(--ui-radius)*1.5)]",leadingIcon:"size-5",leadingAvatarSize:"2xs",trailingIcon:"size-5"},xl:{base:"text-base px-2.5 py-1 gap-1.5 rounded-[calc(var(--ui-radius)*1.5)]",leadingIcon:"size-6",leadingAvatarSize:"2xs",trailingIcon:"size-6"}}},compoundVariants:[{color:"primary",variant:"solid",class:"bg-(--ui-primary) text-(--ui-bg)"},{color:"secondary",variant:"solid",class:"bg-(--ui-secondary) text-(--ui-bg)"},{color:"success",variant:"solid",class:"bg-(--ui-success) text-(--ui-bg)"},{color:"info",variant:"solid",class:"bg-(--ui-info) text-(--ui-bg)"},{color:"warning",variant:"solid",class:"bg-(--ui-warning) text-(--ui-bg)"},{color:"error",variant:"solid",class:"bg-(--ui-error) text-(--ui-bg)"},{color:"primary",variant:"outline",class:"text-(--ui-primary) ring ring-inset ring-(--ui-primary)/50"},{color:"secondary",variant:"outline",class:"text-(--ui-secondary) ring ring-inset ring-(--ui-secondary)/50"},{color:"success",variant:"outline",class:"text-(--ui-success) ring ring-inset ring-(--ui-success)/50"},{color:"info",variant:"outline",class:"text-(--ui-info) ring ring-inset ring-(--ui-info)/50"},{color:"warning",variant:"outline",class:"text-(--ui-warning) ring ring-inset ring-(--ui-warning)/50"},{color:"error",variant:"outline",class:"text-(--ui-error) ring ring-inset ring-(--ui-error)/50"},{color:"primary",variant:"soft",class:"bg-(--ui-primary)/10 text-(--ui-primary)"},{color:"secondary",variant:"soft",class:"bg-(--ui-secondary)/10 text-(--ui-secondary)"},{color:"success",variant:"soft",class:"bg-(--ui-success)/10 text-(--ui-success)"},{color:"info",variant:"soft",class:"bg-(--ui-info)/10 text-(--ui-info)"},{color:"warning",variant:"soft",class:"bg-(--ui-warning)/10 text-(--ui-warning)"},{color:"error",variant:"soft",class:"bg-(--ui-error)/10 text-(--ui-error)"},{color:"primary",variant:"subtle",class:"bg-(--ui-primary)/10 text-(--ui-primary) ring ring-inset ring-(--ui-primary)/25"},{color:"secondary",variant:"subtle",class:"bg-(--ui-secondary)/10 text-(--ui-secondary) ring ring-inset ring-(--ui-secondary)/25"},{color:"success",variant:"subtle",class:"bg-(--ui-success)/10 text-(--ui-success) ring ring-inset ring-(--ui-success)/25"},{color:"info",variant:"subtle",class:"bg-(--ui-info)/10 text-(--ui-info) ring ring-inset ring-(--ui-info)/25"},{color:"warning",variant:"subtle",class:"bg-(--ui-warning)/10 text-(--ui-warning) ring ring-inset ring-(--ui-warning)/25"},{color:"error",variant:"subtle",class:"bg-(--ui-error)/10 text-(--ui-error) ring ring-inset ring-(--ui-error)/25"},{color:"neutral",variant:"solid",class:"text-(--ui-bg) bg-(--ui-bg-inverted)"},{color:"neutral",variant:"outline",class:"ring ring-inset ring-(--ui-border-accented) text-(--ui-text) bg-(--ui-bg)"},{color:"neutral",variant:"soft",class:"text-(--ui-text) bg-(--ui-bg-elevated)"},{color:"neutral",variant:"subtle",class:"ring ring-inset ring-(--ui-border-accented) text-(--ui-text) bg-(--ui-bg-elevated)"}],defaultVariants:{color:"primary",variant:"solid",size:"md"}},D=V;var m;const E=p({extend:p($),...((m=D.ui)==null?void 0:m.badge)||{}}),O=A({__name:"Badge",props:{as:{default:"span"},label:{},color:{},variant:{},size:{},class:{},ui:{},icon:{},avatar:{},leading:{type:Boolean},leadingIcon:{},trailing:{type:Boolean},trailingIcon:{}},setup(y){const a=y,{orientation:f,size:z}=S(a),{isLeading:I,isTrailing:w,leadingIconName:u,trailingIconName:g}=B(a),s=k(()=>E({color:a.color,variant:a.variant,size:z.value||a.size,buttonGroup:f.value}));return(i,_)=>{var d;return e(),t(r(C),{as:i.as,class:o(s.value.base({class:[a.class,(d=a.ui)==null?void 0:d.base]}))},{default:h(()=>[l(i.$slots,"leading",{},()=>{var n,v,b;return[r(I)&&r(u)?(e(),t(x,{key:0,name:r(u),class:o(s.value.leadingIcon({class:(n=a.ui)==null?void 0:n.leadingIcon}))},null,8,["name","class"])):i.avatar?(e(),t(U,G({key:1,size:((v=a.ui)==null?void 0:v.leadingAvatarSize)||s.value.leadingAvatarSize()},i.avatar,{class:s.value.leadingAvatar({class:(b=a.ui)==null?void 0:b.leadingAvatar})}),null,16,["size","class"])):c("",!0)]}),l(i.$slots,"default",{},()=>{var n;return[i.label?(e(),N("span",{key:0,class:o(s.value.label({class:(n=a.ui)==null?void 0:n.label}))},P(i.label),3)):c("",!0)]}),l(i.$slots,"trailing",{},()=>{var n;return[r(w)&&r(g)?(e(),t(x,{key:0,name:r(g),class:o(s.value.trailingIcon({class:(n=a.ui)==null?void 0:n.trailingIcon}))},null,8,["name","class"])):c("",!0)]})]),_:3},8,["as","class"])}}}),H=Object.assign(O,{__name:"UBadge"});export{H as U};
