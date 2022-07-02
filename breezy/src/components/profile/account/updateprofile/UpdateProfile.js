import React from'react';
import {Link} from "react-router-dom";
import {IconButton, Tooltip} from "@mui/material";
import {RefreshOutlined} from "@mui/icons-material";
import {Component, StyledButtons} from "../../../styledComponents/UserAccountStyled";
import {useSelector} from "react-redux";
const UpdateProfile = ({fetchAgain,setFetchAgain}) => {
    const {user} = useSelector(state => state.user)
    const setFetchAgainH=()=> {
            setFetchAgain(!fetchAgain)
    };
    return (
        <Component >
            <div style={{
                flexGrow:1
            }}/>
            <Link to={`/${user._id}/profile`}>
            <StyledButtons

            >
                Update Credentials
            </StyledButtons>
            </Link>
            <div style={{flexGrow:1}}/>
            <Link to={`/${user._id}/forgot-password`}>
            <StyledButtons>
                Update Password
            </StyledButtons>
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