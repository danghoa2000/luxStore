import{v as c,r as b,R as t}from"./index.5ce80200.js";import{p as o}from"./index.834d2615.js";import{S as d,s as l,a as u,b as x,c as f,A as p,R as S}from"./RateReview.2cdcdcbe.js";import{S as C}from"./Stack.5c2058c0.js";import{L as g,C as v,a as k}from"./LocalShipping.a6bfb39a.js";c("div")(({theme:e,ownerState:a})=>({color:e.palette.mode==="dark"?e.palette.grey[700]:"#eaeaf0",display:"flex",height:22,alignItems:"center",...a.active&&{color:"#784af4"},"& .QontoStepIcon-completedIcon":{color:"#784af4",zIndex:1,fontSize:18},"& .QontoStepIcon-circle":{width:8,height:8,borderRadius:"50%",backgroundColor:"currentColor"}}));o.exports.bool,o.exports.string,o.exports.bool;const I=c(d)(({theme:e})=>({[`&.${l.alternativeLabel}`]:{top:22},[`&.${l.active}`]:{[`& .${l.line}`]:{backgroundImage:"linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)"}},[`&.${l.completed}`]:{[`& .${l.line}`]:{backgroundImage:"linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)"}},[`& .${l.line}`]:{height:3,border:0,backgroundColor:e.palette.mode==="dark"?e.palette.grey[800]:"#eaeaf0",borderRadius:1}})),E=c("div")(({theme:e,ownerState:a})=>({backgroundColor:e.palette.mode==="dark"?e.palette.grey[700]:"#ccc",zIndex:1,color:"#fff",width:50,height:50,display:"flex",borderRadius:"50%",justifyContent:"center",alignItems:"center",...a.active&&{backgroundImage:"linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)",boxShadow:"0 4px 10px 0 rgba(0,0,0,.25)"},...a.completed&&{backgroundImage:"linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)"}}));function m(e,a){const{active:n,completed:s,className:r}=e;let i={1:t.createElement(p,null),2:t.createElement(g,null),3:t.createElement(v,null),4:t.createElement(S,null)};return(a==null?void 0:a.status)==3&&(i={1:t.createElement(p,null),2:t.createElement(g,null),3:t.createElement(k,null)}),t.createElement(E,{ownerState:{completed:s,active:n},className:r},i[String(e.icon)])}m.propTypes={active:o.exports.bool,className:o.exports.string,completed:o.exports.bool,icon:o.exports.node};const L=({order:e})=>{const a=b.exports.useMemo(()=>{let n=["package-box","Delivery","success","Review"];return(e==null?void 0:e.status)==3&&(n=["package-box","Delivery","cancel"]),n},[e]);return t.createElement(C,{sx:{width:"100%"},spacing:4},t.createElement(u,{alternativeLabel:!0,activeStep:(e==null?void 0:e.status)||0,connector:t.createElement(I,null)},a.map((n,s)=>t.createElement(x,{key:n},t.createElement(f,{StepIconComponent:r=>m(r,e)})))))};export{L as O};