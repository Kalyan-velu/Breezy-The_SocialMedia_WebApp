import {InfoOutlined} from "@mui/icons-material";
import LoadingButton from "@mui/lab/LoadingButton";
import {Checkbox, FormControlLabel, Grid, Paper, Typography} from "@mui/material";
import TextField from "@mui/material/TextField";
import {ErrorMessage, Field, Form, Formik} from "formik";
import React from 'react'
import {useDispatch} from "react-redux";
import {Link} from "react-router-dom";
import * as Yup from "yup";
import {loginUser} from "../../../../features/action/userAction.js";

/**
 *
 * @returns {JSX.Element}
 * @constructor
 */
const LoginComponent = ({setSetr}) => {
  const dispatch = useDispatch()
  const [showPassword, setShowPassword] = React.useState(false);

  const paperStyle = {
    backgroundColor: "inherit",
    borderRadius: "10px",
    padding: '0 15px 40px 15px',
    width: "inherit"
  }
  const btnStyle = {
    color: "#0072E5",
    display: "center",
    marginTop: 10,
    width: "50%"
  }

  const emailRegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const passwordRegExp = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/

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

  function handleChange() {
    setShowPassword(!showPassword)
  }

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}>
        {(props) => (
          <Form noValidate>
            <Paper
              elevation={0}
              style={paperStyle}
            >
              <Field as={TextField}
                     margin={"dense"}
                     size="medium"
                     padding={"dense"}
                     autoComplete="off"
                     name='email'
                     label='Enter Email'
                     fullWidth
                     error={props.errors.email && props.touched.email}
                     helperText={<ErrorMessage name='email'/>}
                     required
              />
              <Field as={TextField}
                     margin={"dense"}
                     size="medium"
                     padding={"dense"}
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
              <div style={{
                display: "flex",
                justifyContent: "center",
                padding: "20px"
              }}>
                <LoadingButton
                  type='submit'
                  style={btnStyle}
                  variant='contained'
                  disabled={props.isSubmitting}
                >
                  login
                </LoadingButton>
              </div>
              <Grid align='center'>
                <Link to="/u/forgot-password">Forgot Password?</Link>
              </Grid>
              <Grid align='center'>
                <Typography
                  variant='caption'
                  color={"secondary"}
                >Fill the form to login into your account
                </Typography>
                <Typography
                  level="body2"
                  startDecorator={<InfoOutlined/>}
                  sx={{alignItems: 'flex-start', maxWidth: 340, wordBreak: 'break-all'}}
                >
                  Don't Have An Account?
                  <span role='button' style={{color: "#0072E5"}}
                        onClick={() => setSetr(prevState => prevState === 'login' ? 'register' : 'login')}> Sign Up </span>
                </Typography>
              </Grid>

            </Paper>

          </Form>)}
      </Formik>
    </>
  )
}

export default LoginComponent;