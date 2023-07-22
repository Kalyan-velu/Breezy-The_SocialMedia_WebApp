import {Delete, DeleteForever} from "@mui/icons-material";
import {Avatar, Button, Typography} from "@mui/material";
import {pink} from "@mui/material/colors";
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {deleteCommentOnPost} from "../../../../../features/action/postAction.js";
import {getFollowingPosts, getMyPosts, loadUser} from "../../../../../features/action/userAction.js";


const CommentCard = ({
                       userId,
                       name,
                       avatar,
                       comment,
                       CommentId,
                       postId,
                       isAccount
                     }) => {

  const {user} = useSelector(state => state.app);
  const dispatch = useDispatch()

  const deleteCommentHandle = async () => {
    await dispatch(deleteCommentOnPost(postId, CommentId));
    if (isAccount) {
      dispatch(
        getMyPosts()
      )
      dispatch(loadUser())
    } else {
      dispatch(
        getFollowingPosts(user.userId)
      )
    }
  };
  return (
    <div className={'container'}>
      <div className={'list'}>
        <Avatar
          src={avatar}
          alt={name}
          sx={{
            width: '50px',
            height: '50px'
          }}
        />
        <Link to={`/u/${userId}`}>
          <div className={'user-details'}>
            <Typography>{name}</Typography>
          </div>
        </Link>
        <div className={'user-details'}>
          <Typography>
            {comment}
          </Typography>
        </div>
        {isAccount ? <Button onClick={deleteCommentHandle}>
          <DeleteForever sx={{color: pink}}/>
        </Button> : userId === user._id ? (
          <Button onClick={deleteCommentHandle}>
            <Delete/>
          </Button>
        ) : null}

      </div>
    </div>
  )
}
export default CommentCard;