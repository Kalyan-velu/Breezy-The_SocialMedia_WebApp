import InfoOutlined from "@mui/icons-material/InfoOutlined";
import LoadingButton from "@mui/lab/LoadingButton";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import {ErrorMessage, Field, Form, Formik} from "formik";
import React from 'react'
import {useDispatch, useSelector} from "react-redux";
import * as Yup from "yup";
import ErrorBoundary from "../../../../common/components/errorBoundary"
import {loginUser} from "../../../../features/action/userAction.js";

const ForgotPassword = React.lazy(() => import("../password/ForgetPassword.jsx"))

/**
 *
 * @returns {JSX.Element}
 * @constructor
 */
const LoginComponent = ({setSetr, setForgetPassword, forgetPassword}) => {
  const dispatch = useDispatch()
  const [showPassword, setShowPassword] = React.useState(false);

  const {loading} = useSelector(({app}) => app)
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
      {(forgetPassword === false) ? <Formik
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
                    {loading ? "logging in.." : "login"}
                  </LoadingButton>
                </div>
                <Grid align='center'>
                  <div style={{color: "blue", cursor: "pointer"}}
                       onClick={() => setForgetPassword(!forgetPassword)}>Forgot Password?
                  </div>
                </Grid>
                <Grid align='center'>
                  <Typography
                    variant='caption'
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
        </Formik> :
        <ErrorBoundary>
          <ForgotPassword setForgetPassword={setForgetPassword} emailRegExp={emailRegExp}
                          forgetPassword={forgetPassword}/>
        </ErrorBoundary>
      }
    </>
  )
}

export default LoginComponent;