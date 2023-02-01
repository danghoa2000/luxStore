import{a7 as V,R as e,T,aa as k,B as y,G as o,C as m,F as i,N,O as S,ar as q,as as j,at as U,i as G,S as D,c as H,r as _,au as K,av as E,u as Q,d as Y,b7 as $,q as A,a9 as z,aw as J}from"./index.5ce80200.js";import{B as M}from"./Breadcrumbs.f5b119d2.js";import{B as w}from"./BorderColor.6ee4679d.js";import{T as F}from"./TextField.f7bb6de6.js";import{R as W,F as O,a as R}from"./RadioGroup.7a04bd2c.js";import"./Select.fa04d544.js";import"./OutlinedInput.63c5b1ce.js";const X=p=>{const{redirectBack:C,handleCreate:d,handleSubmit:c,control:s,reset:g,setValue:u,getValues:h,errors:n,loading:v,showNoti:x,status:b,setShowNoti:f}=p,[t]=V();return console.log(111111),e.createElement(e.Fragment,null,e.createElement("div",{className:"d-flex justify-content-between align-items-center"},e.createElement(T,{variant:"h4",gutterBottom:!0},"Coupon"),e.createElement(M,{separator:"\u203A","aria-label":"breadcrumb"},e.createElement(k,{to:"/admin"},"Home"),e.createElement(k,{to:"/admin/coupon"},"Coupon"),e.createElement(T,null,"Create"))),e.createElement("div",{style:{marginBottom:10}},e.createElement(y,{variant:"contained",onClick:()=>C()},"Back")),e.createElement("form",{onSubmit:c(d)},e.createElement("div",{className:"card__admin"},e.createElement(o,{container:!0,sx:{margin:0,padding:1,width:"100%"},spacing:10},e.createElement(o,{item:!0,xs:6},e.createElement(m,{name:"coupon_code",control:s,render:({field:a})=>e.createElement(i,{variant:"standard"},e.createElement(N,{htmlFor:""},t("coupon.list.table.coupon_code"),e.createElement("span",{className:"required"})),e.createElement(S,{...a,startAdornment:e.createElement(q,{position:"start"},e.createElement(j,null)),placeholder:t("placehoder",{name:t("coupon.list.table.coupon_code")}),onBlur:r=>{u(r.target.id,r.target.value?r.target.value.trim():"")}}))}),n.coupon_code&&e.createElement("p",{className:"text-danger"},n.coupon_code.message)),e.createElement(o,{item:!0,xs:6}),e.createElement(o,{item:!0,xs:6},e.createElement(m,{name:"date_start",control:s,render:({field:a})=>e.createElement(i,{variant:"standard"},e.createElement(N,{htmlFor:"date_start"},t("coupon.list.table.date_start")),e.createElement(S,{id:"date_start",...a,startAdornment:e.createElement(q,{position:"start"},e.createElement(w,null)),placeholder:t("placehoder",{name:t("coupon.list.table.date_start")}),onBlur:r=>{u(r.target.id,r.target.value?r.target.value.trim():"")},type:"date"}))}),n.date_start&&e.createElement("p",{className:"text-danger"},n.date_start.message)),e.createElement(o,{item:!0,xs:6},e.createElement(m,{name:"date_finish",control:s,render:({field:a})=>e.createElement(i,{variant:"standard"},e.createElement(N,{htmlFor:"date_finish"},t("coupon.list.table.date_finish")),e.createElement(S,{id:"date_finish",...a,startAdornment:e.createElement(q,{position:"start"},e.createElement(w,null)),placeholder:t("placehoder",{name:t("coupon.list.table.date_finish")}),onBlur:r=>{u(r.target.id,r.target.value?r.target.value.trim():"")},type:"date"}))}),n.date_finish&&e.createElement("p",{className:"text-danger"},n.date_finish.message)),e.createElement(o,{item:!0,xs:6},e.createElement(m,{name:"value",control:s,render:({field:a})=>e.createElement(i,{variant:"standard"},e.createElement(F,{...a,label:t("coupon.list.table.price_discount"),type:"number",variant:"standard"}))}),n.value&&e.createElement("p",{className:"text-danger"},n.value.message)),e.createElement(o,{item:!0,xs:6},e.createElement(m,{name:"qty",control:s,render:({field:a})=>e.createElement(i,{variant:"standard"},e.createElement(F,{...a,label:t("coupon.list.table.qty"),type:"number",variant:"standard"}))}),n.qty&&e.createElement("p",{className:"text-danger"},n.qty.message)),e.createElement(o,{item:!0,xs:6},e.createElement("div",{className:"d-inline"},e.createElement(m,{name:"status",control:s,render:({field:a})=>e.createElement(i,null,e.createElement(U,{id:"status"},"Status",e.createElement("span",{className:"required"})),e.createElement(W,{defaultValue:"1",...a,checked:"1"},e.createElement(O,{value:"1",control:e.createElement(R,null),label:"Active"}),e.createElement(O,{value:"0",control:e.createElement(R,null),label:"Block"})))}))))),e.createElement("div",{className:"d-flex justify-content-center w-100"},e.createElement(y,{variant:"contained",type:"submit",className:"m-1",disabled:v},v&&e.createElement(G,{disableShrink:!0,style:{color:"white",width:"14px",height:"14px",margin:"0 5px 0 0"}}),"Create"),e.createElement(y,{variant:"contained",type:"reset",className:"m-1 btn-cancel",onClick:()=>g()},"Clear"))),x&&e.createElement(D,{type:b.type,message:b.message,setShowNoti:f}))},le=()=>{const p=H(),[C,d]=_.exports.useState(!1),[c]=V(),[s,g]=_.exports.useState({}),[u,h]=_.exports.useState(!1),n=()=>p(-1),v=K().shape({coupon_code:E().required(c("validate.required",{name:"Coupon code"})),date_start:E().required(c("validate.required",{name:"Date start"})),value:E().required(c("validate.required",{name:"Price discount"})),qty:E().required(c("validate.required",{name:"Qty"})),status:E().required(c("validate.required",{name:"Status"}))}),{handleSubmit:x,control:b,reset:f,setValue:t,getValues:a,setError:r,formState:{errors:I}}=Q({shouldUnregister:!1,defaultValues:{coupon_code:"",date_start:"",date_finish:"",value:"",qty:"",status:z.ACTIVE},resolver:J(v)}),L=_.exports.useCallback(P=>{d(!0),Y.post($.CREATE,{...P}).then(l=>{l.data.code===A.HTTP_OK&&(g({type:"success",message:l.data.message}),f(),p(-1)),h(!0),d(!1)}).catch(({response:l})=>{l.data.code===A.UNPROCESSABLE_ENTITY&&Object.keys(l.data.errors).forEach(B=>{r(B,{type:"custom",message:Object.values(l.data.errors[B])})}),g({type:"error",message:l.data?l.data.message:"Server error"}),h(!0),d(!1)})},[]);return e.createElement(X,{redirectBack:n,handleCreate:L,handleSubmit:x,control:b,reset:f,setValue:t,getValues:a,errors:I,loading:C,showNoti:u,status:s,setShowNoti:h})};export{le as default};