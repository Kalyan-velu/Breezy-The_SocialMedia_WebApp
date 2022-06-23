import React from "react";
import {Button, Typography} from "@mui/material";
import {Delete} from "@mui/icons-material";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {deleteCommentOnPost} from "../../features/action/postAction";
import {getFollowingPosts} from "../../features/action/userAction";
import styled from "styled-components";


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
    const deleteCommentHandle = () => {
        dispatch(deleteCommentOnPost(postId, CommentId));
        dispatch(getFollowingPosts())
    };
    return (
        <CommentUser>
            <Link to={`/user/${userId}`}></Link>
            <img src={avatar} alt={name}/>
            <Typography style={{minWidth: "6max"}}>{name}</Typography>
            <Typography>
                {comment}
            </Typography>
            {
                isAccount ? <Button onClick={deleteCommentHandle}>
                    <Delete/>
                </Button> : userId === user._id ? (
                    <Button onClick={deleteCommentHandle}>
                        <Delete/>
                    </Button>
                ) : null}
        </CommentUser>
    )
}
export default CommentCard;
const CommentUser = styled.div`
  display: flex;
  align-items: center;
  margin: 0.5vmax 0.5vmax 0.5vmax 0.5vmax;

  a {
    display: flex;
    justify-content: space-between;
    text-decoration: none;
    color: rgba(0, 0, 0, 0.87);
    transition: all 0.3s;

    :hover {
      transform: scale(1.1);
      cursor: pointer
    }
`