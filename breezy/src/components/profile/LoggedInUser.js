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
                    src={`https://images.unsplash.com/photo-1644982647531-daff2c7383f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=1000&q=60`}
                    alt={name}
                />
                <div className={'details'}>
                    <div className={'user-details'}>
                        <Link to={`/user/${userId}`}>
                        <Typography
                            fontWeight={600}
                            sx={{
                                color: '#111',
                                fontSize: '1.2rem',
                            }}>
                            {name}
                        </Typography>
                         </Link>
                        <Link to={`/user/update-profile`}>
                            <Typography>Edit Profile</Typography>
                        </Link>

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
                </div>
                <Button
                    onClick={logout}
                    endIcon={<LogoutOutlined/>}/>
            </div>
        </div>
    )
}

export default LoggedInUser