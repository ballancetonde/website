import{D as h,v as m,i as l,k as p,I as g,h as e,V as f,ac as u,_ as d,ad as _,ae as C,G as I,af as w}from"./Dp1I7d1F.js";import{t as r}from"./DYQ_yBqI.js";const b={base:""},v=d;var n,o;const k=r({extend:r(b),...((o=(n=v.uiPro)==null?void 0:n.prose)==null?void 0:o.img)||{}}),L=h({__name:"Img",props:{src:{},alt:{},width:{},height:{},class:{}},setup(i){const s=i,c=m(()=>{var a;if((a=s.src)!=null&&a.startsWith("/")&&!s.src.startsWith("//")){const t=_(C(I().app.baseURL));if(t!=="/"&&!s.src.startsWith(t))return w(t,s.src)}return s.src});return(a,t)=>(p(),l(f(e(u)),{src:c.value,alt:a.alt,width:a.width,height:a.height,class:g(e(k)({class:s.class}))},null,8,["src","alt","width","height","class"]))}}),S=Object.assign(L,{__name:"ProseImg"});export{S as default};
