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
import * as PropTypes from "prop-types";
import Like from './Like'

const PostLikes=({postId,likes=[],setLikesUser,liked,likesUser,handleLike})=>{
    return(
        <div key={postId}>
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
                <List key={postId}>
                    {likes.map((like) => {
                        return (
                            <Like
                                postId={postId}
                                like={like}
                            />
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