import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from "@mui/material/TextField";
import {Field} from "formik";
import {useDispatch, useSelector} from "react-redux";

import {useEffect, useState} from "react";
import {Grid, Link} from "@mui/material";
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
    const {error,loading,message} = useSelector((state) => state.user);
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const dispatch = useDispatch();


    const submitHandler=(e)=>{
        e.preventDefault();
        dispatch(forgotPassword(email));
    }
    useEffect(() => {

        if (error) {
            console.log(error)
            alert(error);
            dispatch({type: "clearErrors"});
        }
        if (message) {
            console.log(message)
            alert(message);
            dispatch({type: "ClearMessage"});
        }
    },[ error,message,dispatch])
    return (
        <div>
            <Link to={'/api/v1/user/forgot-password'}>
                <Button onClick={handleOpen} onSubmit={submitHandler}>Forget Password</Button>
            </Link>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Forget Password
                    </Typography>
                    <form onSubmit={submitHandler}>
                    <Field as={TextField}
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

            </Modal>
        </div>
    )}