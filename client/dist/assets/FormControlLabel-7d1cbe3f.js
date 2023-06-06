import{w as O,v as T,m as w,Z as ee,_ as s,r as F,z as H,$ as oe,b as E,j as u,a0 as M,x as z,C as j,c as V,a1 as te,k as ae,y as Z,T as W}from"./index-9d46c87f.js";import{u as G,f as ne}from"./useFormControl-fffb245f.js";function re(e){return O("PrivateSwitchBase",e)}T("PrivateSwitchBase",["root","checked","disabled","input","edgeStart","edgeEnd"]);const se=["autoFocus","checked","checkedIcon","className","defaultChecked","disabled","disableFocusRipple","edge","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"],le=e=>{const{classes:o,checked:t,disabled:r,edge:n}=e,a={root:["root",t&&"checked",r&&"disabled",n&&`edge${z(n)}`],input:["input"]};return j(a,re,o)},ce=w(ee)(({ownerState:e})=>s({padding:9,borderRadius:"50%"},e.edge==="start"&&{marginLeft:e.size==="small"?-3:-12},e.edge==="end"&&{marginRight:e.size==="small"?-3:-12})),ie=w("input")({cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}),de=F.forwardRef(function(o,t){const{autoFocus:r,checked:n,checkedIcon:a,className:f,defaultChecked:v,disabled:p,disableFocusRipple:l=!1,edge:x=!1,icon:I,id:C,inputProps:P,inputRef:B,name:y,onBlur:c,onChange:m,onFocus:i,readOnly:N,required:q=!1,tabIndex:R,type:b,value:$}=o,k=H(o,se),[g,J]=oe({controlled:n,default:!!v,name:"SwitchBase",state:"checked"}),h=G(),K=d=>{i&&i(d),h&&h.onFocus&&h.onFocus(d)},Q=d=>{c&&c(d),h&&h.onBlur&&h.onBlur(d)},X=d=>{if(d.nativeEvent.defaultPrevented)return;const D=d.target.checked;J(D),m&&m(d,D)};let S=p;h&&typeof S>"u"&&(S=h.disabled);const Y=b==="checkbox"||b==="radio",_=s({},o,{checked:g,disabled:S,disableFocusRipple:l,edge:x}),A=le(_);return E(ce,s({component:"span",className:M(A.root,f),centerRipple:!0,focusRipple:!l,disabled:S,tabIndex:null,role:void 0,onFocus:K,onBlur:Q,ownerState:_,ref:t},k,{children:[u(ie,s({autoFocus:r,checked:n,defaultChecked:v,className:A.input,disabled:S,id:Y?C:void 0,name:y,onChange:X,readOnly:N,ref:B,required:q,ownerState:_,tabIndex:R,type:b},b==="checkbox"&&$===void 0?{}:{value:$},P)),g?a:I]}))}),ue=de,pe=V(u("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),me=V(u("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),be=V(u("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox");function he(e){return O("MuiCheckbox",e)}const fe=T("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary"]),U=fe,Ce=["checkedIcon","color","icon","indeterminate","indeterminateIcon","inputProps","size","className"],ke=e=>{const{classes:o,indeterminate:t,color:r}=e,n={root:["root",t&&"indeterminate",`color${z(r)}`]},a=j(n,he,o);return s({},o,a)},ge=w(ue,{shouldForwardProp:e=>te(e)||e==="classes",name:"MuiCheckbox",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:t}=e;return[o.root,t.indeterminate&&o.indeterminate,t.color!=="default"&&o[`color${z(t.color)}`]]}})(({theme:e,ownerState:o})=>s({color:(e.vars||e).palette.text.secondary},!o.disableRipple&&{"&:hover":{backgroundColor:e.vars?`rgba(${o.color==="default"?e.vars.palette.action.activeChannel:e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.hoverOpacity})`:ae(o.color==="default"?e.palette.action.active:e.palette[o.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},o.color!=="default"&&{[`&.${U.checked}, &.${U.indeterminate}`]:{color:(e.vars||e).palette[o.color].main},[`&.${U.disabled}`]:{color:(e.vars||e).palette.action.disabled}})),ve=u(me,{}),xe=u(pe,{}),Pe=u(be,{}),ye=F.forwardRef(function(o,t){var r,n;const a=Z({props:o,name:"MuiCheckbox"}),{checkedIcon:f=ve,color:v="primary",icon:p=xe,indeterminate:l=!1,indeterminateIcon:x=Pe,inputProps:I,size:C="medium",className:P}=a,B=H(a,Ce),y=l?x:p,c=l?x:f,m=s({},a,{color:v,indeterminate:l,size:C}),i=ke(m);return u(ge,s({type:"checkbox",inputProps:s({"data-indeterminate":l},I),icon:F.cloneElement(y,{fontSize:(r=y.props.fontSize)!=null?r:C}),checkedIcon:F.cloneElement(c,{fontSize:(n=c.props.fontSize)!=null?n:C}),ownerState:m,ref:t,className:M(i.root,P)},B,{classes:i}))}),Ne=ye;function $e(e){return O("MuiFormControlLabel",e)}const Fe=T("MuiFormControlLabel",["root","labelPlacementStart","labelPlacementTop","labelPlacementBottom","disabled","label","error","required","asterisk"]),L=Fe,Ie=["checked","className","componentsProps","control","disabled","disableTypography","inputRef","label","labelPlacement","name","onChange","required","slotProps","value"],Be=e=>{const{classes:o,disabled:t,labelPlacement:r,error:n,required:a}=e,f={root:["root",t&&"disabled",`labelPlacement${z(r)}`,n&&"error",a&&"required"],label:["label",t&&"disabled"],asterisk:["asterisk",n&&"error"]};return j(f,$e,o)},Re=w("label",{name:"MuiFormControlLabel",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:t}=e;return[{[`& .${L.label}`]:o.label},o.root,o[`labelPlacement${z(t.labelPlacement)}`]]}})(({theme:e,ownerState:o})=>s({display:"inline-flex",alignItems:"center",cursor:"pointer",verticalAlign:"middle",WebkitTapHighlightColor:"transparent",marginLeft:-11,marginRight:16,[`&.${L.disabled}`]:{cursor:"default"}},o.labelPlacement==="start"&&{flexDirection:"row-reverse",marginLeft:16,marginRight:-11},o.labelPlacement==="top"&&{flexDirection:"column-reverse",marginLeft:16},o.labelPlacement==="bottom"&&{flexDirection:"column",marginLeft:16},{[`& .${L.label}`]:{[`&.${L.disabled}`]:{color:(e.vars||e).palette.text.disabled}}})),Se=w("span",{name:"MuiFormControlLabel",slot:"Asterisk",overridesResolver:(e,o)=>o.asterisk})(({theme:e})=>({[`&.${L.error}`]:{color:(e.vars||e).palette.error.main}})),Le=F.forwardRef(function(o,t){var r,n;const a=Z({props:o,name:"MuiFormControlLabel"}),{className:f,componentsProps:v={},control:p,disabled:l,disableTypography:x,label:I,labelPlacement:C="end",required:P,slotProps:B={}}=a,y=H(a,Ie),c=G(),m=(r=l??p.props.disabled)!=null?r:c==null?void 0:c.disabled,i=P??p.props.required,N={disabled:m,required:i};["checked","name","onChange","value","inputRef"].forEach(g=>{typeof p.props[g]>"u"&&typeof a[g]<"u"&&(N[g]=a[g])});const q=ne({props:a,muiFormControl:c,states:["error"]}),R=s({},a,{disabled:m,labelPlacement:C,required:i,error:q.error}),b=Be(R),$=(n=B.typography)!=null?n:v.typography;let k=I;return k!=null&&k.type!==W&&!x&&(k=u(W,s({component:"span"},$,{className:M(b.label,$==null?void 0:$.className),children:k}))),E(Re,s({className:M(b.root,f),ownerState:R,ref:t},y,{children:[F.cloneElement(p,N),k,i&&E(Se,{ownerState:R,"aria-hidden":!0,className:b.asterisk,children:[" ","*"]})]}))}),Me=Le;export{Ne as C,Me as F};