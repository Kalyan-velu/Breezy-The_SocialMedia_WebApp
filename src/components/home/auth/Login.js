import React, {useState} from 'react'
import {Grid, Paper, Typography} from "@mui/material";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";
import {useNavigate} from "react-router-dom";
import LoadingButton from '@mui/lab/LoadingButton';
import TextField from '@mui/material/TextField';
import styled from "styled-components";
import {loginUser} from "../../../features/action/user";
import {useDispatch} from "react-redux";



const Login = () => {
    const navigate = useNavigate();
    const dispatch=useDispatch()
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

    const emailRegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const passwordRegExp = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/

    const initialValues = {
        email: '',
        password: ''
    }

    const validationSchema = Yup.object().shape( {
        email: Yup.string()
            .matches( emailRegExp, "Enter Valid Email" )
            .required( 'Required' ),
        password: Yup.string().min( 6, "Minimum characters should be 6" )
            .matches( passwordRegExp, "Password must have  one upper,lower case,number,special character" )
            .required( "Required" )
    } )


    const onSubmit = async (values) => {
        dispatch(loginUser(values))
        console.log(values)
    };

    return (
        <LogInComponent>
        <Grid style={gridStyle} id={"suspense"}>
            <ImageContainer>
                <Logo>
                    <span>Breezy</span>
                </Logo>
            </ImageContainer>
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
                                       name='email'
                                       label='Enter Email'
                                       fullWidth
                                       error={props.errors.email && props.touched.email}
                                       helperText={<ErrorMessage name='email'/>}
                                       required/>
                                <Field as={TextField}
                                       padding={"dense"}
                                       margin={"dense"}
                                       type={"password"}
                                       name='password'
                                       label='Enter Password'
                                       fullWidth
                                       error={props.errors.password && props.touched.password}
                                       helperText={<ErrorMessage name='password'/>}
                                       required/>
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
                            >
                                login
                            </LoadingButton>
                        </div>
                    </Form>)}
            </Formik>
        </Grid>
        </LogInComponent>
    )
}

export default Login
const LogInComponent=styled.div`
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

const Logo=styled.div`
  color: #3e67a5;

  span {
    font-size: 40px;
    font-family: 'Mochiy Pop P One', 'sans-serif'
  }`