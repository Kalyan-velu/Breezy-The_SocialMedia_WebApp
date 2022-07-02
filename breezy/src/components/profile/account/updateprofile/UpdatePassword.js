import React, { useEffect, useState } from "react";
import "./UpadatePassword.css";
import {Typography,FormControlLabel, Checkbox} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {updatePassword} from "../../../../features/action/userAction";
import {StyledButton} from "../../../styledComponents/PostModalStyled";


const UpdatePassword = () => {
    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [showPassword, setShowPassword] = React.useState(false);
    const dispatch = useDispatch();


    const { error, loading, message } = useSelector((state) => state.like);

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch( updatePassword(oldPassword,newPassword));
    };

    useEffect(() => {
        if (error) {
            console.log(error);
            dispatch({ type: "clearErrors" });
        }

        if (message) {
            console.log(message);
            dispatch({ type: "clearMessage" });
        }
    }, [dispatch, error, console, message]);

    return (
        <div className="updatePassword">
            <form className="updatePasswordForm" onSubmit={submitHandler}>
                <Typography variant="h3" style={{ padding: "2max" }}>
                    Update Password
                </Typography>

                <input
                    type={showPassword ? 'text': 'password'}
                    placeholder="Old Password"
                    required
                    value={oldPassword}
                    className="updatePasswordInputs"
                    onChange={(e) => setOldPassword(e.target.value)}
                />

                <input
                    type={showPassword ? 'text': 'password'}
                    placeholder="New Password"
                    required
                    className="updatePasswordInputs"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                />
                <FormControlLabel
                    control={
                        <Checkbox onChange={()=>setShowPassword(!showPassword)} name="jason"/>
                    }
                    label="Show Password"
                />
                <div className={'update-password-btn'}>
                <StyledButton fullWidth disabled={loading} type="submit">
                    Change Password
                </StyledButton>
                </div>
            </form>
        </div>
    );
};

export default UpdatePassword;