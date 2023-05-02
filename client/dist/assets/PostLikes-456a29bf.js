import{c as Z,j as a,v as G,w as U,m as P,_ as n,r as d,y as O,z as R,a0 as x,C as w,k,aA as ot,aD as at,W as nt,b as v,aE as H,Z as it,T as $,L as rt,A as ct,I as lt,s as dt}from"./index-9d46c87f.js";import{L}from"./ListContext-3c5ebfe3.js";import{l as Y,g as pt}from"./listItemTextClasses-410d47e2.js";import{T as mt}from"./Tooltip-5149e667.js";import{p as ut}from"./pink-97fc7fa5.js";import{B as yt}from"./Button-8bf7d3a4.js";import{D as gt}from"./Dialog-ef753470.js";import{D as ft}from"./DialogTitle-ca37f03e.js";import{D as vt}from"./DialogContent-dee6db2d.js";import"./Modal-c3b73e07.js";const bt=Z(a("path",{d:"m12 21.35-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"}),"Favorite"),Ct=Z(a("path",{d:"M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"}),"FavoriteBorder");function It(t){return U("MuiListItem",t)}const xt=G("MuiListItem",["root","container","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","padding","button","secondaryAction","selected"]),I=xt,Lt=G("MuiListItemButton",["root","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","selected"]),ht=Lt;function At(t){return U("MuiListItemSecondaryAction",t)}G("MuiListItemSecondaryAction",["root","disableGutters"]);const St=["className"],$t=t=>{const{disableGutters:e,classes:s}=t;return w({root:["root",e&&"disableGutters"]},At,s)},Rt=P("div",{name:"MuiListItemSecondaryAction",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:s}=t;return[e.root,s.disableGutters&&e.disableGutters]}})(({ownerState:t})=>n({position:"absolute",right:16,top:"50%",transform:"translateY(-50%)"},t.disableGutters&&{right:0})),q=d.forwardRef(function(e,s){const o=O({props:e,name:"MuiListItemSecondaryAction"}),{className:i}=o,c=R(o,St),r=d.useContext(L),l=n({},o,{disableGutters:r.disableGutters}),p=$t(l);return a(Rt,n({className:x(p.root,i),ownerState:l,ref:s},c))});q.muiName="ListItemSecondaryAction";const Pt=q,Tt=["className"],Nt=["alignItems","autoFocus","button","children","className","component","components","componentsProps","ContainerComponent","ContainerProps","dense","disabled","disableGutters","disablePadding","divider","focusVisibleClassName","secondaryAction","selected","slotProps","slots"],Mt=(t,e)=>{const{ownerState:s}=t;return[e.root,s.dense&&e.dense,s.alignItems==="flex-start"&&e.alignItemsFlexStart,s.divider&&e.divider,!s.disableGutters&&e.gutters,!s.disablePadding&&e.padding,s.button&&e.button,s.hasSecondaryAction&&e.secondaryAction]},Bt=t=>{const{alignItems:e,button:s,classes:o,dense:i,disabled:c,disableGutters:r,disablePadding:l,divider:p,hasSecondaryAction:m,selected:h}=t;return w({root:["root",i&&"dense",!r&&"gutters",!l&&"padding",p&&"divider",c&&"disabled",s&&"button",e==="flex-start"&&"alignItemsFlexStart",m&&"secondaryAction",h&&"selected"],container:["container"]},It,o)},Ft=P("div",{name:"MuiListItem",slot:"Root",overridesResolver:Mt})(({theme:t,ownerState:e})=>n({display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",width:"100%",boxSizing:"border-box",textAlign:"left"},!e.disablePadding&&n({paddingTop:8,paddingBottom:8},e.dense&&{paddingTop:4,paddingBottom:4},!e.disableGutters&&{paddingLeft:16,paddingRight:16},!!e.secondaryAction&&{paddingRight:48}),!!e.secondaryAction&&{[`& > .${ht.root}`]:{paddingRight:48}},{[`&.${I.focusVisible}`]:{backgroundColor:(t.vars||t).palette.action.focus},[`&.${I.selected}`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / ${t.vars.palette.action.selectedOpacity})`:k(t.palette.primary.main,t.palette.action.selectedOpacity),[`&.${I.focusVisible}`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.focusOpacity}))`:k(t.palette.primary.main,t.palette.action.selectedOpacity+t.palette.action.focusOpacity)}},[`&.${I.disabled}`]:{opacity:(t.vars||t).palette.action.disabledOpacity}},e.alignItems==="flex-start"&&{alignItems:"flex-start"},e.divider&&{borderBottom:`1px solid ${(t.vars||t).palette.divider}`,backgroundClip:"padding-box"},e.button&&{transition:t.transitions.create("background-color",{duration:t.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:(t.vars||t).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${I.selected}:hover`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.hoverOpacity}))`:k(t.palette.primary.main,t.palette.action.selectedOpacity+t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / ${t.vars.palette.action.selectedOpacity})`:k(t.palette.primary.main,t.palette.action.selectedOpacity)}}},e.hasSecondaryAction&&{paddingRight:48})),kt=P("li",{name:"MuiListItem",slot:"Container",overridesResolver:(t,e)=>e.container})({position:"relative"}),Gt=d.forwardRef(function(e,s){const o=O({props:e,name:"MuiListItem"}),{alignItems:i="center",autoFocus:c=!1,button:r=!1,children:l,className:p,component:m,components:h={},componentsProps:T={},ContainerComponent:N="li",ContainerProps:{className:M}={},dense:u=!1,disabled:y=!1,disableGutters:b=!1,disablePadding:A=!1,divider:J=!1,focusVisibleClassName:K,secondaryAction:V,selected:Q=!1,slotProps:X={},slots:tt={}}=o,et=R(o.ContainerProps,Tt),st=R(o,Nt),E=d.useContext(L),_=d.useMemo(()=>({dense:u||E.dense||!1,alignItems:i,disableGutters:b}),[i,E.dense,u,b]),D=d.useRef(null);ot(()=>{c&&D.current&&D.current.focus()},[c]);const C=d.Children.toArray(l),W=C.length&&at(C[C.length-1],["ListItemSecondaryAction"]),B=n({},o,{alignItems:i,autoFocus:c,button:r,dense:_.dense,disabled:y,disableGutters:b,disablePadding:A,divider:J,hasSecondaryAction:W,selected:Q}),j=Bt(B),z=nt(D,s),F=tt.root||h.Root||Ft,S=X.root||T.root||{},g=n({className:x(j.root,S.className,p),disabled:y},st);let f=m||"li";return r&&(g.component=m||"div",g.focusVisibleClassName=x(I.focusVisible,K),f=it),W?(f=!g.component&&!m?"div":f,N==="li"&&(f==="li"?f="div":g.component==="li"&&(g.component="div")),a(L.Provider,{value:_,children:v(kt,n({as:N,className:x(j.container,M),ref:z,ownerState:B},et,{children:[a(F,n({},S,!H(F)&&{as:f,ownerState:n({},B,S.ownerState)},g,{children:C})),C.pop()]}))})):a(L.Provider,{value:_,children:v(F,n({},S,{as:f,ref:z},!H(F)&&{ownerState:n({},B,S.ownerState)},g,{children:[C,V&&a(Pt,{children:V})]}))})}),Ot=Gt;function wt(t){return U("MuiListItemAvatar",t)}G("MuiListItemAvatar",["root","alignItemsFlexStart"]);const _t=["className"],Dt=t=>{const{alignItems:e,classes:s}=t;return w({root:["root",e==="flex-start"&&"alignItemsFlexStart"]},wt,s)},Ut=P("div",{name:"MuiListItemAvatar",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:s}=t;return[e.root,s.alignItems==="flex-start"&&e.alignItemsFlexStart]}})(({ownerState:t})=>n({minWidth:56,flexShrink:0},t.alignItems==="flex-start"&&{marginTop:8})),Vt=d.forwardRef(function(e,s){const o=O({props:e,name:"MuiListItemAvatar"}),{className:i}=o,c=R(o,_t),r=d.useContext(L),l=n({},o,{alignItems:r.alignItems}),p=Dt(l);return a(Ut,n({className:x(p.root,i),ownerState:l,ref:s},c))}),Et=Vt,Wt=["children","className","disableTypography","inset","primary","primaryTypographyProps","secondary","secondaryTypographyProps"],jt=t=>{const{classes:e,inset:s,primary:o,secondary:i,dense:c}=t;return w({root:["root",s&&"inset",c&&"dense",o&&i&&"multiline"],primary:["primary"],secondary:["secondary"]},pt,e)},zt=P("div",{name:"MuiListItemText",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:s}=t;return[{[`& .${Y.primary}`]:e.primary},{[`& .${Y.secondary}`]:e.secondary},e.root,s.inset&&e.inset,s.primary&&s.secondary&&e.multiline,s.dense&&e.dense]}})(({ownerState:t})=>n({flex:"1 1 auto",minWidth:0,marginTop:4,marginBottom:4},t.primary&&t.secondary&&{marginTop:6,marginBottom:6},t.inset&&{paddingLeft:56})),Ht=d.forwardRef(function(e,s){const o=O({props:e,name:"MuiListItemText"}),{children:i,className:c,disableTypography:r=!1,inset:l=!1,primary:p,primaryTypographyProps:m,secondary:h,secondaryTypographyProps:T}=o,N=R(o,Wt),{dense:M}=d.useContext(L);let u=p??i,y=h;const b=n({},o,{disableTypography:r,inset:l,primary:!!u,secondary:!!y,dense:M}),A=jt(b);return u!=null&&u.type!==$&&!r&&(u=a($,n({variant:M?"body2":"body1",className:A.primary,component:m!=null&&m.variant?void 0:"span",display:"block"},m,{children:u}))),y!=null&&y.type!==$&&!r&&(y=a($,n({variant:"body2",className:A.secondary,color:"text.secondary",display:"block"},T,{children:y}))),v(zt,n({className:x(A.root,c),ownerState:b,ref:s},N,{children:[u,y]}))}),Yt=Ht,Zt=({postId:t,like:e})=>a(rt,{to:`/u/${e._id}`,children:v(Ot,{children:[a(Et,{children:a(ct,{alt:e.name,src:e.avatar.url})}),a(Yt,{primary:e.name})]},t)}),ie=({postId:t,likes:e=[],setLikesUser:s,liked:o,likesUser:i,handleLike:c})=>v("div",{children:[a(mt,{title:o?"Liked":"Unliked",children:a(lt,{onClick:c,children:o?a(bt,{sx:{color:ut[500]}}):a(Ct,{})})}),a(yt,{onClick:()=>{s(!i)},disableFocusRipple:!0,disableTouchRipple:!0,disableElevation:!0,style:{textTransform:"none"},disableRipple:!0,disabled:e.length===0,children:v($,{fontWeight:200,children:[e.length," likes"]})}),v(gt,{maxWidth:"md",open:i,onClose:()=>s(!i),children:[a(ft,{children:"Liked By"}),a(vt,{children:a(qt,{children:e.map(r=>a(Zt,{postId:t,like:r},r._id))},t)})]})]},t),qt=dt.div`
display: flex;
align-items: center;
a {
	text-decoration: none;
  font-family: 'Poppins',sans-serif;
  margin-left: 20px;
}
`;export{ie as default};
