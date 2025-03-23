import{_ as k,a as w}from"./CGfjulL_.js";import{H as v,ai as B,ak as M,al as m,aj as R,k as V,e as b,o as h,w as f,G as y,h as a,ad as C,b as g,D as p,R as z,aA as S,$ as _,an as D,aB as L,aC as A,q as H,aD as O,a5 as P,ao as q}from"./DunD--uw.js";import{u as F}from"./O3BalUGk.js";import{u as K}from"./ByIZEmDE.js";const[$,j]=B("TabsRoot"),Q=v({__name:"TabsRoot",props:{defaultValue:{},orientation:{default:"horizontal"},dir:{},activationMode:{default:"automatic"},modelValue:{},unmountOnHide:{type:Boolean,default:!0},asChild:{type:Boolean},as:{}},emits:["update:modelValue"],setup(d,{emit:n}){const o=d,e=n,{orientation:l,unmountOnHide:r,dir:s}=M(o),t=F(s);m();const i=R(o,"modelValue",e,{defaultValue:o.defaultValue,passive:o.modelValue===void 0}),u=V();return j({modelValue:i,changeModelValue:c=>{i.value=c},orientation:l,dir:t,unmountOnHide:r,activationMode:o.activationMode,baseId:K(void 0,"reka-tabs"),tabsList:u}),(c,E)=>(h(),b(a(C),{dir:a(t),"data-orientation":a(l),"as-child":c.asChild,as:c.as},{default:f(()=>[y(c.$slots,"default",{modelValue:a(i)})]),_:3},8,["dir","data-orientation","as-child","as"]))}}),U=v({__name:"TabsList",props:{loop:{type:Boolean,default:!0},asChild:{type:Boolean},as:{}},setup(d){const n=d,{loop:o}=M(n),{forwardRef:e,currentElement:l}=m(),r=$();return r.tabsList=l,(s,t)=>(h(),b(a(k),{"as-child":"",orientation:a(r).orientation.value,dir:a(r).dir.value,loop:a(o)},{default:f(()=>[g(a(C),{ref:a(e),role:"tablist","as-child":s.asChild,as:s.as,"aria-orientation":a(r).orientation.value},{default:f(()=>[y(s.$slots,"default")]),_:3},8,["as-child","as","aria-orientation"])]),_:3},8,["orientation","dir","loop"]))}});function I(d,n){return`${d}-trigger-${n}`}function T(d,n){return`${d}-content-${n}`}const X=v({__name:"TabsContent",props:{value:{},forceMount:{type:Boolean},asChild:{type:Boolean},as:{}},setup(d){const n=d,{forwardRef:o}=m(),e=$(),l=p(()=>I(e.baseId,n.value)),r=p(()=>T(e.baseId,n.value)),s=p(()=>n.value===e.modelValue.value),t=V(s.value);return z(()=>{requestAnimationFrame(()=>{t.value=!1})}),(i,u)=>(h(),b(a(D),{present:i.forceMount||s.value,"force-mount":""},{default:f(({present:c})=>[g(a(C),{id:r.value,ref:a(o),"as-child":i.asChild,as:i.as,role:"tabpanel","data-state":s.value?"active":"inactive","data-orientation":a(e).orientation.value,"aria-labelledby":l.value,hidden:!c,tabindex:"0",style:S({animationDuration:t.value?"0s":void 0})},{default:f(()=>[!a(e).unmountOnHide.value||c?y(i.$slots,"default",{key:0}):_("",!0)]),_:2},1032,["id","as-child","as","data-state","data-orientation","aria-labelledby","hidden","style"])]),_:3},8,["present"]))}}),Y=v({__name:"TabsTrigger",props:{value:{},disabled:{type:Boolean,default:!1},asChild:{type:Boolean},as:{default:"button"}},setup(d){const n=d,{forwardRef:o}=m(),e=$(),l=p(()=>I(e.baseId,n.value)),r=p(()=>T(e.baseId,n.value)),s=p(()=>n.value===e.modelValue.value);return(t,i)=>(h(),b(a(w),{"as-child":"",focusable:!t.disabled,active:s.value},{default:f(()=>[g(a(C),{id:l.value,ref:a(o),role:"tab",type:t.as==="button"?"button":void 0,as:t.as,"as-child":t.asChild,"aria-selected":s.value?"true":"false","aria-controls":r.value,"data-state":s.value?"active":"inactive",disabled:t.disabled,"data-disabled":t.disabled?"":void 0,"data-orientation":a(e).orientation.value,onMousedown:i[0]||(i[0]=A(u=>{!t.disabled&&u.ctrlKey===!1?a(e).changeModelValue(t.value):u.preventDefault()},["left"])),onKeydown:i[1]||(i[1]=L(u=>a(e).changeModelValue(t.value),["enter","space"])),onFocus:i[2]||(i[2]=()=>{const u=a(e).activationMode!=="manual";!s.value&&!t.disabled&&u&&a(e).changeModelValue(t.value)})},{default:f(()=>[y(t.$slots,"default")]),_:3},8,["id","type","as","as-child","aria-selected","aria-controls","data-state","disabled","data-disabled","data-orientation"])]),_:3},8,["focusable","active"]))}}),Z=v({__name:"TabsIndicator",props:{asChild:{type:Boolean},as:{}},setup(d){const n=d,o=$();m();const e=V(),l=V({size:null,position:null});H(()=>[o.modelValue.value,o==null?void 0:o.dir.value],async()=>{await q(),r()},{immediate:!0}),O([o.tabsList,e],r);function r(){var s;e.value=(s=o.tabsList.value)==null?void 0:s.querySelector('[role="tab"][data-state="active"]'),e.value&&(o.orientation.value==="horizontal"?l.value={size:e.value.offsetWidth,position:e.value.offsetLeft}:l.value={size:e.value.offsetHeight,position:e.value.offsetTop})}return(s,t)=>typeof l.value.size=="number"?(h(),b(a(C),P({key:0},n,{style:{"--reka-tabs-indicator-size":`${l.value.size}px`,"--reka-tabs-indicator-position":`${l.value.position}px`}}),{default:f(()=>[y(s.$slots,"default")]),_:3},16,["style"])):_("",!0)}});export{Z as _,U as a,Q as b,Y as c,X as d};
