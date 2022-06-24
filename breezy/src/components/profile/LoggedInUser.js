import React from 'react'
import {Avatar, Typography} from "@mui/material";
import {Link} from "react-router-dom";
import './user.css'


function LoggedInUser({userId, avatar, name, email}) {

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
                    <Typography
                        fontWeight={400}
                        sx={{
                            color: `#111`,
                            fontSize: '0.6rem',
                        }}
                    >
                        Email:{email}
                    </Typography>
                </Link>
            </div>
        </div>
    )
}

export default LoggedInUser