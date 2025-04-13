import{V as u,W as t}from"./DEKo_rzn.js";let o=0;function d(n,e="reka"){if(n)return n;const r=u({useId:void 0});return t?`${e}-${t()}`:r.useId?`${e}-${r.useId()}`:`${e}-${++o}`}export{d as u};
