import React from 'react'
import {Button, Grid, Paper, TextField, Typography} from '@mui/material'
import {ErrorMessage, Field, Form, Formik} from 'formik'
import * as Yup from 'yup'
import {registerUser} from "../../../features/action/userAction";
import {useDispatch} from "react-redux";
import styled from "styled-components";


const Register = () => {
    const dispatch = useDispatch()

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


    const emailRegularExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
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

    return (
        <Grid style={gridStyle}>
            <ImageContainer>
                <Logo>
                    <span>Breezy</span>
                </Logo>
            </ImageContainer>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}>
                {(formik) => (
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
                                       error={formik.errors.name && formik.touched.name}
                                       helperText={<ErrorMessage name='name'/>}
                                       required/>


                                <Field as={TextField}
                                       margin={"dense"}
                                       padding={"dense"}
                                       name="email"
                                       label='Email Address'
                                       fullWidth
                                       error={formik.errors.email && formik.touched.email}
                                       helperText={<ErrorMessage name='email'/>}
                                       required/>

                                <Field as={TextField}
                                       margin={"dense"}
                                       padding={"dense"}
                                       name='password'
                                       label='Password'
                                       type='password'
                                       fullWidth
                                       error={formik.errors.password && formik.touched.password}
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
                                       error={formik.errors.confirmPassword && formik.touched.confirmPassword}
                                       helperText={<ErrorMessage name='confirmPassword'/>}
                                       required/>
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
                            <Button
                                type='submit'
                                style={btnStyle}
                                variant='outlined'
                                disabled={formik.isSubmitting}
                            >
                                Register
                            </Button>
                        </div>
                    </Form>
                )}
            </Formik>
        </Grid>
    )
}

export default Register;

const LogInComponent = styled.div`
  height:100vh;
  background-image: linear-gradient(to right,#fff5bc,#cec1ff);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2vmax;
  box-sizing: border-box;
`

const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 1.75rem;
  img {
    cursor: pointer;
    height: 2.25rem;
  }
`;

const Logo = styled.div`
  color: #3e67a5;

  span {
    font-size: 40px;
    font-family: 'Mochiy Pop P One', 'sans-serif'
  }`