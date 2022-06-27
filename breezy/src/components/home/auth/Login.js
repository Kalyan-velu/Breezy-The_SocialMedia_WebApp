import React, {useEffect, useState} from 'react'
import {Checkbox, FormControlLabel, Grid, Paper, Typography} from "@mui/material";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";
import LoadingButton from '@mui/lab/LoadingButton';
import TextField from '@mui/material/TextField';
import {loginUser} from "../../../features/action/userAction";
import {useDispatch, useSelector} from "react-redux";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import {Link} from "react-router-dom";

const Alert = React.forwardRef( function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
} );
const Login = () => {
    const dispatch = useDispatch()
    const [ open, setOpen ] = React.useState( false );
    const [ openS, setOpenS ] = React.useState( false );
    const [ error, setError ] = useState( null );
    const [ success, setSuccess ] = useState( null );
    const [showPassword, setShowPassword] = React.useState(false);
    const {error: errorLogin, success: successLogin} = useSelector(state => state.user);
    const gridStyle = {
        display: "grid",
        justifyContent: "center",
    }
    const paperStyle = {
        backgroundColor: "#d6dbee",
        borderRadius: "10px",
        padding: '0 15px 40px 15px',
        width: "inherit"
    }
    const styleField = {
        padding: '5px'
    }
    const btnStyle = {
        color: "#0072E5",
        display: "center",
        marginTop: 10,
        width: "50%"
    }

    const emailRegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const passwordRegExp = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/

    const initialValues = {
        email: '',
        password: '',
    }

    const validationSchema = Yup.object().shape({
        email: Yup.string()
            .matches(emailRegExp, "Enter Valid Email")
            .required('Required'),
        password: Yup.string().min(6, "Minimum characters should be 6")
            .matches(passwordRegExp, "Password must have  one upper,lower case,number,special character")
            .required("Required")
    })


    const onSubmit = async (values) => {
        dispatch(loginUser(values))
    };
    useEffect(() => {
        if(errorLogin){
            setOpen(true)
            setError(errorLogin)
        }
        if(successLogin){
            setOpenS(true)
            setSuccess(successLogin)
        }
    },[errorLogin, successLogin])
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


    return (

        <Grid style={gridStyle} id={"suspense"}>

            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}>
                {(props) => (
                    <Form noValidate>
                        <Paper
                            elevation={0}
                            style={paperStyle}>
                            <div style={styleField}>
                                <Field as={TextField}
                                       padding={"dense"}
                                       margin={"dense"}
                                       autoComplete="off"
                                       name='email'
                                       label='Enter Email'
                                       fullWidth
                                       error={props.errors.email && props.touched.email}
                                       helperText={<ErrorMessage name='email'/>}
                                       required/>
                                <Field as={TextField}
                                       padding={"dense"}
                                       margin={"dense"}
                                       autoComplete="off"
                                       type={showPassword ? 'text' : 'password'}
                                       name='password'
                                       label='Enter Password'
                                       fullWidth
                                       error={props.errors.password && props.touched.password}
                                       helperText={<ErrorMessage name='password'/>}
                                       required/>
                                <FormControlLabel
                                    control={
                                        <Checkbox onChange={handleChange} name="jason"/>
                                    }
                                    label="Show Password"
                                />
                            </div>
                            <Grid align='center'>
                                <Link to="/user/forgot-password">Forgot Password?</Link>
                            </Grid>

                            </Paper>
                            <Grid align='center'>
                                <Typography
                                    variant='caption'
                                    color={"secondary"}
                                >Fill the form to login into your account
                            </Typography>
                            </Grid>
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
                            <div style={{
                                display: "flex",
                                justifyContent: "center",
                                padding: "20px"
                            }}>
                                <LoadingButton
                                    type='submit'
                                    style={btnStyle}
                                    variant='outlined'
                                    disabled={props.isSubmitting}
                                >
                                    login
                                </LoadingButton>
                            </div>
                        </Form>)}
                </Formik>
            </Grid>

    )
}

export default Login;