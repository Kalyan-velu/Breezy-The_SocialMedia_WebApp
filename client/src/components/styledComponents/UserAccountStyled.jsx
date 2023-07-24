import {Avatar, Button, Container} from "@mui/material";
import {Box, styled as muiStyled} from '@mui/system';
import styled from "styled-components";

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 5px 10px 10px;
`
export const StyledContainer = muiStyled(Container)({})


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
    font-family: 'Poppins', sans-serif;
    margin-left: 20px;
  }
`
export const AccountDetails = styled.div`
  display: inline-block;
  flex-direction: row;
  text-align: center;
`
export const StyledBox = styled(Box)`
  grid-column: span 2 /span 2;
  margin: 20px auto;
  width: 80%;
  background-color: #fff;
  z-index: 59;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 10px;
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  @media (max-width: 480px) {
    width: 100%
  }
`

export const StyledBoxUpdate = styled(Box)`
  grid-column: span 3 /span 3;
  margin: 20px auto;
  width: 60%;
  background-color: #fff;
  z-index: 59;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 10px;
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  @media (max-width: 480px) {
    width: 100%
  }
`
export const StyledAvatar = muiStyled(Avatar)({
    width: '130px',
    height: '130px',
    borderRadius: '50%',
    margin: '0 auto',
    marginTop: '10px',
    marginBottom: '10px',
})

export const StyledBoxNewPost = styled(Box)`
  grid-column: span 3 /span 3;
  margin: 20px auto;
  width: 60%;
  background: #dddee6;

  border-radius: 10px;
  padding: 10px;
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  @media (max-width: 480px) {
    width: 100%
  }

  svg {
    height: 50px;
    width: 50px;

    &:hover {
      color: #00bcd4;
      transform-style: preserve-3d;
    }
  }
`
export const StyledButtons = muiStyled(Button)({
    fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
    ].join(','),
    color: '#111',
})
export const UserContainer = muiStyled(Box)({
    width: '95%',
    height: 'auto',
    margin: '10px',
    borderRadius: '10px',
    backgroundColor: '#dddee6',
    display: 'flex',
    alignItems: 'center',
    '&:hover': {
        transform: 'scale(1.05)',
        transition: 'all 0.3s ease-in-out',
        cursor: 'pointer',
        backgroundColor: '#fff',
    }
})