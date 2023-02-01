import{Q as Z,H as X,v as V,r as m,R as e,a7 as ee,T as n,G as h,C as W,F as M,h as P,aZ as _,B as L,i as te,u as ae,aj as D,aB as le,aU as A,d as U,aF as ne,q as R,b as se,n as oe,j as de,k as pe,bj as ue,l as Q,c as ge,a$ as _e,o as $,aS as Ee,S as ve,ay as he,bf as Y}from"./index.5ce80200.js";import{p as y}from"./index.834d2615.js";import{S as xe,s as T,a as fe,b as be,c as ye,A as q,R as Ne}from"./RateReview.2cdcdcbe.js";import{S as Se}from"./Stack.5c2058c0.js";import{L as J,C as Ce,a as ke}from"./LocalShipping.a6bfb39a.js";import{S as Ie}from"./Select.fa04d544.js";import{R as re,S as we}from"./Star.7de26383.js";import{T as Te}from"./TextField.f7bb6de6.js";import{L as Re}from"./ListItemAvatar.b7f810c6.js";import{f as B}from"./index.d7c082dd.js";import{p as z}from"./index.ac026f14.js";import{B as Le}from"./Breadcrumbs.f5b119d2.js";import{E as Oe}from"./Edit.ce0e6a68.js";import"./OutlinedInput.63c5b1ce.js";const ce=Z(X.jsx("path",{d:"M10 9V5l-7 7 7 7v-4.1c5 0 8.5 1.6 11 5.1-1-5-4-10-11-11z"}),"Reply"),Pe=Z(X.jsx("path",{d:"M18 6h-2c0-2.21-1.79-4-4-4S8 3.79 8 6H6c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-8 4c0 .55-.45 1-1 1s-1-.45-1-1V8h2v2zm2-6c1.1 0 2 .9 2 2h-4c0-1.1.9-2 2-2zm4 6c0 .55-.45 1-1 1s-1-.45-1-1V8h2v2z"}),"ShoppingBag");V("div")(({theme:a,ownerState:s})=>({color:a.palette.mode==="dark"?a.palette.grey[700]:"#eaeaf0",display:"flex",height:22,alignItems:"center",...s.active&&{color:"#784af4"},"& .QontoStepIcon-completedIcon":{color:"#784af4",zIndex:1,fontSize:18},"& .QontoStepIcon-circle":{width:8,height:8,borderRadius:"50%",backgroundColor:"currentColor"}}));y.exports.bool,y.exports.string,y.exports.bool;const $e=V(xe)(({theme:a})=>({[`&.${T.alternativeLabel}`]:{top:22},[`&.${T.active}`]:{[`& .${T.line}`]:{backgroundImage:"linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)"}},[`&.${T.completed}`]:{[`& .${T.line}`]:{backgroundImage:"linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)"}},[`& .${T.line}`]:{height:3,border:0,backgroundColor:a.palette.mode==="dark"?a.palette.grey[800]:"#eaeaf0",borderRadius:1}})),Ue=V("div")(({theme:a,ownerState:s})=>({backgroundColor:a.palette.mode==="dark"?a.palette.grey[700]:"#ccc",zIndex:1,color:"#fff",width:50,height:50,display:"flex",borderRadius:"50%",justifyContent:"center",alignItems:"center",...s.active&&{backgroundImage:"linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)",boxShadow:"0 4px 10px 0 rgba(0,0,0,.25)"},...s.completed&&{backgroundImage:"linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)"}}));function ie(a,s){const{active:i,completed:r,className:t}=a;let d={1:e.createElement(q,null),2:e.createElement(J,null),3:e.createElement(Ce,null),4:e.createElement(Ne,null)};return(s==null?void 0:s.status)==3&&(d={1:e.createElement(q,null),2:e.createElement(J,null),3:e.createElement(ke,null)}),e.createElement(Ue,{ownerState:{completed:r,active:i},className:t},d[String(a.icon)])}ie.propTypes={active:y.exports.bool,className:y.exports.string,completed:y.exports.bool,icon:y.exports.node};const We=({order:a})=>{const s=m.exports.useMemo(()=>{let i=["package-box","Delivery","success","Review"];return(a==null?void 0:a.status)==3&&(i=["package-box","Delivery","cancel"]),i},[a]);return e.createElement(Se,{sx:{width:"100%"},spacing:4},e.createElement(fe,{alternativeLabel:!0,activeStep:(a==null?void 0:a.status)||0,connector:e.createElement($e,null)},s.map((i,r)=>e.createElement(be,{key:i},e.createElement(ye,{StepIconComponent:t=>ie(t,a)})))))},Me=({handleUpdate:a,handleSubmit:s,control:i,loading:r})=>{const[t]=ee();return e.createElement(e.Fragment,null,e.createElement(n,{id:"modal-modal-title",variant:"h6",component:"h2",textAlign:"center",color:"#fff"},"Update order progress"),e.createElement(h,{container:!0,sx:{margin:0,padding:1,width:"100%"},spacing:10},e.createElement(h,{item:!0,xs:12},e.createElement(W,{name:"order_status",control:i,render:({field:d})=>e.createElement(M,{variant:"standard"},e.createElement(Ie,{...d,label:"Order status",size:"small"},e.createElement(P,{key:_.PENDING,value:_.PENDING,disabled:!0},t(`order.status.${_.PENDING}`)),e.createElement(P,{key:_.DELEVERY,value:_.DELEVERY,disabled:!0},t(`order.status.${_.DELEVERY}`)),e.createElement(P,{key:_.SUCCESS,value:_.SUCCESS,disabled:!0},t(`order.status.${_.SUCCESS}`)),e.createElement(P,{key:_.CANCEL,value:_.CANCEL},t(`order.status.${_.CANCEL}`))))})),e.createElement(L,{variant:"contained",style:{textTransform:"none",maxWidth:"100%",marginLeft:25},onClick:s(a)},r&&e.createElement(te,{disableShrink:!0,style:{color:"white",width:"14px",height:"14px",margin:"0 5px 0 0"}}),"Update")))},Ae=({product:a,setStatus:s,setShowNoti:i,setOpen:r,getOrder:t})=>{var w,u;const d={1:"Useless",2:"Poor",3:"Ok",4:"Good",5:"Excellent"},[p,g]=m.exports.useState(5),[N,b]=m.exports.useState(-1),[v,x]=m.exports.useState(!1);function f(c){return`${c} Star${c!==1?"s":""}, ${d[c]}`}const{handleSubmit:S,control:C,reset:E,setValue:k,getValues:O}=ae({defaultValues:{id:a==null?void 0:a.product_id,rate:p,content:""}}),I=c=>{x(!0),U.post(ne.REVIEW,{...c}).then(o=>{x(!1),r(!1),o.data.code===R.HTTP_OK?(s({type:"success",message:o.data.message}),t()):s({type:"warning",message:o.data.message||"error!"}),i(!0)}).catch(o=>{i(!0),s({type:"error",message:o.data?o.data.message:"Server error"}),x(!1)})};return e.createElement(e.Fragment,null,e.createElement("div",{style:{display:"flex",alignItems:"center"}},e.createElement("div",{style:{marginRight:10},className:"dark__mode"},e.createElement(D,{"aria-label":"back"},e.createElement(ce,null))),e.createElement(n,{id:"modal-modal-title",variant:"h6",component:"h2",color:"#fff"},"Product review")),e.createElement("div",{className:"box_product__review"},e.createElement("div",{className:"product__review__avatar"},e.createElement("img",{src:le+((w=a==null?void 0:a.product)==null?void 0:w.image),alt:""})),e.createElement(n,{variant:"h6",className:"text-white"},(u=a==null?void 0:a.product)==null?void 0:u.name)),e.createElement(h,{container:!0,sx:{margin:0,padding:1,width:"100%"},spacing:10},e.createElement(h,{item:!0,xs:12,className:"box_product__review"},e.createElement(A,{sx:{width:200,display:"flex",alignItems:"center"},className:"dark__mode product__review__rate"},e.createElement(W,{name:"rate",control:C,render:({field:c})=>e.createElement(M,{variant:"standard"},e.createElement(re,{...c,value:p,getLabelText:f,onChange:(o,l)=>{g(l),k(o.target.name,l)},onChangeActive:(o,l)=>{b(l)},emptyIcon:e.createElement(we,{style:{opacity:.55},fontSize:"inherit"})}),p!==null&&e.createElement(A,{sx:{ml:2}},d[N!==-1?N:p]))}))),e.createElement(h,{item:!0,xs:12,className:"box_product__review",style:{padding:"10px 20px"}},e.createElement(W,{name:"content",control:C,render:({field:c})=>e.createElement(M,{variant:"standard"},e.createElement(Te,{className:"text-white",...c,placeholder:"Enter your comment",onBlur:o=>{k(o.target.name,o.target.value?o.target.value.trim():"")},multiline:!0,rows:4}))})),e.createElement(L,{variant:"contained",style:{textTransform:"none",maxWidth:"100%",marginLeft:20},onClick:S(I)},v&&e.createElement(te,{disableShrink:!0,style:{color:"white",width:"14px",height:"14px",margin:"0 5px 0 0"}}),"Update")))},Be=({productId:a,setStatus:s,setShowNoti:i})=>{const{user:r}=se(),[t,d]=m.exports.useState(),p=()=>{U.post(ne.REVIEW_SHOW,{userId:r==null?void 0:r.id,productId:a}).then(g=>{g.data.code===R.HTTP_OK?d(g.data.review):(s({type:"warning",message:g.data.message||"error!"}),i(!0))}).catch(g=>{i(!0),s({type:"error",message:g.data?g.data.message:"Server error"}),setLoading(!1)})};return m.exports.useEffect(()=>{p()},[]),e.createElement(e.Fragment,null,e.createElement("div",{style:{display:"flex",alignItems:"center"}},e.createElement("div",{style:{marginRight:10},className:"dark__mode"},e.createElement(D,{"aria-label":"back"},e.createElement(ce,null))),e.createElement(n,{id:"modal-modal-title",variant:"h6",component:"h2",color:"#fff"},"Product review")),e.createElement("div",{className:"box_product__review"},e.createElement("div",{className:"product__review__avatar"},e.createElement("img",{src:le+(t==null?void 0:t.image),alt:""})),e.createElement(n,{variant:"h6",className:"text-white"},t==null?void 0:t.name)),e.createElement(oe,{style:{borderColor:"rgb(246, 249, 252)",borderBottomWidth:"thin",opacity:.5,margin:10}}),e.createElement(h,{container:!0,sx:{margin:0,padding:1,width:"100%"},spacing:10},e.createElement(h,{item:!0,xs:12,className:"box_product__review"},e.createElement(A,{sx:{display:"flex",alignItems:"center"},className:"dark__mode product__review__rate"},e.createElement(de,{sx:{width:"100%"}},e.createElement("div",null,e.createElement(pe,null,e.createElement(Re,null,e.createElement(ue,null,t!=null&&t.customer_name?t==null?void 0:t.customer_name.split("")[0]:"")),e.createElement(Q,{primary:e.createElement("span",{style:{fontWeight:"bold"},className:"mx-2 text-white"},t==null?void 0:t.customer_name),secondary:e.createElement("div",{className:"detail__product__info"},e.createElement("div",{className:"detail__product__info-rate review"},e.createElement(re,{name:"simple-controlled",className:"mx-2",value:(t==null?void 0:t.rate)||0,readOnly:!0}),e.createElement("span",{className:"font-bold mx-2 text-white",style:{fontSize:14}},t!=null&&t.created_at?B(z(t==null?void 0:t.created_at),"dd MMM, yyyy hh:mm"):"")))})),e.createElement(Q,{style:{marginLeft:16,color:"#fff"},primary:t==null?void 0:t.content})))))))},ze=({loading:a,showNoti:s,status:i,setShowNoti:r,order:t,state:d,handleSubmit:p,handleUpdate:g,control:N,open:b,setOpen:v,type:x,setType:f,setStatus:S,getOrder:C})=>{const E=m.exports.useMemo(()=>t!=null&&t.address?JSON.parse(t==null?void 0:t.address):{},[t]),[k]=ee(),O=ge(),[I,w]=m.exports.useState(),[u,c]=m.exports.useState(),{user:o}=se();return e.createElement(e.Fragment,null,e.createElement("div",{className:"d-flex justify-content-between align-items-center profile__bar__item-active"},e.createElement("div",{style:{display:"flex",alignItems:"center"}},e.createElement(Pe,null),e.createElement(n,{variant:"h6",margin:"0",style:{fontWeight:"bold"}},"Orders")),e.createElement(Le,{separator:"\u203A","aria-label":"breadcrumb"},e.createElement(L,{variant:"contained",color:"info",onClick:()=>O(-1),style:{textTransform:"none"}},"Back"))),e.createElement("div",{className:"card__admin light__mode",style:{marginTop:20}},e.createElement(We,{order:t})),e.createElement("div",{className:"card__admin light__mode"},e.createElement("div",{className:"order__header"},e.createElement("div",{className:"order__id"},`Order ID: ${t==null?void 0:t.id}`),e.createElement("div",{className:"order__placed"},`Placed on: ${t!=null&&t.created_at?B(z(t==null?void 0:t.created_at),"dd MMM, yyyy"):""}`),e.createElement("div",{className:"order__finish"},`Delivered on: ${t!=null&&t.updated_at?B(z(t==null?void 0:t.updated_at),"dd MMM, yyyy"):""}`),e.createElement("div",{className:"order__tool"},e.createElement(D,{"aria-label":"edit",size:"small",onClick:()=>(t==null?void 0:t.status)==3?{}:v(!0)},e.createElement(Oe,{fontSize:"inherit"})))),e.createElement("div",{className:"order__product",style:{marginTop:50}},(t==null?void 0:t.order_detail)&&(t==null?void 0:t.order_detail.map(l=>{var F,H,j,G,K;return e.createElement("div",{className:"order__product__item",key:l.id},e.createElement("div",{style:{display:"flex",alignItems:"center",flex:1}},e.createElement("img",{src:_e+(l==null?void 0:l.product.image),style:{maxWidth:125,cursor:"pointer"},alt:"",onClick:()=>O("/elite/product",{state:{id:l==null?void 0:l.product_id}})}),e.createElement("div",{className:"order__product__item-name"},e.createElement(n,{variant:"h6"},(F=l==null?void 0:l.pivot)==null?void 0:F.product_name),e.createElement("p",{style:{color:"rgb(125, 135, 156)",fontSize:14,margin:0}},`${$((H=l==null?void 0:l.pivot)==null?void 0:H.product_price)} x ${(j=l==null?void 0:l.pivot)==null?void 0:j.qty}`))),e.createElement("div",{className:"order__product__item-properties"},`Product properties: ${(l==null?void 0:l.property_value)&&Object.values(l.property_value).map(me=>me.attribute_value_name+", ")}`),(t==null?void 0:t.status)==_.SUCCESS?e.createElement("div",{className:"order__product__item-properties"},((G=l==null?void 0:l.product)==null?void 0:G.customer_review)&&JSON.parse((K=l==null?void 0:l.product)==null?void 0:K.customer_review).includes(o==null?void 0:o.id)?e.createElement(L,{variant:"contained",className:"btn__view_cart",onClick:()=>{v(!0),f(3),c(l==null?void 0:l.product_id)}},"Show a Review"):e.createElement(L,{variant:"contained",className:"btn__view_cart",onClick:()=>{v(!0),f(2),w(l)}},"Write a Review")):e.createElement("div",{className:"order__product__item-properties"}))})))),e.createElement(h,{container:!0,sx:{margin:0,padding:0,width:"100%"},spacing:10},e.createElement(h,{item:!0,xs:6,style:{padding:"0 10px 0 0"}},e.createElement("div",{className:"card__admin light__mode"},e.createElement(n,{variant:"h7",className:"color-title",style:{fontWeight:"bold"}},"Shipping Address"),e.createElement("div",{className:"address"},e.createElement("div",{style:{flexGrow:1,flexShrink:1}},e.createElement("div",{className:"address__contact"},e.createElement(n,{variant:"h8"},E==null?void 0:E.full_name),e.createElement("span",{style:{borderLeft:"1px solid rgba(0,0,0,.26)",margin:"0 8px"}}),e.createElement(n,{variant:"h8"},E==null?void 0:E.telephone)),e.createElement(n,{variant:"h8"},E==null?void 0:E.address))),e.createElement(n,{variant:"h7",className:"color-title",style:{fontWeight:"bold",marginTop:10}},"Payment method"),e.createElement(n,{variant:"h8"},k(`payment_method.${(t==null?void 0:t.payment_method)||0}`)),e.createElement(n,{variant:"h7",className:"color-title",style:{fontWeight:"bold",marginTop:10}},"Note"),e.createElement(n,{variant:"h8"},(t==null?void 0:t.note)||"Null"))),e.createElement(h,{item:!0,xs:6,style:{padding:"0 0 0 10px"}},e.createElement("div",{className:"card__admin light__mode"},e.createElement(n,{className:"color-title",variant:"h6",style:{fontWeight:"bold"}},"Total Summary"),e.createElement("div",{className:"cart-total product"},e.createElement("div",{className:"cart-total__box"},e.createElement("div",{className:"box__price"},e.createElement(n,{variant:"h7",className:"box__price__label"},"Subtotal:"),e.createElement(n,{variant:"h7",style:{fontWeight:"bold"}},$(((t==null?void 0:t.price)||0)+((t==null?void 0:t.price_discount)||0)))),e.createElement("div",{className:"box__price"},e.createElement(n,{variant:"h7",className:"box__price__label"},"Shipping:"),e.createElement(n,{variant:"h7",style:{fontWeight:"bold"}},"-")),e.createElement("div",{className:"box__price"},e.createElement(n,{variant:"h7",className:"box__price__label"},"Tax:"),e.createElement(n,{variant:"h7",style:{fontWeight:"bold"}},"-")),e.createElement("div",{className:"box__price"},e.createElement(n,{variant:"h7",className:"box__price__label"},"Discount:"),e.createElement(n,{variant:"h7",style:{fontWeight:"bold"}},$((t==null?void 0:t.price_discount)||0)))),e.createElement("h3",{style:{textAlign:"right",fontWeight:"bold"}}," ",$((t==null?void 0:t.price)||0)))))),b&&e.createElement(Ee,{open:b,handleClose:()=>v(!1)},x==1&&e.createElement(Me,{handleUpdate:g,handleSubmit:p,control:N,loading:a}),x==2&&e.createElement(Ae,{product:I,setStatus:S,setShowNoti:r,setOpen:v,getOrder:C}),x==3&&e.createElement(Be,{productId:u,setStatus:S,setShowNoti:r,setOpen:v})),s&&e.createElement(ve,{type:i.type,message:i.message,setShowNoti:r}))},tt=()=>{const[a,s]=m.exports.useState(!1),[i,r]=m.exports.useState({}),[t,d]=m.exports.useState(!1),[p,g]=m.exports.useState(),[N,b]=m.exports.useState(!1),[v,x]=m.exports.useState(1),{state:f}=he(),{handleSubmit:S,control:C,reset:E,setValue:k,getValues:O}=ae({defaultValues:{id:f.id,order_status:0}}),I=m.exports.useCallback(()=>{U.get(Y.SHOW,{params:{id:f.id}}).then(u=>{u.data.code===R.HTTP_OK&&g(u.data.order),u.data.code===R.HTTP_NOT_FOUND&&(r({type:"error",message:u.data.message}),d(!0))}).catch(({response:u})=>{r({type:"error",message:u.data?u.data.message:"Server error"}),d(!0)})},[]),w=u=>{U.put(Y.UPDATE,{...u}).then(c=>{d(!0),c.data.code===R.HTTP_OK?(r({type:"success",message:c.data.message}),g(c.data.order)):c.data.code===R.HTTP_NOT_FOUND?r({type:"error",message:c.data.message}):r({type:"warning",message:c.data?c.data.message:"Update error"}),b(!1)}).catch(({response:c})=>{r({type:"error",message:c.data?c.data.message:"Server error"}),d(!0),b(!1)})};return m.exports.useEffect(()=>{I()},[f]),m.exports.useEffect(()=>{p&&Object.keys(p).length>0&&k("order_status",(p==null?void 0:p.status)||0)},[p]),e.createElement(ze,{loading:a,showNoti:t,status:i,setStatus:r,setShowNoti:d,order:p,state:f,handleSubmit:S,handleUpdate:w,control:C,open:N,setOpen:b,type:v,setType:x,getOrder:I})};export{tt as default};