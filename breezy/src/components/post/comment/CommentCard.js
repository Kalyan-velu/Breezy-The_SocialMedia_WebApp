import React from "react";
import {Avatar, Button, Typography} from "@mui/material";
import {Delete} from "@mui/icons-material";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {deleteCommentOnPost} from "../../../features/action/postAction";
import {getFollowingPosts} from "../../../features/action/userAction";
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
        <div className={'container'}>
            <div className={'list'}>
                <Avatar
                    src={`chrome://branding/content/about-logo.png`}
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
                {isAccount ? <Button onClick={deleteCommentHandle}>
                    <Delete/>
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