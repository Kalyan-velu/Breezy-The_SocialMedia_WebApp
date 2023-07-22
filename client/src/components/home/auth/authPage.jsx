import {Container, Typography} from "@mui/material";
import {Box} from '@mui/system';
import React, {useState} from 'react'
import Login from './Login'
import RegisterNew from './register/RegisterNew';

const AuthPage = () => {
  const [setr, setSetr] = useState(false)
  const typo = {
    color: "#fff",
    fontFamily: ['Monoton', 'cursive'],
  }
  return (
    <Container
      maxWidth="sm"
      fixed
    >
      <Box
        sx={{}}>
        <Typography variant={'h3'} sx={typo}>{setr ? "Login" : "Register"}</Typography>
      </Box>
      {setr ? <Login setSetr={setSetr}/> : <RegisterNew setSetr={setSetr}/>}
    </Container>
  )
}

export default AuthPage