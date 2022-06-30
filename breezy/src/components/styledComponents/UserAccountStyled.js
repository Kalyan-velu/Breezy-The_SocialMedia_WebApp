import styled from "styled-components";
import { styled as muiStyled } from '@mui/system';
import {Box} from "@mui/system";
import {Avatar, Container} from "@mui/material";
export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 5px 10px 10px;  
`
export const StyledContainer = muiStyled(Container)({

})
  

export const Section = styled.div`
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
`

export const List = styled.div`
  display: flex;
  flex-direction: column;
  
align-items: center;
div {
    text-decoration: none;
    font-family: 'Poppins',sans-serif;
    margin-left: 20px;
}
`
export const AccountDetails = styled.div`
  display:inline-block;
  flex-direction: row;
  text-align: center;
  `
export const StyledBox=styled(Box)`
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
`

export const StyledBoxUpdate=styled(Box)`
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
  `
export const StyledAvatar=muiStyled(Avatar)({
  width: '130px',
  height: '130px',
  borderRadius: '50%',
  margin: '0 auto',
  marginTop: '10px',
  marginBottom: '10px',
  })
export const Component=styled.div`
  display: flex;
  flex-direction: row;
  a{
    text-decoration: none;
  }
`
export const StyledBoxNewPost=styled(Box)`
  grid-column: span 3 /span 3;
  margin: 20px auto;
  width: 10%;
  background-color: #fff;
  z-index: 59;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 10px;
  display: grid;
  grid-template-columns: repeat(1,minmax(0,1fr));
  @media (max-width: 480px) {
    width:25%;
    border-radius: 50%;
  }
`