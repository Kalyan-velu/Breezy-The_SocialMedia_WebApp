import React from 'react'
import './user.css'
import {Avatar, IconButton, Typography} from "@mui/material";
import {Link} from "react-router-dom";
import SendIcon from '@mui/icons-material/Send';

const User = ({userId, name, avatar}) => {
    return (
        <div className={'container'}>

            <div className={'list'}>
                <Avatar
                    title={name}
                    src={`https://images.unsplash.com/photo-1644982647531-daff2c7383f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=1000&q=60`}
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
                <div className={'icon'}>
                    <IconButton>
                        <SendIcon/>
                    </IconButton>
                </div>
            </div>
        </div>
    )
}
export default User;