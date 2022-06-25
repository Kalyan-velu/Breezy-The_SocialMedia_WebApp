import React from 'react'
import {Checkbox, FormControlLabel, Grid, Paper, Typography} from "@mui/material";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";
import LoadingButton from '@mui/lab/LoadingButton';
import TextField from '@mui/material/TextField';
import {loginUser} from "../../../features/action/userAction";
import {useDispatch} from "react-redux";


const Login = () => {
    const dispatch = useDispatch()
    const [showPassword, setShowPassword] = React.useState(false);
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
        showPassword: false
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
        console.log(values)
    };

    function handleChange() {
        setShowPassword(!showPassword)
    }

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

                            </Paper>
                            <Grid align='center'>
                                <Typography
                                    variant='caption'
                                    color={"secondary"}
                                >Fill the form to login into your account
                                </Typography>
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