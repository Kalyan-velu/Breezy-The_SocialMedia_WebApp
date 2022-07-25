import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {Grid, IconButton} from "@mui/material";
import {forgotPassword} from "../../../../features/action/userAction";
import {Link} from "react-router-dom";
import {ArrowBack} from "@mui/icons-material";
import {BootstrapInput} from "../../../styledComponents/PostModalStyled";
import ErrorSnackbar from "../../../styledComponents/error-message/ErrorMessage";



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

export default function ForgotPassword() {
    const [email,setEmail]=useState('')
    const [error, setError] = useState(null);
    const[success,setSuccess]=React.useState(null)
    const [ openE, setOpenE ] = React.useState( false );
    const [ openS, setOpenS ] = React.useState( false );
    const dispatch = useDispatch();
    const {error : errorForgot,message:messageForgot} = useSelector((state) => state.password);


    const submitHandler=(e)=>{
        e.preventDefault();
        dispatch(forgotPassword(email));
        setEmail('')
    }

    useEffect(() => {
        if (errorForgot) {
            setOpenE(true);
            setError(errorForgot);
        }
        if (messageForgot) {
           setOpenS(true);
           setSuccess(messageForgot);
        }
    },[ errorForgot,messageForgot,dispatch])


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
                    <BootstrapInput
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
                <ErrorSnackbar
                    openS={openS}
                    setOpenS={setOpenS}
                    openE={openE}
                    setOpenE={setOpenE}
                    error={error}
                    success={success}
                   />
            </div>
        </div>
    )}