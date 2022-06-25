import React from 'react'
import {Checkbox, FormControlLabel, Grid, Paper, TextField, Typography} from '@mui/material'
import {ErrorMessage, Field, Form, Formik} from 'formik'
import * as Yup from 'yup'
import {registerUser} from "../../../features/action/userAction";
import {useDispatch} from "react-redux";
import LoadingButton from '@mui/lab/LoadingButton';


const Register = () => {
    const dispatch = useDispatch()
    const [showPassword, setShowPassword] = React.useState(false);
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


    const emailRegularExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const passwordRegularExp = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/

    const initialValues = {
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    }


    const validationSchema = Yup.object().shape({
        name: Yup.string()
            .min(3, "Minimum  characters should be 3")
            .required("Required"),
        phoneNumber: Yup.string()
            .matches(emailRegularExp, "Enter valid Phone number")
            .required("Required"),
        password: Yup.string().min(6, "Minimum characters should be 6")
            .matches(passwordRegularExp, "Password must have one upper, lower case, number, special symbol")
            .required('Required'),
        confirmPassword: Yup.string().oneOf([Yup.ref('password')], "Password not matches")
            .required('Required'),

    })

    const onSubmit = async (values) => {
        dispatch(registerUser(values))
        console.log(values)
    };

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
                                       helperText={<ErrorMessage name='name'/>}
                                       required/>


                                <Field as={TextField}
                                       margin={"dense"}
                                       padding={"dense"}
                                       autoComplete="off"
                                       name="email"
                                       type="email"
                                       label='Email Address'
                                       fullWidth
                                       error={props.errors.email && props.touched.email}
                                       helperText={<ErrorMessage name='email'/>}
                                       required/>

                                <Field as={TextField}
                                       margin={"dense"}
                                       padding={"dense"}
                                       autoComplete="off"
                                       name='password'
                                       label='Password'
                                       type={showPassword ? 'text' : 'password'}
                                       fullWidth
                                       error={props.errors.password && props.touched.password}
                                       helperText={
                                           <ErrorMessage name='password'/>}
                                       required/>

                                <Field as={TextField}
                                       margin={"dense"}
                                       autoComplete="off"
                                       padding={"dense"}
                                       name='confirmPassword'
                                       label='Confirm Password'
                                       type={showPassword ? 'text' : 'password'}
                                       fullWidth
                                       error={props.errors.confirmPassword && props.touched.confirmPassword}
                                       helperText={<ErrorMessage name='confirmPassword'/>}
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
                                disabled={props.isSubmitting}
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