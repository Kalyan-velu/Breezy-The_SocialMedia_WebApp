import React from'react';
import Button from "@mui/material/Button";
import {Link} from "react-router-dom";
const UpdateProfile = () => {
    return (
        <div style={{display: 'flex', flexDirection: 'row'}}>
            <div style={{
                flexGrow:1
            }}/>
            <Link to={'/user/update-name'}>
            <Button

            >
                Update Name
            </Button>
            </Link>
            <div style={{flexGrow:1}}/>
            <Link to={'/user/update-email'}>
            <Button

            >
                Update Email
            </Button>
            </Link>
            <div style={{flexGrow:1}}/>
            <Link to={'/user/forgot-password'}>
            <Button

            >
                Reset Password
            </Button>
            </Link>
            <div style={{flexGrow:1}}/>
        </div>
    )
}

export default UpdateProfile