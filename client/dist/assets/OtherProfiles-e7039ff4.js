import{e as N,a as O,n as M,r as s,u as n,ab as R,ac as H,b as a,a9 as Y,j as t,T as r,a7 as $,a6 as P,aa as q,ad as G}from"./index-9d46c87f.js";import{a as J,b as K,c as Q,L as d,A as V}from"./UserAccountStyled-b390dbe8.js";import{U as T}from"./User-e9b6e9b1.js";import{a as X,s as Z}from"./chatAction-5f52ce83.js";import{B as h}from"./Button-8bf7d3a4.js";import{D as U}from"./Dialog-ef753470.js";import{D as z}from"./DialogTitle-ca37f03e.js";import{D as I}from"./DialogContent-dee6db2d.js";import"./styled-75809262.js";import"./Container-f76b78f1.js";import"./createBox-77cbd316.js";/* empty css             */import"./Modal-c3b73e07.js";const we=()=>{const i=N(),l=O(),b=M(),[ee,F]=s.useState(null),[te,W]=s.useState(null),[oe,_]=s.useState(!1),[se,C]=s.useState(!1),[f,k]=s.useState(!1),[g,D]=s.useState(!1),[m,c]=s.useState(!1),{user:o}=n(e=>e.getUserProfile),{user:E}=n(e=>e.user),{loading:j,posts:u}=n(e=>e.userPosts),{error:p,message:w}=n(e=>e.like),{error:S,message:x}=n(e=>e.follow),{chat:y}=n(e=>e.chats),[v,A]=s.useState(!1);s.useEffect(()=>{l(R(i.id)),l(H(i.id)),console.log("Fetching Again....")},[v,A,i.id,l]);function B(){c(!m),l(G(i.id)),A(!v)}s.useEffect(()=>{S&&(c(!1),_(!0),F(S)),x&&(C(!0),W(x)),p&&(_(!0),F(p)),w&&(C(!0),W(w))},[S,x,w,p]),s.useEffect(()=>{if(o)o.followers.map(e=>{if(e._id===E._id)return c(!0)});else return c(!1)},[o,E]);async function L(){await l(X(i.id)),await l(Z(y)),b(`/chat/${y._id}`)}return a(J,{children:[o&&a(Y,{children:[a(K,{children:[t(Q,{src:o.avatar.url,alt:o.name,title:o.name}),t(d,{children:t(h,{onClick:B,style:{color:m?"#ff0000":"#000000"},children:m?"Unfollow":"Follow"})}),t(d,{children:t(h,{onClick:L,children:"message"})}),t(d,{children:t(r,{fontWeight:700,sx:{fontSize:"1.4rem"},children:o.name})}),t(d,{children:t(r,{fontWeight:300,sx:{color:"#111",fontSize:"1.1rem"},children:o.email})}),a(V,{children:[a(r,{sx:{fontWeight:"500",color:"#111",fontSize:"0.5 rem",paddingRight:"10px"},children:[o.posts.length," Posts"]}),t(h,{onClick:()=>D(!g),children:a(r,{fontWeight:500,sx:{color:"#111",fontSize:"0.5 rem"},children:[o.following.length," Following"]})}),t(h,{onClick:()=>k(!f),children:a(r,{fontWeight:500,sx:{color:"#111",fontSize:"0.5 rem",paddingRight:"10px"},children:[o.followers.length," Followers"]})})]})]}),t($,{children:u&&u.length>0?u.map(e=>t(s.Suspense,{fallback:t(P,{}),children:j?t(P,{}):t(q,{ownerId:e.owner._id,ownerName:o.name,ownerAvatar:o.avatar.url,caption:e.caption,postImage:e.image.url,likes:e.likes,comments:e.comments,createdAt:e.createdAt,postId:e._id,isAccount:!1,isDelete:!0,setFetchAgain:A,fetchAgain:v},e._id)},e._id)):t(r,{variant:"h6",color:"textSecondary",align:"center",children:"No posts to show"})})]}),a(U,{fullWidth:!0,maxWidth:"xs",open:f,onClose:()=>k(!f),children:[t(z,{sx:{textAlign:"center"},children:t(r,{fontWeight:500,variant:"h5",children:"Followers"})}),t(I,{children:t("div",{children:o&&o.followers.length>0?o.followers.map(e=>t(T,{userId:e._id,name:e.name,avatar:e.avatar.url},e._id)):t(r,{children:"You have no followers"})})})]}),a(U,{fullWidth:!0,maxWidth:"xs",open:g,onClose:()=>D(!g),children:[t(z,{sx:{textAlign:"center"},children:t(r,{fontWeight:500,children:"Followings"})}),t(I,{children:a("div",{children:[o&&o.following.length>0?o.following.map(e=>t(T,{userId:e._id,name:e.name,avatar:e.avatar.url},e._id)):null,o&&o.following.length===0&&a(r,{children:[o.name," have no followings"]})]})})]})]})};export{we as default};