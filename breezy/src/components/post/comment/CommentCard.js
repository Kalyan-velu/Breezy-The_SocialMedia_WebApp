import React from "react";
import {Avatar, Button, Typography} from "@mui/material";
import {Delete} from "@mui/icons-material";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {deleteCommentOnPost} from "../../../features/action/postAction";
import {getFollowingPosts} from "../../../features/action/userAction";
import styled from "styled-components";
import '../../profile/user.css'


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
        dispatch(getFollowingPosts())
    };
    return (
        <CommentUser>
            <div className={'list'}>
                <Avatar
                    src={avatar}
                    alt={name}
                    sx={{
                        width: '24px',
                        height: '24px'
                    }}
                />

                <Link to={`/user/${userId}`}>
                    <div className={'user-details'}>
                        <Typography style={{minWidth: "6max"}}>{name}</Typography>
                    </div>
                </Link>
                <div className={'user-details'}>
                    <Typography>
                        {comment}
                    </Typography>
                </div>
                <div className={'icon'}>
                    {
                        isAccount ? <Button onClick={deleteCommentHandle}>
                            <Delete/>
                        </Button> : userId === user._id ? (
                            <Button onClick={deleteCommentHandle}>
                                <Delete/>
                            </Button>
                        ) : null}
                </div>
            </div>
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