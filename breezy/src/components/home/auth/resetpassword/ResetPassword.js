import React, {useState,useEffect} from "react";
import {Button, Link, Typography} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {resetPassword} from "../../../../features/action/userAction";
import {useParams} from "react-router-dom";
import "./ResetPassword.css";


const ResetPassword =() =>{
    const [newPassword,setNewPassword] =useState("");
    const { error, loading, message } = useSelector((state) => state.like);
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
                    type="password"
                    placeholder="New Password"
                    required
                    value={newPassword}
                    className="updatePasswordInputs"
                    onChange={(e) => setNewPassword(e.target.value)}
                />
                <Link to="/">
                    <Typography>Login!</Typography>
                </Link>
                <Typography>Or</Typography>
                <Link to="/reset-password/:token">
                    <Typography>Request Another Token!</Typography>
                </Link>
                <Button disabled={loading} type="submit">
                    Reset Password
                </Button>
            </form>

        </div>
    )
};
export default ResetPassword