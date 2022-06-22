import React from "react";
import {Button, Typography} from "@mui/material";
import {Delete} from "@mui/icons-material";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {deleteCommentOnPost} from "../../features/action/postAction";


const commentCard = ({
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
    };
    return (
        <div className="commentUser">
            <Link to={`/user/${userId}`}></Link>
            <img src={avatar} alt={name} />
            <Typography style={{minWidth: "6max" }}>{name}</Typography>
            <Typography>
                {comment}
            </Typography>
            {
                isAccount? <Button onClick={ deleteCommentHandle }>
                    <Delete/>
                </Button> : userId === user._id ? (
                    <Button onClick={ deleteCommentHandle }>
                        <Delete/>
                    </Button>
                ): null}
            }

        </div>
    )
}
export default commentCard;