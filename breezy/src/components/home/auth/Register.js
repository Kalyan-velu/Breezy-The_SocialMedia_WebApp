import React, {useEffect, useState} from 'react'
import { Checkbox, FormControlLabel, Grid, Paper, TextField, Typography} from '@mui/material'
import {ErrorMessage, Field, Form, Formik} from 'formik'
import Snackbar from '@mui/material/Snackbar'
import * as Yup from 'yup'
import MuiAlert from '@mui/material/Alert';
import {registerUser} from "../../../features/action/userAction";
import {useDispatch, useSelector} from "react-redux";
import LoadingButton from "@mui/lab/LoadingButton";


const Alert = React.forwardRef( function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
} );

const Register = () => {
    const [ open, setOpen ] = React.useState( false );
    const [ openS, setOpenS ] = React.useState( false );
    const [ error, setError ] = useState( null );
    const [ success, setSuccess ] = useState( null );
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = React.useState(false);
    const {error: errorRegister, success: successRegister} = useSelector(state => state.user);
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

    const emailRegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const passwordRegExp = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/

    const initialValues = {
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    }


    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpenS( false )
        setOpen( false );
    };

    const validationSchema = Yup.object().shape( {
        name: Yup.string()
            .required( "Required" ),
        email: Yup.string()
            .matches(emailRegExp, "Enter Valid Email")
            .required('Required'),
        password: Yup.string().min( 6, "Minimum characters should be 6" )
            .matches( passwordRegExp, "Password must have one upper, lower case, number, special symbol" )
            .required( 'Required' ),
        confirmPassword: Yup.string().oneOf( [ Yup.ref( 'password' ) ], "Password not matches" ).required( 'Required' )
    } )

    const onSubmit = async (values) => {
        dispatch(registerUser(values))
    };

    useEffect( () => {
        if (errorRegister) {
            setOpen(true)
            setError(errorRegister)
        }
        if (successRegister) {
            setOpenS(true)
            setSuccess('User registered successfully')
        }
    },[errorRegister, successRegister])
    console.log(error)
    function handleChange() {
        setShowPassword(!showPassword)
    }

    return (
        <Grid style={gridStyle}>
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
                                       margin={"dense"}
                                       padding={"dense"}
                                       name='name'
                                       label='Username'
                                       fullWidth
                                       error={props.errors.name && props.touched.name}
                                       helperText={<ErrorMessage name='name'/>} required/>

                                <Field as={TextField}
                                       margin={"dense"}
                                       padding={"dense"}
                                       name="email"
                                       label='Email'
                                       fullWidth
                                       error={props.errors.email && props.touched.email}
                                       helperText={<ErrorMessage name='email'/>}
                                       required/>

                                <Field as={TextField}
                                       margin={"dense"}
                                       padding={"dense"}
                                       name='password'
                                       label='Password'
                                       type={showPassword ? 'text': 'password'}
                                       fullWidth
                                       error={props.errors.password && props.touched.password}
                                       helperText={
                                           <ErrorMessage name='password'/>}
                                       required/>

                                <Field as={TextField}
                                       margin={"dense"}
                                       padding={"dense"}
                                       name='confirmPassword'
                                       label='Confirm Password'
                                       type='password'
                                       fullWidth
                                       error={props.errors.confirmPassword && props.touched.confirmPassword}
                                       helperText={<ErrorMessage name='confirmPassword'/>}
                                       required/>
                            </div>
                            <FormControlLabel
                                control={
                                    <Checkbox onChange={handleChange} name="jason"/>
                                }
                                label="Show Password"
                            />
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

                        </Paper>
                        <Grid align='center'>
                            <Typography
                                variant='caption'
                                color="secondary"
                            >Fill the form to create an account
                            </Typography>
                        </Grid>
                        <div style={{
                            display: "flex",
                            justifyContent: "center",
                            padding: "15px"
                        }}>
                            <LoadingButton
                                type='submit'
                                style={btnStyle}
                                variant='outlined'
                                loading={loading}
                            >
                                Register
                            </LoadingButton>
                        </div>
                    </Form>
                )}
            </Formik>

        </Grid>
    )
}

export default Register;