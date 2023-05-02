import{m as o,k as g,s as d,n as I,a as R,R as p,u as k,r as j,o as D,j as e,b as s,T as f,I as T}from"./index-9d46c87f.js";import{d as z,P as x}from"./Close-0cb0570d.js";import{C as U,a as W}from"./PostModalStyled-90e49d7c.js";import{I as P}from"./Input-f57ea956.js";import{B as _}from"./Container-f76b78f1.js";import{d as w}from"./Search-ff233e48.js";import{U as E}from"./User-e9b6e9b1.js";import{C as S}from"./CircularProgress-0e5ef625.js";import{D as L}from"./DialogTitle-ca37f03e.js";import"./styled-75809262.js";import"./Button-8bf7d3a4.js";import"./Dialog-ef753470.js";import"./Modal-c3b73e07.js";import"./useFormControl-fffb245f.js";import"./createBox-77cbd316.js";/* empty css             */import"./UserAccountStyled-b390dbe8.js";const N=o("div")(({theme:t})=>({position:"relative",borderRadius:t.shape.borderRadius,backgroundColor:g(t.palette.common.white,.15),"&:hover":{backgroundColor:g(t.palette.common.white,.25)},marginRight:t.spacing(2),marginLeft:0,border:"1px",width:"100%",[t.breakpoints.up("sm")]:{marginLeft:t.spacing(3),width:"auto"}})),F=o("div")(({theme:t})=>({padding:t.spacing(0,2),height:"100%",borderRadius:"20px",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"})),H=o(P)(({theme:t})=>({color:"inherit",border:"2px solid #ced4da",width:"100%","& .MuiInputBase-input":{padding:t.spacing(1,1,1,0),paddingLeft:`calc(1em + ${t.spacing(4)})`,transition:t.transitions.create("width"),width:"100%",[t.breakpoints.up("md")]:{width:"20ch"}}})),$=d.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #e1d7d7;
  z-index: 999;
  transition: all 300ms ease-out;
  border-radius: 5px;
  height:inherit;
  width: 500px;
  @media(max-width: 480px){
    max-width: 90%;
  }
`,q=o("div")({height:"inherit",width:"100%",padding:"20px"}),M=d.div`
  @media(max-width: 480px){
    max-width: 100%;
    font-size: 24px;
  }
`,X=d.div`
    width: 60%;
    display: flex;
    justify-content: center;
    align-items: center;
`,Y=d.div`
    width: 100%;
    height: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
    @media(max-width: 480px){
        max-width: 100%;
    }
`,A=o(_)({width:"90%",overflowY:"auto",overflowX:"hidden"}),b=t=>{const{children:r,onClose:a,...l}=t;return s(L,{sx:{m:0,p:2},...l,children:[r,a?e(T,{"aria-label":"close",onClick:a,sx:{position:"absolute",right:8,top:8,color:c=>c.palette.grey[500]},children:e(z,{})}):null]})};b.propTypes={children:x.node,onClose:x.func.isRequired};function ce(){const t=I(),r=R(),[a,l]=p.useState(""),[c,h]=p.useState(!1),[y,v]=p.useState(!1),{users:u,loading:n,error:m}=k(i=>i.search),C=()=>{r({type:"clearUsers"}),t(-1)},B=()=>{h(!0),v(!0)};return j.useEffect(()=>{r(D(a)),h(!1)},[r,a,c]),e(U,{children:s($,{children:[e(b,{id:"customized-dialog-title",onClose:C}),e(M,{children:e(f,{sx:{fontFamily:["Dongle","sans-serif"],fontWeight:"bold",fontSize:"24px"},gutterBottom:!0,children:"Search"})}),e(q,{children:s(N,{children:[e(F,{children:n?e(S,{}):e(w,{})}),e(H,{value:a,placeholder:"Search…",inputProps:{"aria-label":"search"},onChange:i=>l(i.target.value)})]})}),e(X,{children:e(W,{disabled:n,onClick:B,type:"submit",fullWidth:!0,endIcon:e(w,{}),children:n?"Searching..":"Search"})}),y?s(Y,{children:[n?e(S,{}):null,m?e(f,{sx:{fontFamily:["Dongle","sans-serif"],fontWeight:"bold",fontSize:"24px"},gutterBottom:!0,children:m}):null,e(A,{children:u&&u.slice(0,3).map(i=>e(E,{userId:i._id,avatar:i.avatar.url,name:i.name},i._id))})]}):null]})})}export{ce as default};
