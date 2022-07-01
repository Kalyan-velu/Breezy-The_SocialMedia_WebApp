import React, {useState} from 'react';
import {Avatar, Button, Checkbox, FormControlLabel, Grid, Input, Paper, TextField} from "@mui/material";
import {registerUser} from "../../../features/action/userAction";
import {useDispatch} from "react-redux";
import AvatarPreview from "./AvatarPreview";


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

const RegisterNew=()=>{
    const [showPassword, setShowPassword] = React.useState(false);
    const [email, setEmail] = React.useState('');
    const [avatar, setAvatar] = useState(null);
    const [password, setPassword] = useState('');
    const[name, setName] = useState('');
    const[confirmPassword, setConfirmPassword] = useState('');
    const [state, setState] = useState(null);
    const filePicker = React.useRef(null);
    const dispatch=useDispatch()

    function handleChange() {
        setShowPassword(!showPassword)
    }
    const onSubmit = async ({name,email,password,avatar}) => {
        dispatch(registerUser({name,email,password,avatar}))
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
                        <Button
                            onClick={()=>onSubmit({name,email,password,avatar})}
                        >
                            Register
                        </Button>
                    </form>
                </div>
            </Paper>
        </Grid>
    )
}
export default RegisterNew;