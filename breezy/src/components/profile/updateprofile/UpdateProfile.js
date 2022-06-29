import React from'react';
import Button from "@mui/material/Button";
import {Link} from "react-router-dom";
import {Component} from "../../styledComponents/UserAccountStyled";
const UpdateProfile = () => {
    return (
        <Component >
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
        </Component>
    )
}

export default UpdateProfile