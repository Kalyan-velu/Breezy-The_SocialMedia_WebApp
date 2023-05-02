import React, { useState } from 'react'
import Login from './Login'
import { Container, Typography } from "@mui/material";
import RegisterNew from './register/RegisterNew';
import { Box } from '@mui/system';

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
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    backgroundColor: "#0f112d",
                    width: '100%',
                    height: '80px',
                    m: '15px 0 15px 0',
                    borderRadius: '10px',
                    borderWidth: '1px'
                }}>
                <Typography variant={'h3'} sx={typo}>{setr ? "Login" : "Register"}</Typography>
            </Box>
            {setr ? <Login setSetr={setSetr} /> : <RegisterNew setSetr={setSetr} />}
        </Container>
    )
}

export default AuthPage