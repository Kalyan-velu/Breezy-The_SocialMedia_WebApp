import React from 'react'
import {Avatar, Button, Typography} from "@mui/material";
import {Link} from "react-router-dom";
import './loggeduser/user.css'
import {LogoutOutlined} from "@mui/icons-material";
import {useDispatch} from "react-redux";
import {logoutUser} from "../../../features/action/userAction";


function LoggedInUser({
                          userId,
                          avatar,
                          name,
                          followers = [],
                          following = [],
                          posts = [],
                      }) {
    const dispatch = useDispatch();
    const logout = () => {
        dispatch(logoutUser());
    }

    return (
        <div className={'container'}>
            <div className={'list'}>
                <Avatar
                    title={name}
                    src={avatar}
                    alt={name}
                    sx={{
                        width: '96px',
                        height: '96px',
                    }}
                />
                <div className={'details'}>
                        <Link to={`/u/${userId}`}>
                        <Typography
                            fontWeight={600}
                            sx={{
                                color: '#111',
                                fontSize: '1.2rem',
                            }}>
                            {name}
                        </Typography>
                         </Link>
                        <Link to={`/u/account`}>
                            <Typography>Edit Profile</Typography>
                        </Link>
                        <Typography
                            fontWeight={600}
                            sx={{
                                color: `#111`,
                                fontSize: '0.6rem',
                            }}
                        >
                            {posts.length} Posts {followers.length} Followers {following.length} Following
                        </Typography>
                </div>
                <Button endIcon={<LogoutOutlined/>} onClick={logout}/>
            </div>
        </div>
    )
}

export default LoggedInUser