(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[974],{1710:(e,a,n)=>{Promise.resolve().then(n.bind(n,6964))},6964:(e,a,n)=>{"use strict";n.r(a),n.d(a,{default:()=>j});var i=n(632),r=n(3960),t=n.n(r),c=n(5268);let o=()=>({machineCode:"",offlineActivationCode:"",onlineActivationCode:"",verified:!1,reason:""}),s=(0,c.createContext)(o()),l=async e=>{let{machine_code:a,activation_code:n}=e;return await (await fetch("/verify?machine_code=".concat(a,"&activation_code=").concat(n))).json()},d=()=>Object.fromEntries(new URLSearchParams(window.location.search.slice()).entries());var h=n(9988),_=n.n(h);let v=e=>{let{left:a,right:n}=e;return(0,i.jsxs)("div",{className:_().container,children:[(0,i.jsx)("span",{className:_().left,children:a}),(0,i.jsx)("div",{className:_().placeholder}),(0,i.jsx)("span",{className:_().right,children:n})]})};var f=n(9934),x=n.n(f);let m=()=>{let{verified:e,machineCode:a,offlineActivationCode:n,onlineActivationCode:r,reason:t}=(0,c.useContext)(s);return(0,i.jsxs)("div",{className:x().container,children:[(0,i.jsx)(v,{left:"机器码",right:a}),(0,i.jsx)(v,{left:"离线激活码",right:n}),(0,i.jsx)(v,{left:"在线激活码",right:r}),(0,i.jsx)("span",{className:x().reason,children:e?"激活成功":"激活失败:".concat(t)})]})},j=()=>{let[e,a]=(0,c.useState)(o());return(0,c.useEffect)(()=>{let e=d(),n=e=>a(a=>({...a,...e}));(null==e?void 0:e.activation_code)&&(null==e?void 0:e.machine_code)?(n({machineCode:e.machine_code}),l(e).then(a=>{a.verified?n({verified:!0,onlineActivationCode:e.activation_code,offlineActivationCode:a.authorization_code}):n({verified:!1,reason:a.description})}).catch(e=>{n({verified:!1,reason:"网络异常，请重试"})})):n({verified:!1,reason:"参数不合法！"})},[]),(0,i.jsx)(s.Provider,{value:e,children:(0,i.jsxs)("div",{className:t().container,children:[(0,i.jsx)("div",{className:t().header,children:(0,i.jsx)("h3",{children:"查看激活记录"})}),(0,i.jsx)(m,{})]})})}},9934:e=>{e.exports={container:"Card_container__F1eTU",reason:"Card_reason__rwlW_"}},9988:e=>{e.exports={container:"Row_container__FsWqb",placeholder:"Row_placeholder__BzVLd",left:"Row_left___J0eq"}},3960:e=>{e.exports={container:"home_container__2nSFh",header:"home_header__OUbfE"}}},e=>{var a=a=>e(e.s=a);e.O(0,[829,15,723,358],()=>a(1710)),_N_E=e.O()}]);