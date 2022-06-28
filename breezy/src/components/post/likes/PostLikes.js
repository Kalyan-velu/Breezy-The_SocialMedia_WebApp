import React from 'react'
import {
    Avatar,
    Dialog,
    DialogContent,
    DialogTitle,
    IconButton,
    ListItem,
    ListItemAvatar,
    ListItemText, Tooltip
} from "@mui/material";
import {Link} from "react-router-dom";
import {Favorite, FavoriteBorder} from "@mui/icons-material";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import styled from "styled-components";
import {pink} from "@mui/material/colors";

const PostLikes=({likes=[],setLikesUser,liked,likesUser,handleLike})=>{
    const [open, setOpen] = React.useState(false);

    return(
        <div>
            <Tooltip title={liked ? 'Liked' : 'Unliked'}>
                <IconButton onClick={handleLike}>
                    {liked ? <Favorite sx={{color: pink[500]}}/> : <FavoriteBorder/>}
                </IconButton>
            </Tooltip>
            <Button
                onClick={() => {
                    setLikesUser(!likesUser)
                }}
                disableFocusRipple={true}
                disableTouchRipple={true}
                disableElevation={true}
                style={{textTransform: 'none'}}
                disableRipple={true}
                disabled={likes.length === 0}
            >
                <Typography fontWeight={200}>{likes.length} likes</Typography>
            </Button>


            <Dialog  maxWidth={"md"} open={likesUser} onClose={() => setLikesUser(!likesUser)}>
            <DialogTitle>Liked By</DialogTitle>
            <DialogContent>
                <List>
                    {likes.map((like) => {
                        return (
                            <Link to={`/user/${like._id}`}>
                                <ListItem key={like.id}>
                                    <ListItemAvatar>
                                        <Avatar alt={like.name} src={like.avatar}/>
                                    </ListItemAvatar>
                                    <ListItemText primary={like.name}/>
                                </ListItem>
                            </Link>
                        )
                    })}
                </List>
            </DialogContent>
        </Dialog>
        </div>

    )
}
export default PostLikes

const List = styled.div`
display: flex;
align-items: center;
a {
	text-decoration: none;
  font-family: 'Poppins',sans-serif;
  margin-left: 20px;
}
`