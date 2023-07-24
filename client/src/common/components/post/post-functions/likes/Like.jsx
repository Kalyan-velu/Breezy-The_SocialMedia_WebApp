import Avatar from "@mui/material/Avatar";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import React from 'react'
import {Link} from "react-router-dom";

const Like = ({postId, like}) => {
  return (
    <Link to={`/u/${like._id}`}>
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