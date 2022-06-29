import React from 'react'
import {Avatar, Button, Typography} from "@mui/material";
import {Link} from "react-router-dom";
import './user.css'
import {useDispatch} from "react-redux";
import {logOutUser} from "../../../features/action/userAction";


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

    return (
        <div className={'container'}>
            <div className={'list'}>
                <Avatar
                    title={name}
                    src={`https://images.unsplash.com/photo-1644982647531-daff2c7383f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=1000&q=60`}
                    alt={name}
                />
                <div className={'details'}>
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
                        <Link to={`/user/account`}>
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
        </div>
    )
}

export default LoggedInUser