import{a7 as P,R as e,T as g,aa as O,B as k,G as i,C as p,F as f,N as v,O as N,ar as _,as as G,at as W,i as K,S as Y,c as $,r as c,ay as z,au as J,av as Q,d as M,aC as D,q as b,u as X,a9 as Z,aw as ee}from"./index.5ce80200.js";import{B as te}from"./Breadcrumbs.f5b119d2.js";import{B as ae}from"./BorderColor.6ee4679d.js";import{C as re}from"./Call.484a3e82.js";import{A as ne}from"./AddHomeWork.5fba4997.js";import{R as se,F as R,a as L}from"./RadioGroup.7a04bd2c.js";const le=S=>{const{redirectBack:C,handleUpdate:B,toggleDirection:U,setToggleDirection:h,handleSubmit:T,control:r,reset:y,setValue:s,getValues:a,errors:m,loading:E,showNoti:A,status:x,setShowNoti:F}=S,[o]=P();return e.createElement(e.Fragment,null,e.createElement("div",{className:"d-flex justify-content-between align-items-center"},e.createElement(g,{variant:"h4",gutterBottom:!0},"Manufacturer"),e.createElement(te,{separator:"\u203A","aria-label":"breadcrumb"},e.createElement(O,{to:"/admin"},"Home"),e.createElement(O,{to:"/admin/manufacturer"},"Manufacturer"),e.createElement(g,null,"Update"))),e.createElement("div",{style:{marginBottom:10}},e.createElement(k,{variant:"contained",onClick:()=>C()},"Back")),e.createElement("form",{onSubmit:T(B)},e.createElement("div",{className:"card__admin"},e.createElement(g,{variant:"h5",className:"cart_admin_title",gutterBottom:!0},"Basic information"),e.createElement(i,{container:!0,sx:{margin:0,padding:1,width:"100%"},spacing:10},e.createElement(i,{item:!0,xs:6},e.createElement(p,{name:"manufacturer_code",control:r,render:({field:n})=>e.createElement(f,{variant:"standard"},e.createElement(v,{htmlFor:"userCode"},"Manufacturer code ",e.createElement("span",{className:"required"})),e.createElement(N,{...n,disabled:!0,startAdornment:e.createElement(_,{position:"start"},e.createElement(G,null)),placeholder:o("placehoder",{name:o("manufacturer.list.table.manufacturer_code")}),onBlur:t=>{s(t.target.id,t.target.value?t.target.value.trim():"")}}))}),m.manufacturer_code&&e.createElement("p",{className:"text-danger"},m.manufacturer_code.message)),e.createElement(i,{item:!0,xs:6},e.createElement(p,{name:"name",control:r,render:({field:n})=>e.createElement(f,{variant:"standard"},e.createElement(v,{htmlFor:"fullName"},"Full name"),e.createElement(N,{...n,startAdornment:e.createElement(_,{position:"start"},e.createElement(ae,null)),placeholder:o("placehoder",{name:o("manufacturer.list.table.name")}),onBlur:t=>{s(t.target.id,t.target.value?t.target.value.trim():"")}}))}),m.name&&e.createElement("p",{className:"text-danger"},m.name.message)))),e.createElement("div",{className:"card__admin"},e.createElement(g,{variant:"h5",className:"cart_admin_title",gutterBottom:!0},"Contact infomation"),e.createElement(i,{container:!0,sx:{margin:0,padding:1,width:"100%"},spacing:10},e.createElement(i,{item:!0,xs:6},e.createElement(p,{name:"telephone",control:r,render:({field:n})=>e.createElement(f,{variant:"standard"},e.createElement(v,{htmlFor:"telephone"},"Telephone"),e.createElement(N,{...n,startAdornment:e.createElement(_,{position:"start"},e.createElement(re,null)),placeholder:"xxx-xxx-xxxx",onBlur:t=>{s(t.target.id,t.target.value?t.target.value.trim():"")}}))}),m.telephone&&e.createElement("p",{className:"text-danger"},m.telephone.message)),e.createElement(i,{item:!0,xs:6},e.createElement(p,{name:"address",control:r,render:({field:n})=>e.createElement(f,{variant:"standard"},e.createElement(v,{htmlFor:"address"},"Address"),e.createElement(N,{...n,startAdornment:e.createElement(_,{position:"start"},e.createElement(ne,null)),placeholder:o("placehoder",{name:o("manufacturer.list.table.address")}),onBlur:t=>{s(t.target.id,t.target.value?t.target.value.trim():"")}}))})))),e.createElement("div",{className:"card__admin"},e.createElement(g,{variant:"h5",className:"cart_admin_title",gutterBottom:!0},"Setting"),e.createElement(i,{container:!0,sx:{margin:0,padding:1,width:"100%"},spacing:10},e.createElement(i,{item:!0,xs:6},e.createElement("div",{className:"d-inline"},e.createElement(p,{name:"status",control:r,render:({field:n})=>e.createElement(f,null,e.createElement(W,{id:"status"},"Status",e.createElement("span",{className:"required"})),e.createElement(se,{defaultValue:"1",...n,checked:"1"},e.createElement(R,{value:"1",control:e.createElement(L,null),label:"Active"}),e.createElement(R,{value:"0",control:e.createElement(L,null),label:"Block"})))}))))),e.createElement("div",{className:"d-flex justify-content-center w-100"},e.createElement(k,{variant:"contained",type:"submit",className:"m-1",disabled:E},E&&e.createElement(K,{disableShrink:!0,style:{color:"white",width:"14px",height:"14px",margin:"0 5px 0 0"}}),"Update"),e.createElement(k,{variant:"contained",type:"reset",className:"m-1 btn-cancel",onClick:()=>y()},"Clear"))),A&&e.createElement(Y,{type:x.type,message:x.message,setShowNoti:F}))},Ee=()=>{const S=$(),[C,B]=c.exports.useState(!1),[U,h]=c.exports.useState(!1),[T,r]=c.exports.useState({}),[y,s]=c.exports.useState(!1),[a,m]=c.exports.useState(),{state:E}=z(),[A]=P(),x=()=>S(-1),F=J().shape({manufacturer_code:Q().required(A("validate.required",{name:"Manufacturer code"}))}),o=c.exports.useCallback(()=>{M.get(D.SHOW,{params:{id:E.id}}).then(d=>{m(d.data.manufacturer),d.data.code===b.HTTP_NOT_FOUND&&(r({type:"error",message:d.data.message}),s(!0))}).catch(({response:d})=>{r({type:"error",message:d.data?d.data.message:"Server error"}),s(!0)})},[E]);c.exports.useEffect(()=>{o()},[E]);const{handleSubmit:n,control:t,reset:V,setValue:u,getValues:H,setError:I,formState:{errors:q}}=X({shouldUnregister:!1,defaultValues:{manufacturer_code:"",name:"",telephone:"",address:"",status:Z.ACTIVE},resolver:ee(F)});c.exports.useEffect(()=>{u("id",a?a.id:""),u("manufacturer_code",a?a.manufacturer_code:""),u("name",a?a.name:""),u("telephone",a?a.telephone:""),u("address",a?a.address:""),u("status",a?a.status:-1)},[a]);const j=c.exports.useCallback(d=>{h(!0),M.put(D.UPDATE,{...d}).then(l=>{l.data.code===b.HTTP_OK&&r({type:"success",message:l.data.message}),l.data.code===b.HTTP_NOT_FOUND&&r({type:"error",message:l.data.message}),s(!0),h(!1)}).catch(({response:l})=>{l.data.code===b.UNPROCESSABLE_ENTITY&&Object.keys(l.data.errors).forEach(w=>{I(w,{type:"custom",message:Object.values(l.data.errors[w])})}),r({type:"error",message:l.data?l.data.message:"Server error"}),s(!0),h(!1)})},[]);return e.createElement(le,{redirectBack:x,handleUpdate:j,toggleDirection:C,setToggleDirection:B,handleSubmit:n,control:t,reset:V,setValue:u,getValues:H,errors:q,loading:U,showNoti:y,status:T,setShowNoti:s})};export{Ee as default};
