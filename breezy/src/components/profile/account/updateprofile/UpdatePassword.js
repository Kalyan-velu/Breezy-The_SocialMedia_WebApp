import React, { useEffect, useState } from "react";
import "./UpdatePassword.css";
import {FormControlLabel, Checkbox} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {updatePassword} from "../../../../features/action/userAction";
import {StyledButton} from "../../../styledComponents/PostModalStyled";
import Typography  from '@mui/joy/Typography';
import ErrorSnackbar from "../../../styledComponents/error-message/ErrorMessage";


const UpdatePassword = () => {
    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [error, setError] = useState(null);
    const[success,setSuccess]=React.useState(null)
    const [ openE, setOpenE ] = React.useState( false );
    const [ openS, setOpenS ] = React.useState( false );
    const [showPassword, setShowPassword] = React.useState(false);
    const dispatch = useDispatch();
    const { error:updateError, loading, message } = useSelector((state) => state.password);

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch( updatePassword(oldPassword,newPassword));
    };

    useEffect(() => {
        if (updateError) {
            setOpenE(true);
            setError(updateError);
        }

        if (message) {
            setOpenS(true);
            setSuccess(message);
        }
    }, [dispatch,message,updateError]);

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
                <ErrorSnackbar
                    openS={openS}
                    setOpenS={setOpenS}
                    openE={openE}
                    setOpenE={setOpenE}
                    error={error}
                    success={success}
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