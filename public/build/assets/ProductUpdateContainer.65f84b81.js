import{a7 as F,R as r,T as M,aa as D,B as U,i as ie,S as ce,c as ne,r as a,ay as ue,au as de,av as u,aG as H,d as E,aF as V,q as y,u as le,ae as me,ad as pe,aC as ge,a9 as ye,aw as fe}from"./index.5ce80200.js";import{B as Se,P as _e,a as Ce,b as Ee,c as ve}from"./ProductSetting.33e58a8f.js";import{B as xe}from"./Breadcrumbs.f5b119d2.js";import{f as he}from"./index.d7c082dd.js";import"./ProductAvatar.1b82f846.js";import"./index.834d2615.js";import"./Select.fa04d544.js";import"./OutlinedInput.63c5b1ce.js";import"./CalendarMonth.a98bc8b4.js";import"./BorderColor.6ee4679d.js";import"./TextField.f7bb6de6.js";import"./ListSubheader.7cd47645.js";import"./Chip.9e8533e0.js";import"./AddCircleSharp.04bafc2d.js";import"./lodash.04c458ec.js";import"./RadioGroup.7a04bd2c.js";const Pe=v=>{const{redirectBack:b,handleUpdate:I,handleSubmit:L,control:d,reset:o,setValue:l,getValues:i,setError:m,clearErrors:c,errors:p,loading:x,showNoti:A,setStatus:G,status:h,setShowNoti:P,groupCategorytList:f,categoryList:T,manufacturerList:t,avatarRef:q,imageRef:S,productPropertyRef:_,getGroupCategory:R,groupCategoryId:N,setGroupCategoryId:C,product:g}=v;return F(),r.createElement(r.Fragment,null,r.createElement("div",{className:"d-flex justify-content-between align-items-center"},r.createElement(M,{variant:"h4",gutterBottom:!0},"Product"),r.createElement(xe,{separator:"\u203A","aria-label":"breadcrumb"},r.createElement(D,{to:"/admin"},"Home"),r.createElement(D,{to:"/admin/categories"},"Product"),r.createElement(M,null,"Update"))),r.createElement("div",{style:{marginBottom:10}},r.createElement(U,{variant:"contained",onClick:()=>b()},"Back")),r.createElement("form",{onSubmit:L(I)},r.createElement(Se,{product:g,control:d,setValue:l,getValues:i,setError:m,clearErrors:c,errors:p,avatarRef:q}),r.createElement(_e,{product:g,groupCategoryId:N,setGroupCategoryId:C,control:d,setValue:l,getValues:i,setError:m,clearErrors:c,errors:p,groupCategorytList:f,categoryList:T,manufacturerList:t,onChangeGroupCategory:()=>{_.current.removeAll()}}),r.createElement(Ce,{product:g,control:d,setValue:l,getValues:i,setError:m,clearErrors:c,errors:p,imageRef:S}),r.createElement(Ee,{product:g,control:d,setValue:l,getValues:i,setError:m,clearErrors:c,errors:p,setStatus:G,setShowNoti:P,ref:_,name:"property",groupCategorytList:f,getGroupCategory:R}),r.createElement(ve,{product:g,control:d,setValue:l,getValues:i,setError:m,clearErrors:c,errors:p}),r.createElement("div",{className:"d-flex justify-content-center w-100"},r.createElement(U,{variant:"contained",type:"submit",className:"m-1",disabled:x},x&&r.createElement(ie,{disableShrink:!0,style:{color:"white",width:"14px",height:"14px",margin:"0 5px 0 0"}}),"Update"),r.createElement(U,{variant:"contained",type:"reset",className:"m-1 btn-cancel",onClick:()=>{S.current.removeAll(),q.current.removeAll(),_.current.removeAll(),o(),C(-1)}},"Clear"))),A&&r.createElement(ce,{type:h.type,message:h.message,setShowNoti:P}))},He=()=>{const v=ne(),[b,I]=a.exports.useState(!1),[L,d]=a.exports.useState(!1),[o]=F(),[l,i]=a.exports.useState({}),[m,c]=a.exports.useState(!1),[p,x]=a.exports.useState([]),[A,G]=a.exports.useState([]),[h,P]=a.exports.useState([]),[f,T]=a.exports.useState(-1),[t,q]=a.exports.useState(),[S,_]=a.exports.useState(!1),[R,N]=a.exports.useState(!1),[C,g]=a.exports.useState(!1),{state:O}=ue(),j=a.exports.useRef(),K=a.exports.useRef(),Y=a.exports.useRef(),W=a.exports.useRef(),$=()=>v(-1),z=de().shape({product_code:u().required(o("validate.required",{name:"Product code"})),name:u().required(o("validate.required",{name:"Product name"})),price:u().required(o("validate.required",{name:"Price"})),group_category_id:u().required(o("validate.required",{name:"Group category"})).test("isSelect",o("validate.required",{name:"Group category"}),e=>e!="-1"),category_id:u().required(o("validate.required",{name:"Category"})).test("isSelect",o("validate.required",{name:"Category"}),e=>e!="-1"),manufacturer_id:u().required(o("validate.required",{name:"Manufacturer"})).test("isSelect",o("validate.required",{name:"Manufacturer"}),e=>e!="-1"),price_saled:u().when(["sale_type","expried"],{is:(e,s)=>{if(e&&e!=-1||s)return!0},then:()=>u().required(o("validate.required",{name:"Price saled"})).test("","Invalid value",(e,s)=>{if(s.parent.sale_type==H.PRICE)return e;if(s.parent.sale_type==H.PERSEN)return 0<=e<=100})}),sale_type:u().when(["expried","price_saled"],{is:(e,s)=>{if(e||s)return!0},then:()=>u().required(o("validate.required",{name:"Sale type"})).test("isSelect",o("validate.required",{name:"Sale type"}),e=>e!="-1")}),expried:u().when(["sale_type","price_saled"],{is:(e,s)=>{if(e&&e!=-1||s)return!0},then:()=>u().required(o("validate.required",{name:"Expried sale"})).test("","Invalid value",e=>e>he(new Date,"yyyy-MM-dd"))})},[["sale_type","expried"],["expried","price_saled"],["sale_type","price_saled"]]),J=a.exports.useCallback(()=>{E.get(V.SHOW,{params:{id:O.id}}).then(e=>{q(e.data.product),e.data.code===y.HTTP_NOT_FOUND&&(i({type:"error",message:e.data.message}),c(!0))}).catch(({response:e})=>{i({type:"error",message:e.data?e.data.message:"Server error"}),c(!0)})},[O]);a.exports.useEffect(()=>{J()},[O]);const{handleSubmit:Q,control:X,reset:Z,setValue:n,getValues:ee,setError:k,clearErrors:te,formState:{errors:ae}}=le({shouldUnregister:!1,defaultValues:{avatar:"",product_code:"",name:"",price:"",status:ye.ACTIVE,group_category_id:f,category_id:-1,manufacturer_id:-1,description:"",price_saled:"",sale_type:-1,expried:""},resolver:fe(z)}),re=a.exports.useCallback(e=>{d(!0),E.put(V.UPDATE,{...e}).then(s=>{c(!0),d(!1),s.data.code===y.HTTP_OK&&(i({type:"success",message:s.data.message}),setTimeout(()=>{v(-1)},1500))}).catch(({response:s})=>{c(!0),d(!1),s.data.code===y.UNPROCESSABLE_ENTITY&&Object.keys(s.data.errors).forEach(B=>{k(B,{type:"custom",message:Object.values(s.data.errors[B])})}),i({type:"error",message:s.data?s.data.message:"Server error"})})},[]),w=a.exports.useCallback(()=>{E.get(me.LIST).then(e=>{_(!0),e.data.code===y.HTTP_OK&&x(e.data.groupCategories)}).catch(e=>{i({type:"error",message:e.data?e.data.message:"Server error"}),c(!0)})},[]),se=a.exports.useCallback(()=>{E.get(pe.LIST).then(e=>{N(!0),e.data.code===y.HTTP_OK&&G(e.data.categories)}).catch(e=>{i({type:"error",message:e.data?e.data.message:"Server error"}),c(!0)})},[]),oe=a.exports.useCallback(()=>{E.get(ge.LIST).then(e=>{g(!0),e.data.code===y.HTTP_OK&&P(e.data.manufacturers)}).catch(e=>{i({type:"error",message:e.data?e.data.message:"Server error"}),c(!0)})},[]);return a.exports.useEffect(()=>{w(),se(),oe()},[]),a.exports.useEffect(()=>{R&&S&&C&&(n("id",t?t.id:""),n("product_code",(t==null?void 0:t.product_code)||""),n("name",(t==null?void 0:t.name)||""),n("price",(t==null?void 0:t.price)||""),n("status",t==null?void 0:t.status),n("group_category_id",(t==null?void 0:t.group_category_id)||-1),n("category_id",(t==null?void 0:t.category_id)||-1),n("manufacturer_id",(t==null?void 0:t.manufacturer_id)||-1),n("description",(t==null?void 0:t.description)||""),n("sale_type",(t==null?void 0:t.sale_type)||-1),n("price_saled",(t==null?void 0:t.sale_off)||""),n("expried",t!=null&&t.expried?t==null?void 0:t.expried:""),T((t==null?void 0:t.group_category_id)||-1))},[t,R,S,C]),r.createElement(Pe,{redirectBack:$,handleUpdate:re,toggleDirection:b,setToggleDirection:I,handleSubmit:Q,control:X,reset:Z,setValue:n,getValues:ee,setError:k,clearErrors:te,errors:ae,loading:L,showNoti:m,status:l,setStatus:i,setShowNoti:c,groupCategorytList:p,categoryList:A,manufacturerList:h,avatarRef:j,imageRef:K,categoryGroupRef:W,productPropertyRef:Y,getGroupCategory:w,groupCategoryId:f,setGroupCategoryId:T,product:t})};export{He as default};