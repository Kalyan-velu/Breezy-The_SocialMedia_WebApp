import styled from "styled-components";
import {styled as muiStyled} from "@mui/material/styles";
import {Box} from "@mui/system";
export const ChatSections = styled.div`
  margin: 0 auto;
  width: 100%;
  border: 1px solid #e6e3e3;
  @media (max-width: 480px) {
    width: 100%
  }
`
export const ChatContainer = styled.div`
	width: 100vh;
    height: 82vh;
  a{
    text-decoration: none;
  }
`
export const ChatSection=styled.div`
  margin: 0 auto;
  width: 100%;
  @media(max-width: 480px){
    width:100%
  }
`
export const ChatHeader =styled.div`
    width:100%;
    height:63px;
    display:flex;
    background-color:#E7EBF2FF;
    justify-content:space-around;
    align-items:center;
    border-bottom:1px solid #E0E0E0;
    z-index:19;
`
export const ChatsContainer = muiStyled(Box)({
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'top',
    overflowY: 'auto',
    overflowX: 'hidden',
    '@media(max-width: 480px)': {
        width:'100%'
    }
})
export const ChatsUserContainer = muiStyled(Box)({
    width:'100%',
    height:'60px',
    display:'flex',
    alignItems:"center",
    '&:hover':{
        zIndex:'99',
        cursor:'pointer',
        backgroundColor:'#aea7c3',
        fontSize:"26px"
    },
})

export const ChatUserList=styled.div`
  display: flex;
  align-items: center;
  margin: 10px ;
  width: 100%;
  a{
    text-decoration: none;
    font-family: 'Poppins', sans-serif;
    margin-left: 10px;
  }
`
export const ChatUserDetails=styled.div`
  display: flex;
  align-items: center;
  margin: inherit;
  width: 100%;
`
export const ChatPageContainer=styled.div`
  display:grid;
  grid-template-columns: repeat(1,minmax(0,1fr));
  border: #e7ebf2 solid 0.5px;
  border-radius: 5px;
  z-index:99;
  @media(min-width: 760px){
    grid-template-columns: repeat(3,minmax(0,1fr));
    max-width: 72rem;
  }
  @media(min-width: 640px){
    max-width: 48rem;
  }
  @media(min-width: 1290px){
    max-width: 80rem;
  }
  @media(max-width: 480px){
    max-width: 100%;
  }
  margin: 0 auto;
`
export const ChatContent=styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: left;
  padding-left: 10px;
`
export const ChatList=styled.div`

`