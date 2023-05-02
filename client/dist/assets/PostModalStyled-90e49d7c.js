import{c as a,j as n,s as t,m as e,k as s}from"./index-9d46c87f.js";import{m as r}from"./styled-75809262.js";import{e as l,I as d}from"./Input-f57ea956.js";import{B as i}from"./Button-8bf7d3a4.js";import{D as c}from"./Dialog-ef753470.js";const p=a(n("path",{d:"M20 4h-3.17L15 2H9L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V6h4.05l1.83-2h4.24l1.83 2H20v12zM12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0 8c-1.65 0-3-1.35-3-3s1.35-3 3-3 3 1.35 3 3-1.35 3-3 3z"}),"CameraAltOutlined"),x=t.div`
  font-family: 'Monoton', cursive;;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.75);
  transition: transform 150ms ease-out;
`,h=t.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  z-index: 999;
  transition: all 300ms ease-out;
  border-radius: 5px;
  width: 400px;
`,w=t(p)`
  height: 1.75rem !important;
  width: 1.5rem !important;
  color: rgb(16, 30, 47);
  cursor: pointer;
  margin-top: 10px;
  text-align: center;
`,y=t.div`
  margin:10px;
  display: grid;
  grid-template-columns: repeat(1 minmax(0, 1fr));
  .div {
    margin-top: 10px;
    border-radius: 99999px;
    background-color: rgba(220, 98, 80, 1);
    cursor: pointer;
  }
  .div img{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .container {
    width: 100%;
    img {
      width: 100%;
      object-fit: contain;
      cursor: pointer;
    }
  }
`,S=t.form`
  margin-top: 15px;
  display: flex;
  flex-direction: column;
`;r(l)({fontWeight:"bold",fontSize:"15px",flex:1,variant:"Standard",padding:"10px",width:"100%",textAlign:"center",":focus":{transition:"all 0.3s ease-out"}});const v=r(i)({padding:"10px 0",margin:"30px",borderRadius:"20px",border:"none",backgroundColor:"rgb(55,93,130)",color:"white",pointer:"pointer",".MuiButton-label":{fontSize:"15px",fontWeight:"bold"},":hover":{transform:"scale(1.1)",transition:"all 0.3s ease-in-out",backgroundColor:"rgb(55,93,130)",color:"white",endIcon:{color:"white"}}}),C=r(i)({padding:"10px 0",margin:"30px",width:"30%",borderRadius:"20px",border:"none",backgroundColor:"rgb(55,93,130)",color:"white",pointer:"pointer",".MuiButton-label":{fontSize:"15px",fontWeight:"bold"},":hover":{transform:"scale(1.1)",transition:"all 0.3s ease-in-out",backgroundColor:"rgb(55,93,130)",color:"white",endIcon:{color:"white"}}}),k=r(c)(({theme:o})=>({"& .MuiDialogContent-root":{padding:o.spacing(2)},"& .MuiDialogActions-root":{padding:o.spacing(1)}})),B=e(d)(({theme:o})=>({"label + &":{marginTop:o.spacing(3)},"& .MuiInputBase-input":{borderRadius:4,position:"relative",backgroundColor:o.palette.mode==="light"?"#fcfcfb":"#2b2b2b",border:"1px solid #ced4da",fontSize:16,width:"100%",padding:"10px 12px",transition:o.transitions.create(["border-color","background-color","box-shadow"]),fontFamily:["-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial","sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"'].join(","),"&:focus":{boxShadow:`${s(o.palette.primary.main,.25)} 0 0 0 0.2rem`,borderColor:o.palette.primary.main},"&:hover":{borderColor:o.palette.primary.main,transition:o.transitions.create(["border-color","background-color","box-shadow"])}}}));export{B,x as C,y as H,C as S,h as W,v as a,k as b,w as c,S as d};
