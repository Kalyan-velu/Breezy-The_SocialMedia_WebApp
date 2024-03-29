import {InfoOutlined} from "@mui/icons-material";
import LoadingButton from "@mui/lab/LoadingButton";
import {Avatar, Checkbox, FormControlLabel, Grid, Paper, TextField} from "@mui/material";
import Typography from '@mui/material/Typography';
import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from 'react-router-dom';
import {registerUser} from "../../../../features/action/userAction";


const RegisterNew = ({setSetr}) => {
  const navigate = useNavigate()
  const [open, setOpen] = React.useState(false);
  const [openS, setOpenS] = React.useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [showPassword, setShowPassword] = React.useState(false);
  const [email, setEmail] = React.useState('');
  const [avatar, setAvatar] = useState(null);
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const filePicker = React.useRef(null);
  const {loading} = useSelector(({app}) => app)
  const dispatch = useDispatch()

  const gridStyle = {
    display: "grid",
    justifyContent: "center",
  }
  const paperStyle = {
    backgroundColor: "inherit",
    padding: '0 15px 40px 15px',
    borderRadius: "10px",
    width: "inherit"
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

  const onSubmit = async ({e, name, email, password, avatar}) => {
    e.preventDefault()
    dispatch(registerUser({name, email, password, avatar}))
  }


  const selectedPhoto = (e) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0])
      reader.onload = (readerEvent) => {
        setAvatar(readerEvent.target.result)
      }
    }
  }


  return (
    <Grid style={gridStyle}>
      <div
        style={{
          margin: "2% auto"
        }}
      >
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
      </div>
      <Paper
        elevation={0}
        style={paperStyle}>
        <div>
          <form onSubmit={onSubmit}>
            <input
              type="file"
              onChange={selectedPhoto}
              ref={filePicker}
              name="file" id="file"
              hidden
              required
            />

            <TextField
              margin={"dense"}
              padding={"dense"}
              size={"small"}
              name='name'
              label='Username'
              autoComplete={'off'}
              fullWidth
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <TextField
              margin={"dense"}
              padding={"dense"}
              size={"small"}
              name='email'
              autoComplete={'off'}
              label='Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              fullWidth
              required
            />
            <TextField
              margin={"dense"}
              padding={"dense"}
              size={"small"}
              autoComplete={'off'}
              name='password'
              type={showPassword ? 'text' : 'password'}
              label='Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              fullWidth
              required
            />
            <TextField
              margin={"dense"}
              padding={"dense"}
              size={"small"}
              type={showPassword ? 'text' : 'password'}
              name={"confirm password"}
              value={confirmPassword}
              autoComplete={'off'}
              label='Confirm Password'
              onChange={(e) => setConfirmPassword(e.target.value)}
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

          </form>
        </div>
        <Grid align='center'>
          <LoadingButton
            type='submit'
            style={btnStyle}
            variant='contained'
            onClick={(e) => onSubmit({e, name, email, password, avatar})}
          >
            {loading ? 'Registering...' : 'Register'}
          </LoadingButton>
        </Grid>
        <Grid align='center'>
          <Typography
            variant='caption'
            color={"secondary"}
          >Fill the form to Register your account
          </Typography>
          <Typography
            level="body2"
            startDecorator={<InfoOutlined/>}
            sx={{alignItems: 'flex-start', maxWidth: 340, wordBreak: 'break-all'}}
          >
            Have An Account?
            <span
              role='button' style={{color: "#0072E5"}}
              onClick={() => setSetr(prevState => prevState === 'login' ? 'register' : 'login')}
            >Login</span>
          </Typography>
        </Grid>
      </Paper>


    </Grid>
  )
}
export default RegisterNew;