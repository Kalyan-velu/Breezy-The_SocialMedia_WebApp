import Favorite from "@mui/icons-material/Favorite";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Button from "@mui/material/Button";
import {pink} from "@mui/material/colors";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import {styled} from "@mui/material/styles";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import React from 'react'
import Like from './Like'

const PostLikes = ({postId, likes = [], setLikesUser, liked, likesUser, handleLike}) => {
  return (
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


      <Dialog maxWidth={"md"} open={likesUser} onClose={() => setLikesUser(!likesUser)}>
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

const List = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
  "&a": {
    textDecoration: "none",
    fontFamily: "'Poppins',sans-serif",
    marginLeft: "20px"
  }
}))