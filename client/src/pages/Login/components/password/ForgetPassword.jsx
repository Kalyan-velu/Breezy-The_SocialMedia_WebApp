import ArrowBack from "@mui/icons-material/ArrowBack";
import {Grid, IconButton} from "@mui/material";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import {styled, useTheme} from "@mui/material/styles";
import Typography from '@mui/material/Typography';
import * as React from 'react';
import {useState} from 'react';
import {useDispatch} from "react-redux";
import {BootstrapInput} from "../../../../common/components/NewPost/PostModalStyled.jsx";
import {forgotPassword} from "../../../../features/action/userAction";


const BoxStyled = styled(Box)(({theme}) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  borderRadius: '5px',
  boxShadow: 24,
  padding: '1rem',
}))

export default function ForgotPassword({setForgetPassword, forgetPassword, emailRegExp}) {
  const theme = useTheme()
  const [email, setEmail] = useState('')
  const dispatch = useDispatch();


  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(forgotPassword(email));
    setEmail('')
  }

  return (
    <BoxStyled>
      <IconButton onClick={() => setForgetPassword(!forgetPassword)}>
        <ArrowBack/>
      </IconButton>
      <Typography
        sx={{
          fontWeight: "700",
          fontSize: "20px",
          textAlign: "center",
          bottom: "10px",
        }}
      >
        Forget Password
      </Typography>

      <form style={{margin: "1rem 0"}} onSubmit={submitHandler}>
        <BootstrapInput
          padding={"dense"}
          margin={"dense"}
          autoComplete="off"
          name='email'
          value={email}
          label='Enter Email'
          fullWidth
          onChange={(e) => setEmail(e.target.value)}
          required/>
        <Grid style={{margin: "1rem 0"}} align='center'>
          <Button variant={"contained"} disabled={!emailRegExp.test(email)} type="submit"
                  sx={{color: theme.palette.text.primary}}>Send
            Token</Button>
        </Grid>
      </form>

    </BoxStyled>
  )
}