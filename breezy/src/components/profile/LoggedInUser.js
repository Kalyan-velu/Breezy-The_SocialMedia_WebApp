import React from 'react'
import {Avatar, Button, Typography} from "@mui/material";
import {Link} from "react-router-dom";
import './user.css'
import {LogoutOutlined} from "@mui/icons-material";
import {useDispatch} from "react-redux";
import {logOutUser} from "../../features/action/userAction";


function LoggedInUser({
                          userId,
                          avatar,
                          name,
                          email,
                          followers = [],
                          following = [],
                          posts = [],
                      }) {
    const dispatch = useDispatch();
    const logout = () => {
        dispatch(logOutUser());
        localStorage.removeItem('token')
    }

    return (
        <div className={'container'}>
            <div className={'list'}>
                <Avatar
                    title={name}
                    src={avatar}
                    alt={name}
                />
                <Link to={`/user/${userId}`}>
                    <div className={'user-details'}>
                        <Typography
                            fontWeight={600}
                            sx={{
                                color: '#111',
                                fontSize: '1.2rem',
                            }}>
                            {name}
                        </Typography>
                        <Link to={`/user/update-profile`}>
                            <Typography>Edit Profile</Typography>
                        </Link>
                    </div>
                    <div className={'user-details'}>
                        <Typography
                            fontWeight={400}
                            sx={{
                                color: `#111`,
                                fontSize: '0.6rem',
                            }}
                        >
                            Email:{email}
                        </Typography>
                    </div>
                    <div className={'user-details'}>
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
                </Link>
                <Button
                    onClick={logout}
                    endIcon={<LogoutOutlined/>}/>
            </div>
        </div>
    )
}

export default LoggedInUser