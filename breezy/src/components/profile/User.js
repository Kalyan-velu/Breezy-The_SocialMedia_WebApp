import React from 'react'
import './account/loggeduser/user.css'
import {Avatar,  Typography} from "@mui/material";
import {Link} from "react-router-dom";


const User = ({userId, name, avatar}) => {
    return (
        <div className={'container'} key={userId}>

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
                    </div>
                </Link>
            </div>
        </div>
    )
}
export default User;