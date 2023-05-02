import{s as a,A as e}from"./index-9d46c87f.js";import{m as o}from"./styled-75809262.js";import{C as t,B as i}from"./Container-f76b78f1.js";import{B as r}from"./Button-8bf7d3a4.js";a.div`
  display: flex;
  justify-content: space-between;
  margin: 5px 10px 10px;  
`;const l=o(t)({});a.div`
  grid-column: span 2/span2;
  width: 50%;
  background-color: #fff;
  z-index: 59;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 10px;
  margin: 20px auto;
  @media (min-width: 760px) {
    width: 100%;
  }
`;const m=a.div`
  display: flex;
  flex-direction: column;
  
align-items: center;
div {
    text-decoration: none;
    font-family: 'Poppins',sans-serif;
    margin-left: 20px;
}
`,x=a.div`
  display:inline-block;
  flex-direction: row;
  text-align: center;
  `,c=a(i)`
  grid-column: span 2 /span 2;
  margin: 20px auto;
  width: 80%;
  background-color: #fff;
  z-index: 59;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 10px;
  display: grid;
    grid-template-columns: repeat(1,minmax(0,1fr));
  @media (max-width: 480px) {
    width:100%
  }
`,g=a(i)`
  grid-column: span 3 /span 3;
  margin: 20px auto;
  width: 60%;
  background-color: #fff;
  z-index: 59;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 10px;
  display: grid;
    grid-template-columns: repeat(1,minmax(0,1fr));
  @media (max-width: 480px) {
    width:100%
  }
  `,f=o(e)({width:"130px",height:"130px",borderRadius:"50%",margin:"0 auto",marginTop:"10px",marginBottom:"10px"}),u=a.div`
  display: flex;
  flex-direction: row;
  a{
    text-decoration: none;
  }
`,h=a(i)`
  grid-column: span 3 /span 3;
  margin: 20px auto;
  width: 60%;
  background: #dddee6;
  
  border-radius: 10px;
  padding: 10px;
  display: grid;
  grid-template-columns: repeat(1,minmax(0,1fr));
  @media (max-width: 480px) {
    width:100%
  }
    svg{
    height: 50px;
    width: 50px;
    '&:hover': {
        color: #00bcd4;
        transform-style: preserve-3d;
  }
  }
    `,b=o(r)({fontFamily:["-apple-system","BlinkMacSystemFont",'"Segoe UI"','"Helvetica Neue"',"Arial","sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"'].join(","),color:"#111"}),y=o(i)({width:"95%",height:"auto",margin:"10px",borderRadius:"10px",backgroundColor:"#dddee6",display:"flex",alignItems:"center","&:hover":{transform:"scale(1.05)",transition:"all 0.3s ease-in-out",cursor:"pointer",backgroundColor:"#fff"}});export{x as A,u as C,m as L,b as S,y as U,l as a,c as b,f as c,g as d,h as e};
