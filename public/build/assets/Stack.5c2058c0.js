import{v,r as u,x as b,b1 as x,y as k,H as h,_ as y,b2 as m,b3 as p,b4 as j,Z as V,b5 as P,b6 as R}from"./index.5ce80200.js";const B=["component","direction","spacing","divider","children"];function D(e,o){const t=u.exports.Children.toArray(e).filter(Boolean);return t.reduce((i,c,s)=>(i.push(c),s<t.length-1&&i.push(u.exports.cloneElement(o,{key:`separator-${s}`})),i),[])}const S=e=>({row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"})[e],_=({ownerState:e,theme:o})=>{let t=y({display:"flex",flexDirection:"column"},m({theme:o},p({values:e.direction,breakpoints:o.breakpoints.values}),i=>({flexDirection:i})));if(e.spacing){const i=j(o),c=Object.keys(o.breakpoints.values).reduce((n,r)=>((typeof e.spacing=="object"&&e.spacing[r]!=null||typeof e.direction=="object"&&e.direction[r]!=null)&&(n[r]=!0),n),{}),s=p({values:e.direction,base:c}),a=p({values:e.spacing,base:c});typeof s=="object"&&Object.keys(s).forEach((n,r,l)=>{if(!s[n]){const g=r>0?s[l[r-1]]:"column";s[n]=g}}),t=V(t,m({theme:o},a,(n,r)=>({"& > :not(style) + :not(style)":{margin:0,[`margin${S(r?s[r]:e.direction)}`]:R(i,n)}})))}return t=P(o.breakpoints,t),t},E=v("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,o)=>[o.root]})(_),F=u.exports.forwardRef(function(o,t){const i=b({props:o,name:"MuiStack"}),c=x(i),{component:s="div",direction:a="column",spacing:d=0,divider:n,children:r}=c,l=k(c,B),f={direction:a,spacing:d};return h.jsx(E,y({as:s,ownerState:f,ref:t},l,{children:n?D(r,n):r}))}),$=F;export{$ as S};