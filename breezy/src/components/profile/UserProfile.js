import React from 'react';
import Post from "../post/Post";
import {useSelector} from "react-redux";

const UserProfile = () => {
    const {user} = useSelector(state => state.user)
    return (
        <div>
            <h1>User Profile</h1>
            <Post
                postId={user.post._id}
                caption={user.post.caption}
            />
        </div>
    )
}
export default UserProfile