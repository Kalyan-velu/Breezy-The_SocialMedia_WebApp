import {Delete, DeleteForever} from "@mui/icons-material";
import {Avatar, IconButton, Typography} from "@mui/material";
import {pink} from "@mui/material/colors";
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {deleteCommentOnPost} from "../../../../../features/action/postAction.js";


const CommentCard = ({
                       item,
                       userId,
                       name,
                       avatar,
                       comment,
                       commentId,
                       postId,
                       isAccount
                     }) => {

  const {user} = useSelector(state => state.app);
  const dispatch = useDispatch()
  const deleteCommentHandle = async () => {
    await dispatch(deleteCommentOnPost(postId, item?._id));
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
        <Link to={`/user/${userId}`}>
          <div className={'user-details'}>
            <Typography>{name}</Typography>
          </div>
        </Link>
        <div className={'user-details'}>
          <Typography>
            {comment}
          </Typography>
        </div>
        {isAccount ? <IconButton onClick={deleteCommentHandle}>
          <DeleteForever sx={{color: pink}}/>
        </IconButton> : userId === user._id ? (
          <IconButton onClick={deleteCommentHandle}>
            <Delete/>
          </IconButton>
        ) : null}

      </div>
    </div>
  )
}
export default CommentCard;