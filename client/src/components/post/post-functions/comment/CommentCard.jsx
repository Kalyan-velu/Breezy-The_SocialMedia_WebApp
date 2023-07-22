import {Delete, DeleteForever} from "@mui/icons-material";
import {Avatar, Button, Typography} from "@mui/material";
import {pink} from "@mui/material/colors";
import {fetchAgain} from "client/src/features/action/userAction.js";
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {deleteCommentOnPost} from "../../../../features/action/postAction";
import '../../../profile/account/loggeduser/user.css'


const CommentCard = ({
                       userId,
                       name,
                       avatar,
                       comment,
                       CommentId,
                       postId,
                       isAccount
                     }) => {

  const {user} = useSelector(state => state.user);
  const dispatch = useDispatch()

  const deleteCommentHandle = async () => {
    await dispatch(deleteCommentOnPost(postId, CommentId));
    dispatch(fetchAgain())
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