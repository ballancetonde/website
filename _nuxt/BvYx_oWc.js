import{u as P,a as d,r as D,s as B,t as H,g as M,o as R,b as E,w as N,c as g,d as S,e as V,f as z,h as w}from"./Dp1I7d1F.js";const j=s=>s==="defer"||s===!1;function I(...s){var p;const n=typeof s[s.length-1]=="string"?s.pop():void 0;typeof s[0]!="string"&&s.unshift(n);let[e,u,a={}]=s;if(typeof e!="string")throw new TypeError("[nuxt] [asyncData] key must be a string.");if(typeof u!="function")throw new TypeError("[nuxt] [asyncData] handler must be a function.");const t=P(),C=u,b=()=>d.value,O=()=>t.isHydrating?t.payload.data[e]:t.static.data[e];a.server=a.server??!0,a.default=a.default??b,a.getCachedData=a.getCachedData??O,a.lazy=a.lazy??!1,a.immediate=a.immediate??!0,a.deep=a.deep??d.deep,a.dedupe=a.dedupe??"cancel";const f=a.getCachedData(e,t),h=f!=null;if(!t._asyncData[e]||!a.immediate){(p=t.payload._errors)[e]??(p[e]=d.errorValue);const o=a.deep?D:B;t._asyncData[e]={data:o(h?f:a.default()),pending:D(!h),error:H(t.payload._errors,e),status:D("idle"),_default:a.default}}const r={...t._asyncData[e]};delete r._default,r.refresh=r.execute=(o={})=>{if(t._asyncDataPromises[e]){if(j(o.dedupe??a.dedupe))return t._asyncDataPromises[e];t._asyncDataPromises[e].cancelled=!0}if(o._initial||t.isHydrating&&o._initial!==!1){const c=o._initial?f:a.getCachedData(e,t);if(c!=null)return Promise.resolve(c)}r.pending.value=!0,r.status.value="pending";const l=new Promise((c,i)=>{try{c(C(t))}catch(y){i(y)}}).then(async c=>{if(l.cancelled)return t._asyncDataPromises[e];let i=c;a.transform&&(i=await a.transform(c)),a.pick&&(i=T(i,a.pick)),t.payload.data[e]=i,r.data.value=i,r.error.value=d.errorValue,r.status.value="success"}).catch(c=>{if(l.cancelled)return t._asyncDataPromises[e];r.error.value=z(c),r.data.value=w(a.default()),r.status.value="error"}).finally(()=>{l.cancelled||(r.pending.value=!1,delete t._asyncDataPromises[e])});return t._asyncDataPromises[e]=l,t._asyncDataPromises[e]},r.clear=()=>K(t,e);const _=()=>r.refresh({_initial:!0}),m=a.server!==!1&&t.payload.serverRendered;{const o=M();if(o&&m&&a.immediate&&!o.sp&&(o.sp=[]),o&&!o._nuxtOnBeforeMountCbs){o._nuxtOnBeforeMountCbs=[];const i=o._nuxtOnBeforeMountCbs;R(()=>{i.forEach(y=>{y()}),i.splice(0,i.length)}),E(()=>i.splice(0,i.length))}m&&t.isHydrating&&(r.error.value||f!=null)?(r.pending.value=!1,r.status.value=r.error.value?"error":"success"):o&&(t.payload.serverRendered&&t.isHydrating||a.lazy)&&a.immediate?o._nuxtOnBeforeMountCbs.push(_):a.immediate&&_();const l=V();if(a.watch){const i=N(a.watch,()=>r.refresh());l&&g(i)}const c=t.hook("app:data:refresh",async i=>{(!i||i.includes(e))&&await r.refresh()});l&&g(c)}const v=Promise.resolve(t._asyncDataPromises[e]).then(()=>r);return Object.assign(v,r),v}async function U(s){await new Promise(e=>S(e)),await P().hooks.callHookParallel("app:data:refresh",void 0)}function K(s,n){n in s.payload.data&&(s.payload.data[n]=void 0),n in s.payload._errors&&(s.payload._errors[n]=d.errorValue),s._asyncData[n]&&(s._asyncData[n].data.value=w(s._asyncData[n]._default()),s._asyncData[n].error.value=d.errorValue,s._asyncData[n].pending.value=!1,s._asyncData[n].status.value="idle"),n in s._asyncDataPromises&&(s._asyncDataPromises[n]&&(s._asyncDataPromises[n].cancelled=!0),s._asyncDataPromises[n]=void 0)}function T(s,n){const e={};for(const u of n)e[u]=s[u];return e}export{U as r,I as u};
