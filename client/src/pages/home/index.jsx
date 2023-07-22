import {Typography} from "@mui/material";
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import Post from "../../common/components/post";
import {getFollowingPosts} from "../../features/action/userAction.js";
import {HomeContainer} from "./styles";

const Home = () => {
  const dispatch = useDispatch()
  const {loading, posts} = useSelector(({postOfFollowing}) => postOfFollowing);
  const {fetch} = useSelector(({fetch}) => fetch)
  useEffect(() => {
    dispatch(getFollowingPosts())
  }, [fetch])

  return (
    <>
      <HomeContainer maxWidth={"md"}>
        {posts && posts.length > 0 ? (
          posts.map((post) => (
            <Post
              key={post._id}
              ownerId={post.owner._id}
              ownerName={post.owner.name}
              ownerAvatar={post.owner.avatar.url}
              caption={post.caption}
              postImage={post.image.url}
              likes={post.likes}
              comments={post.comments}
              createdAt={post.createdAt}
              postId={post._id}
            />
          ))
        ) : (
          <Typography variant="h6" color="textSecondary" align="center">
            No posts to show
          </Typography>
        )}
      </HomeContainer>
    </>
  )
}

export default Home