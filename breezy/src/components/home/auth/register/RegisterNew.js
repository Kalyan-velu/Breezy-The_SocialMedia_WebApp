import React, {useEffect, useState} from 'react';
import {Avatar, Checkbox, FormControlLabel, Grid, Paper, TextField} from "@mui/material";
import {registerUser} from "../../../../features/action/userAction";
import {useDispatch, useSelector} from "react-redux";
import LoadingButton from "@mui/lab/LoadingButton";
import MuiAlert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";



const Alert = React.forwardRef( function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
} );

const RegisterNew=()=>{
    const [ open, setOpen ] = React.useState( false );
    const [ openS, setOpenS ] = React.useState( false );
    const [ error, setError ] = useState( null );
    const [ success, setSuccess ] = useState( null );
    const [showPassword, setShowPassword] = React.useState(false);
    const [email, setEmail] = React.useState('');
    const [avatar, setAvatar] = useState(null);
    const [password, setPassword] = useState('');
    const[name, setName] = useState('');
    const[confirmPassword, setConfirmPassword] = useState('');
    const filePicker = React.useRef(null);
    const [loading, setLoading] = useState(false);
    const {loading:loadingRegister,error:errorRegister,success:messageRegister}=useSelector(state=>state.user)
    const dispatch=useDispatch()

    const gridStyle = {
        display: "grid",
        justifyContent: "center",
    }
    const paperStyle = {
        backgroundColor: "#d6dbee",
        padding: '0 15px 40px 15px',
        borderRadius: "10px",
        width: "inherit"
    }
    const styleField = {
        padding: '5px 5px 5px 5px',
    }

    const btnStyle = {
        color: "#0072E5",
        display: "center",
        marginTop: 10,
        width: "50%"
    }
    function handleChange() {
        setShowPassword(!showPassword)
    }
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpenS( false )
        setOpen( false );
    };
    const onSubmit = async ({e,name,email,password,avatar}) => {
        e.preventDefault()
        dispatch(registerUser({name, email, password, avatar}))
    }
    useEffect(() => {
       if(loadingRegister){
           setLoading(true)
       }
       if(messageRegister){
           setLoading(false)
           setOpenS(true)
           setSuccess('User registered successfully')
       }
       if(errorRegister){
           setLoading(false)
           setOpen(true)
           setError(errorRegister)
       }
    }, [loadingRegister,messageRegister,errorRegister]);

    const selectedPhoto = (e) => {
        const reader = new FileReader();
        if (e.target.files[0]) {
            reader.readAsDataURL(e.target.files[0])
            reader.onload = (readerEvent) => {
                setAvatar(readerEvent.target.result)
            }
        }
    }


    return(
        <Grid style={gridStyle}>
            <Paper
                elevation={0}
                style={paperStyle}>
                <div style={styleField}>
                    <form onSubmit={onSubmit}>
                        <div className={'avatar-container'}>
                        <Avatar
                            src={avatar}
                            alt={"User"}
                            title={"User"}
                            sx={{
                                width: '100px',
                                height: '100px',
                                ':hover': {
                                    cursor: "pointer",
                                }
                            }}
                            onClick={() => filePicker.current.click()}
                        />
                        <input
                            type="file"
                            onChange={selectedPhoto}
                            ref={filePicker}
                            name="file" id="file"
                            hidden
                        />
                        </div>
                    <TextField
                        margin={"dense"}
                        padding={"dense"}
                        name='name'
                        label='Username'
                        fullWidth
                        value={name}
                        onChange={(e)=>setName(e.target.value)}
                    />
                    <TextField
                        margin={"dense"}
                        padding={"dense"}
                        name='email'
                        label='Email'
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                        fullWidth
                    />
                    <TextField
                        margin={"dense"}
                        padding={"dense"}
                        name='password'
                            type={showPassword ? 'text': 'password'}
                        label='Password'
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}
                        fullWidth
                        required
                    />
                    <TextField
                        margin={"dense"}
                        padding={"dense"}
                        type={showPassword ? 'text': 'password'}
                        name={"confirm password"}
                        value={confirmPassword}
                        label='Confirm Password'
                        onChange={(e)=>setConfirmPassword(e.target.value)}
                        fullWidth
                        required
                        helperText={confirmPassword !== password ? "Password not match" : ""}
                    />

                     <FormControlLabel
                            control={
                                <Checkbox onChange={handleChange} name="jason"/>
                        }
                        label="Show Password"
                    />
                        <div style={{
                            display: "flex",
                            justifyContent: "center",
                            padding: "15px"
                        }}>

                            <LoadingButton
                                type='submit'
                                style={btnStyle}
                                variant='outlined'

                                onClick={(e)=>onSubmit({e,name,email,password,avatar})}
                            >
                                Register
                            </LoadingButton>
                        </div>
                    </form>
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
            </Paper>
        </Grid>
    )
}
export default RegisterNew;