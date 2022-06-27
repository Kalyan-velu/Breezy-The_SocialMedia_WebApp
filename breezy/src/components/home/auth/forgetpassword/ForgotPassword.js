import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from "@mui/material/TextField";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {Grid} from "@mui/material";
import {forgotPassword} from "../../../../features/action/userAction";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function ForgotPassword() {
    const [email,setEmail]=useState('')
    const [error, setError] = useState(null);
    const[success,setSuccess]=React.useState(null)
    const dispatch = useDispatch();
    const {error : errorForgot,message:messageForgot} = useSelector((state) => state.like);


    const submitHandler=(e)=>{
        e.preventDefault();
        dispatch(forgotPassword(email));
    }

    useEffect(() => {
        if (errorForgot) {
            alert(error)
            setError(errorForgot);
            dispatch({type: "clearErrors"});
        }
        if (messageForgot) {
            alert(success)
            setSuccess(messageForgot);
            dispatch({type: "ClearMessage"});
        }
    },[ alert,errorForgot,messageForgot,dispatch])
    console.log(success)
    return (
        <div >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Forget Password
                    </Typography>
                    <form onSubmit={submitHandler}>
                    <TextField
                           padding={"dense"}
                           margin={"dense"}
                           autoComplete="off"
                           name='email'
                           value={email}
                           label='Enter Email'
                           fullWidth
                           onChange={(e)=>setEmail(e.target.value)}
                           required/>
                    <Grid align='center'>
                        <Button  type="submit" >Send Token</Button>
                    </Grid>
                    </form>
                </Box>
        </div>
    )}