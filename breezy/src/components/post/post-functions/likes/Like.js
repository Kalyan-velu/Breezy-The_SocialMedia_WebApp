import React from 'react'
import {Avatar, ListItem, ListItemAvatar, ListItemText} from "@mui/material";
import {Link} from "react-router-dom";

const Like=({postId,like})=>{
    return(
        <Link to={`/user/${like._id}`}>
            <ListItem key={postId}>
                <ListItemAvatar>
                    <Avatar alt={like.name}
                            src={like.avatar.url}
                    />
                </ListItemAvatar>
                <ListItemText primary={like.name}/>
            </ListItem>
        </Link>
    )
}
export default Like