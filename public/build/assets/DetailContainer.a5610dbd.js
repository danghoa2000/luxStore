import"./lodash.04c458ec.js";import{s as Ne,t as Te,v as ae,am as Xe,w as qe,_ as N,r,x as we,y as ue,I as Q,H as L,J as Be,bg as Ke,bh as Se,ai as Oe,aI as xe,a3 as lt,Q as at,R as l,aU as Ye,T as Ce,aB as st,o as j,B as ge,bi as nt,F as ot,aE as rt,j as We,l as Ee,k as it,bj as ct,ay as dt,d as mt,aF as ft,q as Pe,a$ as bt}from"./index.5ce80200.js";import{S as ut}from"./slick-theme.1e1bbf75.js";import{R as ve,S as pt}from"./Star.7de26383.js";import{O as _t}from"./OutlinedInput.63c5b1ce.js";import{a as ht,K as xt}from"./KeyboardArrowRight.e41f0be0.js";import{L as gt}from"./ListItemAvatar.b7f810c6.js";import{f as Et}from"./index.d7c082dd.js";import{p as vt}from"./index.ac026f14.js";import{S as yt}from"./Stack.5c2058c0.js";import{P as St}from"./Pagination.02c54dfc.js";import"./LastPage.e4998160.js";let oe;function Ve(){if(oe)return oe;const t=document.createElement("div"),a=document.createElement("div");return a.style.width="10px",a.style.height="1px",t.appendChild(a),t.dir="rtl",t.style.fontSize="14px",t.style.width="4px",t.style.height="1px",t.style.position="absolute",t.style.top="-1000px",t.style.overflow="scroll",document.body.appendChild(t),oe="reverse",t.scrollLeft>0?oe="default":(t.scrollLeft=1,t.scrollLeft===0&&(oe="negative")),document.body.removeChild(t),oe}function ze(t,a){const e=t.scrollLeft;if(a!=="rtl")return e;switch(Ve()){case"negative":return t.scrollWidth-t.clientWidth+e;case"reverse":return t.scrollWidth-t.clientWidth-e;default:return e}}function Ct(t){return Te("MuiTab",t)}const Nt=Ne("MuiTab",["root","labelIcon","textColorInherit","textColorPrimary","textColorSecondary","selected","disabled","fullWidth","wrapped","iconWrapper"]),le=Nt,Tt=["className","disabled","disableFocusRipple","fullWidth","icon","iconPosition","indicator","label","onChange","onClick","onFocus","selected","selectionFollowsFocus","textColor","value","wrapped"],wt=t=>{const{classes:a,textColor:e,fullWidth:c,wrapped:i,icon:f,label:g,selected:E,disabled:h}=t,s={root:["root",f&&g&&"labelIcon",`textColor${qe(e)}`,c&&"fullWidth",i&&"wrapped",E&&"selected",h&&"disabled"],iconWrapper:["iconWrapper"]};return Be(s,Ct,a)},Bt=ae(Xe,{name:"MuiTab",slot:"Root",overridesResolver:(t,a)=>{const{ownerState:e}=t;return[a.root,e.label&&e.icon&&a.labelIcon,a[`textColor${qe(e.textColor)}`],e.fullWidth&&a.fullWidth,e.wrapped&&a.wrapped]}})(({theme:t,ownerState:a})=>N({},t.typography.button,{maxWidth:360,minWidth:90,position:"relative",minHeight:48,flexShrink:0,padding:"12px 16px",overflow:"hidden",whiteSpace:"normal",textAlign:"center"},a.label&&{flexDirection:a.iconPosition==="top"||a.iconPosition==="bottom"?"column":"row"},{lineHeight:1.25},a.icon&&a.label&&{minHeight:72,paddingTop:9,paddingBottom:9,[`& > .${le.iconWrapper}`]:N({},a.iconPosition==="top"&&{marginBottom:6},a.iconPosition==="bottom"&&{marginTop:6},a.iconPosition==="start"&&{marginRight:t.spacing(1)},a.iconPosition==="end"&&{marginLeft:t.spacing(1)})},a.textColor==="inherit"&&{color:"inherit",opacity:.6,[`&.${le.selected}`]:{opacity:1},[`&.${le.disabled}`]:{opacity:(t.vars||t).palette.action.disabledOpacity}},a.textColor==="primary"&&{color:(t.vars||t).palette.text.secondary,[`&.${le.selected}`]:{color:(t.vars||t).palette.primary.main},[`&.${le.disabled}`]:{color:(t.vars||t).palette.text.disabled}},a.textColor==="secondary"&&{color:(t.vars||t).palette.text.secondary,[`&.${le.selected}`]:{color:(t.vars||t).palette.secondary.main},[`&.${le.disabled}`]:{color:(t.vars||t).palette.text.disabled}},a.fullWidth&&{flexShrink:1,flexGrow:1,flexBasis:0,maxWidth:"none"},a.wrapped&&{fontSize:t.typography.pxToRem(12)})),Rt=r.exports.forwardRef(function(a,e){const c=we({props:a,name:"MuiTab"}),{className:i,disabled:f=!1,disableFocusRipple:g=!1,fullWidth:E,icon:h,iconPosition:s="top",indicator:T,label:u,onChange:w,onClick:S,onFocus:$,selected:A,selectionFollowsFocus:C,textColor:p="inherit",value:k,wrapped:O=!1}=c,D=ue(c,Tt),F=N({},c,{disabled:f,disableFocusRipple:g,selected:A,icon:!!h,iconPosition:s,label:!!u,fullWidth:E,textColor:p,wrapped:O}),U=wt(F),M=h&&u&&r.exports.isValidElement(h)?r.exports.cloneElement(h,{className:Q(U.iconWrapper,h.props.className)}):h,X=Y=>{!A&&w&&w(Y,k),S&&S(Y)},P=Y=>{C&&!A&&w&&w(Y,k),$&&$(Y)};return L.jsxs(Bt,N({focusRipple:!g,className:Q(U.root,i),ref:e,role:"tab","aria-selected":A,disabled:f,onClick:X,onFocus:P,ownerState:F,tabIndex:A?0:-1},D,{children:[s==="top"||s==="start"?L.jsxs(r.exports.Fragment,{children:[M,u]}):L.jsxs(r.exports.Fragment,{children:[u,M]}),T]}))}),Fe=Rt;function kt(t){return(1+Math.sin(Math.PI*t-Math.PI/2))/2}function Mt(t,a,e,c={},i=()=>{}){const{ease:f=kt,duration:g=300}=c;let E=null;const h=a[t];let s=!1;const T=()=>{s=!0},u=w=>{if(s){i(new Error("Animation cancelled"));return}E===null&&(E=w);const S=Math.min(1,(w-E)/g);if(a[t]=f(S)*(e-h)+h,S>=1){requestAnimationFrame(()=>{i(null)});return}requestAnimationFrame(u)};return h===e?(i(new Error("Element already at target position")),T):(requestAnimationFrame(u),T)}const Lt=["onChange"],It={width:99,height:99,position:"absolute",top:-9999,overflow:"scroll"};function Wt(t){const{onChange:a}=t,e=ue(t,Lt),c=r.exports.useRef(),i=r.exports.useRef(null),f=()=>{c.current=i.current.offsetHeight-i.current.clientHeight};return r.exports.useEffect(()=>{const g=Se(()=>{const h=c.current;f(),h!==c.current&&a(c.current)}),E=Ke(i.current);return E.addEventListener("resize",g),()=>{g.clear(),E.removeEventListener("resize",g)}},[a]),r.exports.useEffect(()=>{f(),a(c.current)},[a]),L.jsx("div",N({style:It,ref:i},e))}function Pt(t){return Te("MuiTabScrollButton",t)}const zt=Ne("MuiTabScrollButton",["root","vertical","horizontal","disabled"]),Ft=zt;var je,$e;const jt=["className","direction","orientation","disabled"],$t=t=>{const{classes:a,orientation:e,disabled:c}=t;return Be({root:["root",e,c&&"disabled"]},Pt,a)},At=ae(Xe,{name:"MuiTabScrollButton",slot:"Root",overridesResolver:(t,a)=>{const{ownerState:e}=t;return[a.root,e.orientation&&a[e.orientation]]}})(({ownerState:t})=>N({width:40,flexShrink:0,opacity:.8,[`&.${Ft.disabled}`]:{opacity:0}},t.orientation==="vertical"&&{width:"100%",height:40,"& svg":{transform:`rotate(${t.isRtl?-90:90}deg)`}})),Ht=r.exports.forwardRef(function(a,e){const c=we({props:a,name:"MuiTabScrollButton"}),{className:i,direction:f}=c,g=ue(c,jt),h=Oe().direction==="rtl",s=N({isRtl:h},c),T=$t(s);return L.jsx(At,N({component:"div",className:Q(T.root,i),ref:e,role:null,ownerState:s,tabIndex:null},g,{children:f==="left"?je||(je=L.jsx(ht,{fontSize:"small"})):$e||($e=L.jsx(xt,{fontSize:"small"}))}))}),Dt=Ht;function Ut(t){return Te("MuiTabs",t)}const Xt=Ne("MuiTabs",["root","vertical","flexContainer","flexContainerVertical","centered","scroller","fixed","scrollableX","scrollableY","hideScrollbar","scrollButtons","scrollButtonsHideMobile","indicator"]),ye=Xt,qt=["aria-label","aria-labelledby","action","centered","children","className","component","allowScrollButtonsMobile","indicatorColor","onChange","orientation","ScrollButtonComponent","scrollButtons","selectionFollowsFocus","TabIndicatorProps","TabScrollButtonProps","textColor","value","variant","visibleScrollbar"],Ae=(t,a)=>t===a?t.firstChild:a&&a.nextElementSibling?a.nextElementSibling:t.firstChild,He=(t,a)=>t===a?t.lastChild:a&&a.previousElementSibling?a.previousElementSibling:t.lastChild,be=(t,a,e)=>{let c=!1,i=e(t,a);for(;i;){if(i===t.firstChild){if(c)return;c=!0}const f=i.disabled||i.getAttribute("aria-disabled")==="true";if(!i.hasAttribute("tabindex")||f)i=e(t,i);else{i.focus();return}}},Kt=t=>{const{vertical:a,fixed:e,hideScrollbar:c,scrollableX:i,scrollableY:f,centered:g,scrollButtonsHideMobile:E,classes:h}=t;return Be({root:["root",a&&"vertical"],scroller:["scroller",e&&"fixed",c&&"hideScrollbar",i&&"scrollableX",f&&"scrollableY"],flexContainer:["flexContainer",a&&"flexContainerVertical",g&&"centered"],indicator:["indicator"],scrollButtons:["scrollButtons",E&&"scrollButtonsHideMobile"],scrollableX:[i&&"scrollableX"],hideScrollbar:[c&&"hideScrollbar"]},Ut,h)},Ot=ae("div",{name:"MuiTabs",slot:"Root",overridesResolver:(t,a)=>{const{ownerState:e}=t;return[{[`& .${ye.scrollButtons}`]:a.scrollButtons},{[`& .${ye.scrollButtons}`]:e.scrollButtonsHideMobile&&a.scrollButtonsHideMobile},a.root,e.vertical&&a.vertical]}})(({ownerState:t,theme:a})=>N({overflow:"hidden",minHeight:48,WebkitOverflowScrolling:"touch",display:"flex"},t.vertical&&{flexDirection:"column"},t.scrollButtonsHideMobile&&{[`& .${ye.scrollButtons}`]:{[a.breakpoints.down("sm")]:{display:"none"}}})),Yt=ae("div",{name:"MuiTabs",slot:"Scroller",overridesResolver:(t,a)=>{const{ownerState:e}=t;return[a.scroller,e.fixed&&a.fixed,e.hideScrollbar&&a.hideScrollbar,e.scrollableX&&a.scrollableX,e.scrollableY&&a.scrollableY]}})(({ownerState:t})=>N({position:"relative",display:"inline-block",flex:"1 1 auto",whiteSpace:"nowrap"},t.fixed&&{overflowX:"hidden",width:"100%"},t.hideScrollbar&&{scrollbarWidth:"none","&::-webkit-scrollbar":{display:"none"}},t.scrollableX&&{overflowX:"auto",overflowY:"hidden"},t.scrollableY&&{overflowY:"auto",overflowX:"hidden"})),Vt=ae("div",{name:"MuiTabs",slot:"FlexContainer",overridesResolver:(t,a)=>{const{ownerState:e}=t;return[a.flexContainer,e.vertical&&a.flexContainerVertical,e.centered&&a.centered]}})(({ownerState:t})=>N({display:"flex"},t.vertical&&{flexDirection:"column"},t.centered&&{justifyContent:"center"})),Jt=ae("span",{name:"MuiTabs",slot:"Indicator",overridesResolver:(t,a)=>a.indicator})(({ownerState:t,theme:a})=>N({position:"absolute",height:2,bottom:0,width:"100%",transition:a.transitions.create()},t.indicatorColor==="primary"&&{backgroundColor:(a.vars||a).palette.primary.main},t.indicatorColor==="secondary"&&{backgroundColor:(a.vars||a).palette.secondary.main},t.vertical&&{height:"100%",width:2,right:0})),Gt=ae(Wt,{name:"MuiTabs",slot:"ScrollbarSize"})({overflowX:"auto",overflowY:"hidden",scrollbarWidth:"none","&::-webkit-scrollbar":{display:"none"}}),De={},Qt=r.exports.forwardRef(function(a,e){const c=we({props:a,name:"MuiTabs"}),i=Oe(),f=i.direction==="rtl",{"aria-label":g,"aria-labelledby":E,action:h,centered:s=!1,children:T,className:u,component:w="div",allowScrollButtonsMobile:S=!1,indicatorColor:$="primary",onChange:A,orientation:C="horizontal",ScrollButtonComponent:p=Dt,scrollButtons:k="auto",selectionFollowsFocus:O,TabIndicatorProps:D={},TabScrollButtonProps:F={},textColor:U="primary",value:M,variant:X="standard",visibleScrollbar:P=!1}=c,Y=ue(c,qt),q=X==="scrollable",I=C==="vertical",V=I?"scrollTop":"scrollLeft",se=I?"top":"left",Z=I?"bottom":"right",re=I?"clientHeight":"clientWidth",ee=I?"height":"width",J=N({},c,{component:w,allowScrollButtonsMobile:S,indicatorColor:$,orientation:C,vertical:I,scrollButtons:k,textColor:U,variant:X,visibleScrollbar:P,fixed:!q,hideScrollbar:q&&!P,scrollableX:q&&!I,scrollableY:q&&I,centered:s&&!q,scrollButtonsHideMobile:!S}),K=Kt(J),[b,d]=r.exports.useState(!1),[v,m]=r.exports.useState(De),[B,y]=r.exports.useState({start:!1,end:!1}),[W,de]=r.exports.useState({overflow:"hidden",scrollbarWidth:0}),ie=new Map,z=r.exports.useRef(null),G=r.exports.useRef(null),Re=()=>{const n=z.current;let o;if(n){const x=n.getBoundingClientRect();o={clientWidth:n.clientWidth,scrollLeft:n.scrollLeft,scrollTop:n.scrollTop,scrollLeftNormalized:ze(n,i.direction),scrollWidth:n.scrollWidth,top:x.top,bottom:x.bottom,left:x.left,right:x.right}}let _;if(n&&M!==!1){const x=G.current.children;if(x.length>0){const R=x[ie.get(M)];_=R?R.getBoundingClientRect():null}}return{tabsMeta:o,tabMeta:_}},ce=xe(()=>{const{tabsMeta:n,tabMeta:o}=Re();let _=0,x;if(I)x="top",o&&n&&(_=o.top-n.top+n.scrollTop);else if(x=f?"right":"left",o&&n){const H=f?n.scrollLeftNormalized+n.clientWidth-n.scrollWidth:n.scrollLeft;_=(f?-1:1)*(o[x]-n[x]+H)}const R={[x]:_,[ee]:o?o[ee]:0};if(isNaN(v[x])||isNaN(v[ee]))m(R);else{const H=Math.abs(v[x]-R[x]),ne=Math.abs(v[ee]-R[ee]);(H>=1||ne>=1)&&m(R)}}),pe=(n,{animation:o=!0}={})=>{o?Mt(V,z.current,n,{duration:i.transitions.duration.standard}):z.current[V]=n},ke=n=>{let o=z.current[V];I?o+=n:(o+=n*(f?-1:1),o*=f&&Ve()==="reverse"?-1:1),pe(o)},Me=()=>{const n=z.current[re];let o=0;const _=Array.from(G.current.children);for(let x=0;x<_.length;x+=1){const R=_[x];if(o+R[re]>n){x===0&&(o=n);break}o+=R[re]}return o},Je=()=>{ke(-1*Me())},Ge=()=>{ke(Me())},Qe=r.exports.useCallback(n=>{de({overflow:null,scrollbarWidth:n})},[]),Ze=()=>{const n={};n.scrollbarSizeListener=q?L.jsx(Gt,{onChange:Qe,className:Q(K.scrollableX,K.hideScrollbar)}):null;const o=B.start||B.end,_=q&&(k==="auto"&&o||k===!0);return n.scrollButtonStart=_?L.jsx(p,N({orientation:C,direction:f?"right":"left",onClick:Je,disabled:!B.start},F,{className:Q(K.scrollButtons,F.className)})):null,n.scrollButtonEnd=_?L.jsx(p,N({orientation:C,direction:f?"left":"right",onClick:Ge,disabled:!B.end},F,{className:Q(K.scrollButtons,F.className)})):null,n},Le=xe(n=>{const{tabsMeta:o,tabMeta:_}=Re();if(!(!_||!o)){if(_[se]<o[se]){const x=o[V]+(_[se]-o[se]);pe(x,{animation:n})}else if(_[Z]>o[Z]){const x=o[V]+(_[Z]-o[Z]);pe(x,{animation:n})}}}),te=xe(()=>{if(q&&k!==!1){const{scrollTop:n,scrollHeight:o,clientHeight:_,scrollWidth:x,clientWidth:R}=z.current;let H,ne;if(I)H=n>1,ne=n<o-_-1;else{const fe=ze(z.current,i.direction);H=f?fe<x-R-1:fe>1,ne=f?fe>1:fe<x-R-1}(H!==B.start||ne!==B.end)&&y({start:H,end:ne})}});r.exports.useEffect(()=>{const n=Se(()=>{z.current&&(ce(),te())}),o=Ke(z.current);o.addEventListener("resize",n);let _;return typeof ResizeObserver<"u"&&(_=new ResizeObserver(n),Array.from(G.current.children).forEach(x=>{_.observe(x)})),()=>{n.clear(),o.removeEventListener("resize",n),_&&_.disconnect()}},[ce,te]);const _e=r.exports.useMemo(()=>Se(()=>{te()}),[te]);r.exports.useEffect(()=>()=>{_e.clear()},[_e]),r.exports.useEffect(()=>{d(!0)},[]),r.exports.useEffect(()=>{ce(),te()}),r.exports.useEffect(()=>{Le(De!==v)},[Le,v]),r.exports.useImperativeHandle(h,()=>({updateIndicator:ce,updateScrollButtons:te}),[ce,te]);const Ie=L.jsx(Jt,N({},D,{className:Q(K.indicator,D.className),ownerState:J,style:N({},v,D.style)}));let me=0;const et=r.exports.Children.map(T,n=>{if(!r.exports.isValidElement(n))return null;const o=n.props.value===void 0?me:n.props.value;ie.set(o,me);const _=o===M;return me+=1,r.exports.cloneElement(n,N({fullWidth:X==="fullWidth",indicator:_&&!b&&Ie,selected:_,selectionFollowsFocus:O,onChange:A,textColor:U,value:o},me===1&&M===!1&&!n.props.tabIndex?{tabIndex:0}:{}))}),tt=n=>{const o=G.current,_=lt(o).activeElement;if(_.getAttribute("role")!=="tab")return;let R=C==="horizontal"?"ArrowLeft":"ArrowUp",H=C==="horizontal"?"ArrowRight":"ArrowDown";switch(C==="horizontal"&&f&&(R="ArrowRight",H="ArrowLeft"),n.key){case R:n.preventDefault(),be(o,_,He);break;case H:n.preventDefault(),be(o,_,Ae);break;case"Home":n.preventDefault(),be(o,null,Ae);break;case"End":n.preventDefault(),be(o,null,He);break}},he=Ze();return L.jsxs(Ot,N({className:Q(K.root,u),ownerState:J,ref:e,as:w},Y,{children:[he.scrollButtonStart,he.scrollbarSizeListener,L.jsxs(Yt,{className:K.scroller,ownerState:J,style:{overflow:W.overflow,[I?`margin${f?"Left":"Right"}`:"marginBottom"]:P?void 0:-W.scrollbarWidth},ref:z,onScroll:_e,children:[L.jsx(Vt,{"aria-label":g,"aria-labelledby":E,"aria-orientation":C==="vertical"?"vertical":null,className:K.flexContainer,ownerState:J,onKeyDown:tt,ref:G,role:"tablist",children:et}),b&&Ie]}),he.scrollButtonEnd]}))}),Zt=Qt,el=at(L.jsx("path",{d:"M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"}),"Check"),Ue=t=>{const{children:a,value:e,index:c,...i}=t;return l.createElement("div",{role:"tabpanel",id:c,"aria-labelledby":c,...i},e===c&&l.createElement(Ye,{sx:{p:3}},l.createElement(Ce,{wrapper:"span"},a)))},tl=t=>{const{dots:a,slidesToShow:e,slidesToScroll:c,autoplay:i,appendDots:f,dotsClass:g,customPaging:E,data:h,slideClass:s}=t;let T={dots:a,infinite:!0,slidesToShow:e,slidesToScroll:c,autoplay:!1,dotsClass:g};return f&&(T={...T,appendDots:f}),E&&(T={...T,customPaging:E}),l.createElement(l.Fragment,null,l.createElement("section",{className:s},l.createElement(ut,{...T},h&&h.map((u,w)=>l.createElement("div",{className:"slide__product_image",key:w},l.createElement("img",{src:st+u,alt:""}))))))};const ll=({qty:t,setQty:a,product:e,handleChange:c,tab:i,handleSubmit:f,FORM:g,stock:E,SLIDE:h,customPaging:s,SALLED:T,currentOption:u,page:w,setPage:S,totalRecord:$,rowsPerPage:A,totalRate:C})=>l.createElement("section",{className:"detail py-5"},l.createElement("div",{className:"container"},l.createElement("div",{className:"detail__product"},l.createElement("div",{className:"detail__product__slide",style:{width:"50%"}},l.createElement(tl,{slideClass:"homeSlide",dots:!0,slidesToShow:1,slidesToScroll:1,autoplay:!0,data:h,customPaging:s,dotsClass:"custom-dot m-auto"})),l.createElement("div",{className:"detail__product__info",style:{width:"50%"}},l.createElement("h3",{className:"detail__product__info-name"},e==null?void 0:e.name),l.createElement("div",{style:{display:"flex"}},l.createElement("div",{className:"detail__product__info-rate"},l.createElement("span",{className:"text-underline total__rate"},parseFloat(C||0).toFixed(1)),l.createElement(ve,{name:"simple-controlled",value:C||0,readOnly:!0})),l.createElement("div",{className:"detail__product__info-review"},l.createElement("span",{className:"text-underline"},e==null?void 0:e.reviews.length),l.createElement("span",null,"Reviews")),l.createElement("div",{className:"detail__product__info-selled"},l.createElement("span",{className:""},T),l.createElement("span",null,"Selled"))),l.createElement("div",{className:"margin-5",style:{display:"flex",alignItems:"baseline",padding:"15px 20px",background:"#fafafa"}},Object.keys(u).length==0?e!=null&&e.sale_price?(e==null?void 0:e.max_price)===(e==null?void 0:e.min_price)?l.createElement(l.Fragment,null,l.createElement("span",{className:"old-price detail__product__info-price font-bold"},j(e==null?void 0:e.max_price)),l.createElement("span",{className:"new-price detail__product__info-price font-bold",style:{marginLeft:5}},j(e==null?void 0:e.sale_price)),l.createElement("span",{className:"saled_price detail__product__info-price font-bold",style:{marginLeft:5}},`${e==null?void 0:e.sale_persen}% off`)):l.createElement(l.Fragment,null,l.createElement("span",{className:"old-price detail__product__info-price font-bold"},j(e==null?void 0:e.min_price)," ","-"," ",j(e==null?void 0:e.max_price)),l.createElement("span",{className:"new-price detail__product__info-price font-bold",style:{marginLeft:5}},j((e==null?void 0:e.min_price)-(e==null?void 0:e.min_price)*(e==null?void 0:e.sale_persen)/100)," ",l.createElement("span",{style:{margin:"0 5px"}},"-"),j((e==null?void 0:e.max_price)-(e==null?void 0:e.max_price)*(e==null?void 0:e.sale_persen)/100)),l.createElement("span",{className:"saled_price detail__product__info-price font-bold",style:{marginLeft:5}},`${e==null?void 0:e.sale_persen}% off`)):(e==null?void 0:e.max_price)===(e==null?void 0:e.min_price)?l.createElement("span",{className:"new-price detail__product__info-price font-bold"},j(e==null?void 0:e.max_price)):l.createElement(l.Fragment,null,l.createElement("span",{className:"new-price detail__product__info-price font-bold"},j(e==null?void 0:e.min_price)),l.createElement("span",{style:{margin:"0 10px"}},"-"),l.createElement("span",{className:"new-price detail__product__info-price font-bold"},j(e==null?void 0:e.max_price))):u!=null&&u.sale_price?l.createElement(l.Fragment,null,l.createElement("span",{className:"old-price detail__product__info-price font-bold"},j(u==null?void 0:u.price)),l.createElement("span",{className:"new-price detail__product__info-price font-bold",style:{marginLeft:5}},j((u==null?void 0:u.price)-(u==null?void 0:u.sale_price))),l.createElement("span",{className:"saled_price detail__product__info-price font-bold",style:{marginLeft:5}},`${u==null?void 0:u.sale_persen}% off`)):l.createElement("span",{className:"new-price detail__product__info-price font-bold"},j(u==null?void 0:u.price))),l.createElement("div",{className:"detail__product__info-brand margin-5"},l.createElement("span",{className:"detail__product__info-title"},"Brand"),l.createElement("span",{className:"font-bold"},(e==null?void 0:e.category.name)||"No brand")),l.createElement("div",{className:"detail__product__info-status margin-5"},l.createElement("span",{className:"detail__product__info-title"},"Stock Available"),l.createElement("span",{className:"font-bold"},E)),l.createElement("div",{className:"product__option"},g),l.createElement("hr",{style:{color:"#2b2b2b",width:"100%",height:"2px"}}),l.createElement("div",{className:"d-flex align-items-center mb-2"},l.createElement("div",{className:"cart__product__btn "},l.createElement(ge,{className:"btn__remove",onClick:()=>{t==1?a(1):a(p=>p-1)}},l.createElement(nt,null)),l.createElement(ot,null,l.createElement(_t,{value:t})),l.createElement(ge,{className:"btn__add",onClick:()=>{t<E&&a(p=>p+1)}},l.createElement(rt,null))),l.createElement(ge,{className:"btn-add-product ml-2",onClick:()=>f()},"Add To Cart")))),l.createElement("div",{className:"product__description"},l.createElement(Ye,{sx:{borderBottom:1,borderColor:"divider"}},l.createElement(Zt,{value:i,onChange:c,"aria-label":"basic tabs example"},l.createElement(Fe,{className:"tab__header",label:"Description",index:0}),l.createElement(Fe,{className:"tab__header",label:`Review (${$})`,index:1}))),l.createElement(Ue,{value:i,index:0},l.createElement(Ce,{variant:"h6",component:"div"},l.createElement("span",{style:{fontWeight:"bold"}},"Specification:"),l.createElement(We,{sx:{width:"100%"},component:"nav","aria-labelledby":"nested-list-subheader"},l.createElement(Ee,{primary:e==null?void 0:e.description})))),l.createElement(Ue,{value:i,index:1},l.createElement("div",{className:"rating__overview"},l.createElement(Ce,{variant:"h5",className:"rating__overview__rate"},parseFloat(C||0).toFixed(1),"/5.0"),l.createElement(ve,{name:"text-feedback",value:C||0,readOnly:!0,precision:.5,emptyIcon:l.createElement(pt,{style:{opacity:.55},fontSize:"inherit"})})),l.createElement(We,{sx:{width:"100%"}},(e==null?void 0:e.reviews.length)>0?e==null?void 0:e.reviews.map((p,k)=>{var O,D,F,U,M,X,P;return l.createElement("div",{key:k},l.createElement(it,null,l.createElement(gt,null,l.createElement(ct,null,(O=p==null?void 0:p.pivot)!=null&&O.name?(D=p==null?void 0:p.pivot)==null?void 0:D.name.split("")[0]:"")),l.createElement(Ee,{primary:l.createElement("span",{style:{fontWeight:"bold"},className:"mx-2"},(F=p==null?void 0:p.pivot)==null?void 0:F.name),secondary:l.createElement("div",{className:"detail__product__info"},l.createElement("div",{className:"detail__product__info-rate review"},l.createElement(ve,{name:"simple-controlled",className:"mx-2",value:(U=p==null?void 0:p.pivot)==null?void 0:U.rate,readOnly:!0}),l.createElement("span",{className:"font-bold mx-2",style:{fontSize:14}},(M=p==null?void 0:p.pivot)!=null&&M.created_at?Et(vt((X=p==null?void 0:p.pivot)==null?void 0:X.created_at),"dd MMM, yyyy hh:mm"):"")))})),l.createElement(Ee,{style:{marginLeft:16},primary:(P=p==null?void 0:p.pivot)==null?void 0:P.content}))}):""),l.createElement("div",{className:"d-flex mt-3 justify-content-end w-100"},l.createElement("div",{className:"pagination"},l.createElement(yt,{spacing:2},l.createElement(St,{count:Math.ceil($/A),page:w,onChange:(p,k)=>S(k)})))))))),pl=({CartItem:t,addToCart:a,decreaseQty:e,showNoti:c,setShowNoti:i,setStatus:f})=>{const[g,E]=r.exports.useState(1),{state:h}=dt(),[s,T]=r.exports.useState(),[u,w]=r.exports.useState(0),[S,$]=r.exports.useState({}),[A,C]=r.exports.useState(0),[p,k]=r.exports.useState({}),[O,D]=r.exports.useState(0),[F,U]=r.exports.useState(0),[M,X]=r.exports.useState(1),[P,Y]=r.exports.useState(5),q=(b,d)=>{w(d)},I=r.exports.useCallback(()=>{const b={pageSize:P,currentPage:M,id:h==null?void 0:h.id};mt.get(ft.SHOW,{params:{...b}}).then(d=>{d.data.code===Pe.HTTP_OK?(T(d.data.product),D(d.data.totalRecord),U(d.data.totalRate)):d.data.code===Pe.HTTP_NOT_FOUND&&(f({type:"error",message:d.data.message}),i(!0))}).catch(({response:d})=>{f({type:"error",message:d.data?d.data.message:"Server error"}),i(!0)})},[h,M,P]);r.exports.useEffect(()=>{I()},[h,M,P]);const V=()=>{var m;const b=Object.values(S).sort();return((m=Object.keys(s==null?void 0:s.product_detail))==null?void 0:m.map(B=>{let y={};return y.id=s==null?void 0:s.product_detail[B].id,y.option=Object.values(s==null?void 0:s.product_detail[B].property_value).map(W=>W.id).sort(),y.qty=g,y})).find(B=>B.option.toString()==b.toString()&&g<=B.qty)||null},se=()=>{const b=V();b?a(b,b.qty):(f({type:"warning",message:"Option select is invalid"}),i(!0))},Z=r.exports.useMemo(()=>{const b=[];return s!=null&&s.image&&b.push(s==null?void 0:s.image),(s==null?void 0:s.product_media)&&Object.keys(s==null?void 0:s.product_media).length>0&&JSON.parse(s==null?void 0:s.product_media.url).map(v=>(b.push(v),v)),b},[s]),re=r.exports.useMemo(()=>s==null?void 0:s.product_detail.reduce((b,d)=>b+d.sold_qty,0),[s]),ee=b=>l.createElement("a",{key:b},l.createElement("img",{src:bt+Z[b]})),J=r.exports.useMemo(()=>{const b=s==null?void 0:s.product_detail;if(b){const d=[];return Object.values(b).map(v=>(Object.values(v.property_value).map((m,B)=>{var y,W,de,ie,z,G;return d[(y=m==null?void 0:m.attribute)==null?void 0:y.name]&&Object.keys(d[(W=m==null?void 0:m.attribute)==null?void 0:W.name]).length>0?d[(de=m==null?void 0:m.attribute)==null?void 0:de.name]={...d[(ie=m==null?void 0:m.attribute)==null?void 0:ie.name],option:[...d[(z=m==null?void 0:m.attribute)==null?void 0:z.name].option,{id:m.id,value:m.attribute_value_name}]}:d[(G=m==null?void 0:m.attribute)==null?void 0:G.name]={id:m.attribute_id,option:[{id:m.id,value:m.attribute_value_name}]},m}),v)),d}return null},[s]),K=r.exports.useMemo(()=>{const b=J;return b?Object.keys(b).map((d,v)=>{let m=[],B=[];return b[d].option.forEach(y=>{B.includes(y.id)||(m.push(y),B.push(y.id))}),l.createElement("div",{className:"product__option__item",key:v},l.createElement("span",{className:"product__option__item-name","data-id":b[d].id},d),l.createElement("div",{className:"product__option__list"},Object.values(m).map(y=>l.createElement("div",{className:`product__option-check ${S&&Object.values(S).includes(y.id)?"option-checked":""}`,"data-id":y.id,key:y.id,onClick:()=>{const W={...S};W&&W[b[d].id]==y.id?(delete W[b[d].id],$(W)):(W[b[d].id]=y.id,$(W))}},y.value,l.createElement("span",{className:"product__option-tick"},l.createElement(el,{className:"icon__check"}))))))}):null},[s,J,S]);return r.exports.useEffect(()=>{var b;if(Object.keys(S).length>0){const d=V();if(d){const v=(s==null?void 0:s.product_detail).filter(m=>m.id==d.id);k({...v[0]}),C((b=v[0])==null?void 0:b.qty)}else C(s==null?void 0:s.product_detail.reduce((v,m)=>v+m.qty,0)),k({})}else C(s==null?void 0:s.product_detail.reduce((d,v)=>d+v.qty,0)),k({})},[S,s]),l.createElement(ll,{qty:g,setQty:E,product:s,handleChange:q,tab:u,setOption:$,option:S,handleSubmit:se,FORM:K,stock:A,SLIDE:Z,customPaging:ee,SALLED:re,currentOption:p,page:M,setPage:X,totalRecord:O,rowsPerPage:P,totalRate:F})};export{pl as default};