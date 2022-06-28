import React from 'react'
import {Avatar, List, ListItem, ListItemAvatar, ListItemText} from "@mui/material";
import {Link} from "react-router-dom";

const Like=({postId,like})=>{
    return(
        <Link to={`/user/${like._id}`}>
            <ListItem key={like.id}>
                <ListItemAvatar>
                    <Avatar alt={like.name}
                            src={`https://images.unsplash.com/photo-1644982647531-daff2c7383f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=1000&q=60`}
                    />
                </ListItemAvatar>
                <ListItemText primary={like.name}/>
            </ListItem>
        </Link>
    )
}
export default Like