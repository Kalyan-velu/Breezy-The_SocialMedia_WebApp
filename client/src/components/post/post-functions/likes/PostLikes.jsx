import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogTitle,
    IconButton,
    Tooltip
} from "@mui/material";
import {Favorite, FavoriteBorder} from "@mui/icons-material";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import styled from "styled-components";
import {pink} from "@mui/material/colors";
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
                                key={like._id}
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