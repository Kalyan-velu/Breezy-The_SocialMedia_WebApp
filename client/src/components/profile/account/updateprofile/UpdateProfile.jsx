import React from'react';
import {Link} from "react-router-dom";
import {IconButton, Tooltip} from "@mui/material";
import {RefreshOutlined} from "@mui/icons-material";
import {Component, StyledButtons} from "../../../styledComponents/UserAccountStyled";
import {useDispatch, useSelector} from "react-redux";
import {DeleteMyAccount, fetchAgain, loadUser} from "../../../../features/action/userAction";

const UpdateProfile = () => {
    const dispatch=useDispatch()
    const {user} = useSelector(state => state.user)
    const setFetchAgainH=()=> {
            dispatch(loadUser())
            dispatch(fetchAgain())
    };
    const DeleteAccount = () => {
        dispatch(DeleteMyAccount())
    }
    return (
        <Component >
            <div style={{
                flexGrow:1
            }}/>
            <Link to={`/u/${user._id}/profile`}>
            <StyledButtons>
                Settings
            </StyledButtons>
            </Link>
            <div style={{flexGrow:1}}/>
                <StyledButtons onClick={DeleteAccount}>
                    Delete Profile
                </StyledButtons>

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