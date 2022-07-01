import React from'react';
import Button from "@mui/material/Button";
import {Link} from "react-router-dom";
import {Component} from "../../styledComponents/UserAccountStyled";
import {IconButton, Tooltip} from "@mui/material";
import {RefreshOutlined} from "@mui/icons-material";
import {useSelector} from "react-redux";
const UpdateProfile = ({fetchAgain,setFetchAgain}) => {

    const setFetchAgainH=()=> {
            setFetchAgain(!fetchAgain)
    };
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
                onClick={()=>setFetchAgainH}
            >
                Reset Password
            </Button>
            </Link>
            <div style={{flexGrow:1}}/>

            <IconButton
                disableFocusRipple disableRipple
                disableTouchRipple onClick={()=>setFetchAgainH()}
                aria-label="refresh"
            >
                <Tooltip title={'Refresh Posts'}>
                <RefreshOutlined/>
                </Tooltip>
            </IconButton>

        </Component>
    )
}

export default UpdateProfile