import{c as L,j as t,r as a,u as S,R as g,a as j,l as D,b as o,A as z,L as O,E as G,d as H}from"./index-9d46c87f.js";import{B as b,S as M}from"./PostModalStyled-90e49d7c.js";/* empty css             */import{S as q}from"./UserAccountStyled-b390dbe8.js";import{F as C,I as E}from"./InputLabel-ec30afab.js";import"./styled-75809262.js";import"./Input-f57ea956.js";import"./useFormControl-fffb245f.js";import"./Button-8bf7d3a4.js";import"./Dialog-ef753470.js";import"./Modal-c3b73e07.js";import"./Container-f76b78f1.js";import"./createBox-77cbd316.js";const J=L(t("path",{d:"M5 20h14v-2H5v2zm0-10h4v6h6v-6h4l-7-7-7 7z"}),"Upload"),re=()=>{const p=a.useRef(null),[x,y]=a.useState(null),[P,u]=a.useState(!1),[k,U]=a.useState(null),[w,d]=a.useState(!1),{user:r}=S(e=>e.user),[n,A]=g.useState(r.avatar.url),[m,F]=g.useState(r.email),[h,I]=a.useState(r.name),{error:i,loading:N,message:f}=S(e=>e.updateProfile),l=j(),R=e=>{const s=new FileReader;e.target.files[0]&&(s.readAsDataURL(e.target.files[0]),s.onload=c=>{A(c.target.result)})},v=async({e,name:s,email:c,avatar:B})=>{e.preventDefault(),l(H({name:s,email:c,avatar:B}))};return a.useEffect(()=>{i&&(d(!0),y(i)),f&&(l(D()),u(!0),U("Profile Updated Successfully"))},[i,f,l]),o("div",{className:"upload-pic",children:[o("form",{className:"upload-pic-form",onSubmit:v,children:[t(z,{src:n,alt:r.name,title:r.name,sx:{width:"150px",height:"150px"},onClick:()=>p.current.click()}),t("input",{type:"file",hidden:!0,onChange:R,ref:p,name:"file",id:"file"}),o(C,{variant:"standard",children:[t(E,{shrink:!0,htmlFor:"bootstrap-input",children:"Change Name"}),t(b,{type:"text",value:h,label:"Change Name",id:"bootstrap-input",onChange:e=>I(e.target.value)})]}),o(C,{variant:"standard",children:[t(E,{shrink:!0,htmlFor:"bootstrap-input",children:"Change Email"}),t(b,{type:"email",value:m,label:"Change Email",id:"bootstrap-input",onChange:e=>F(e.target.value)})]}),t(M,{disabled:!n,variant:"contained",type:"submit",onClick:e=>v({e,name:h,email:m,avatar:n}),endIcon:t(J,{}),children:N?"Uploading":"Upload"}),t(O,{to:"/u/forgot-password",children:t(q,{children:"Update Password"})}),t("div",{style:{flexGrow:1}})]}),t(G,{openS:P,openE:w,setOpenS:u,setOpenE:d,error:x,success:k})]})};export{re as default};