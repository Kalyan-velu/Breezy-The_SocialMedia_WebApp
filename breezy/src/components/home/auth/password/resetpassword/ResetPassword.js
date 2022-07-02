import React, {useState,useEffect} from "react";
import {Button, Checkbox, FormControlLabel, Grid, Typography} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {resetPassword} from "../../../../../features/action/userAction";
import {Link, useParams} from "react-router-dom";
import "./ResetPassword.css";


const ResetPassword =() =>{
    const [newPassword,setNewPassword] =useState("");
    const { error, loading, message } = useSelector((state) => state.like);
    const [showPassword, setShowPassword] = React.useState(false);
    const dispatch = useDispatch();
    const params = useParams()
    console.log (params.token)
    const submitHandler=(e)=>{
        e.preventDefault();
        dispatch(resetPassword(params.token,newPassword));
    }
    useEffect(() => {

        if (error) {
            console.log(error)
            alert(error);
            dispatch({type: "clearErrors"});
        }
        if (message) {
            console.log(message)
            alert(message);
            dispatch({type: "ClearMessage"});
        }
    },[ error,message,loading,dispatch])
    return(
        <div className="resetPassword">
            <form className="resetPasswordForm" onSubmit={submitHandler}>
                <Typography variant="h3" style={{padding: "2max"}}>
                    Breezy
                </Typography>
                <input
                    type={showPassword ? 'text': 'password'}
                    placeholder="New Password"
                    required
                    value={newPassword}
                    className="resetPasswordInputs"
                    onChange={(e) => setNewPassword(e.target.value)}
                />
                <FormControlLabel
                    control={
                        <Checkbox onChange={()=>setShowPassword(!showPassword)} name="jason"/>
                    }
                    label="Show Password"
                />
                <Link to="/">
                    <Grid align={'center'}>
                    <Button variant="contained" color="primary">
                        Login
                    </Button>
                    </Grid>
                </Link>
                <Typography>Or</Typography>
                <Link to="/reset-password/:token">
                    <Typography>Request Another Token!</Typography>
                </Link>
                <Button variant="contained" color="primary" type="submit">
                    Reset Password
                </Button>
            </form>

        </div>
    )
};
export default ResetPassword