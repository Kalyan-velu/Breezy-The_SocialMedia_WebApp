import {Checkbox, FormControlLabel} from "@mui/material";
import {useTheme} from "@mui/material/styles";
import Typography from '@mui/material/Typography';
import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {StyledButton} from "../../../common/components/NewPost/PostModalStyled.jsx";
import {updatePassword} from "../../../features/action/userAction.js";
import "../styles/UpdatePassword.css";


const UpdatePassword = () => {
    const theme = useTheme()
    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [showPassword, setShowPassword] = React.useState(false);
    const dispatch = useDispatch();

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(updatePassword(oldPassword, newPassword));
    };

    return (
        <div className="updatePassword">
            <form className="updatePasswordForm" style={{backgroundColor: theme.palette.secondary.main}}
                  onSubmit={submitHandler}>
                <Typography variant="h3" style={{padding: "2max"}}>
                    Update Password
                </Typography>

                <input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Old Password"
                    required
                    value={oldPassword}
                    className="updatePasswordInputs"
                    onChange={(e) => setOldPassword(e.target.value)}
                />

                <input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="New Password"
                    required
                    className="updatePasswordInputs"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                />
                <FormControlLabel
                    control={
                        <Checkbox onChange={() => setShowPassword(!showPassword)} name="jason"/>
                    }
                    label="Show Password"
                />

                <div className={'update-password-btn'}>
                    <StyledButton fullWidth type="submit">
                        Change Password
                    </StyledButton>
                </div>
            </form>
        </div>
    );
};

export default UpdatePassword;