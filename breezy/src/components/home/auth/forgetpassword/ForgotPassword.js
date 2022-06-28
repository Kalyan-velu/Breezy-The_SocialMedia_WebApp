import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from "@mui/material/TextField";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {Grid, IconButton} from "@mui/material";
import {forgotPassword} from "../../../../features/action/userAction";
import {Link} from "react-router-dom";
import {ArrowBack} from "@mui/icons-material";
import MuiAlert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";


const Alert = React.forwardRef( function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
} );
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    borderRadius: '5px',
    boxShadow: 24,
    p: 4,
};
const styleDiv = {
    display: 'flex',
    flexDirection: 'column',
}

export default function ForgotPassword() {
    const [email,setEmail]=useState('')
    const [error, setError] = useState(null);
    const[success,setSuccess]=React.useState(null)
    const [ open, setOpen ] = React.useState( false );
    const [ openS, setOpenS ] = React.useState( false );
    const dispatch = useDispatch();
    const {error : errorForgot,message:messageForgot} = useSelector((state) => state.like);


    const submitHandler=(e)=>{
        e.preventDefault();
        dispatch(forgotPassword(email));
    }

    useEffect(() => {
        if (errorForgot) {
            console.log(error)
             setOpen(true);
            setError(errorForgot);
        }
        if (messageForgot) {
           setOpenS(true);
           setSuccess(messageForgot);
        }
    },[ alert,errorForgot,messageForgot,dispatch])
    console.log(success)
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpenS( false )
        setOpen( false );
    };
    return (
        <div >
                <Box sx={style}>
                        <Link to={'/'}>
                            <IconButton>
                                  <ArrowBack/>
                             </IconButton>
                        </Link>
                        <Typography
                            sx={{
                                fontWeight:"700",
                                fontSize: "20px",
                                textAlign: "center",
                                bottom: "10px",
                            }}
                        >
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
            <div>
            <Grid align='center'>
                <Snackbar open={openS} autoHideDuration={6000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity="success" sx={{width: '100%'}}>
                        {success}
                    </Alert>
                </Snackbar>
                {error ? <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                        <Alert onClose={handleClose} severity="error" sx={{width: '100%'}}>
                            {error}
                        </Alert>
                    </Snackbar>
                    : null}
            </Grid>
            </div>
        </div>
    )}