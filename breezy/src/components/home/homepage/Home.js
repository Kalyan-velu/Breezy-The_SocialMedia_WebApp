import React, {useEffect} from 'react'
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import Post from "../../post/Post";
import {getFollowingPosts} from "../../../features/action/userAction";
import Loader from "../../loader/Loader";
import {Typography} from "@mui/material";
import LoggedInUser from "../../profile/LoggedInUser";


function Home() {
    const dispatch = useDispatch();
    const {loading, posts, error} = useSelector((state) => state.postOfFollowing);
    useSelector((state) => state.user);
    const {user} = useSelector(state => state.user)
    console.log(user.following)


    useEffect(() => {
        dispatch(getFollowingPosts())
    }, []);


    return loading === true ? (
        <Loader/>
    ) : (
        <Container>
            <Sections>
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
                        />))
                ) : (
                    <Typography variant="h6" color="textSecondary" align="center">
                        No posts to show
                    </Typography>
                )}
            </Sections>
            <Section>
                <div>
                    <LoggedInUser
                        userId={user._id}
                        avatar={user.avatar}
                        name={user.name}
                        email={user.email}
                        followers={user.followers}
                        following={user.following}
                        posts={user.posts}
                    />
                </div>
            </Section>
        </Container>

    )
}

export default Home
const Container = styled.div`
display:grid;
grid-template-columns: repeat(1,minmax(0,1fr));
  
  @media(min-width: 760px){
    grid-template-columns: repeat(3,minmax(0,1fr));
    max-width: 72rem;
  }
  @media(min-width: 640px){
    max-width: 48rem;
  }
  @media(min-width: 1290px){
    max-width: 80rem;
  }
  margin: 0 auto;
`
const Sections = styled.div`
grid-column: span 2 /span 2;
  margin: 0 auto;
	width: 80%;
`
const Section = styled.div`
  margin: 0 auto;
  @media (min-width: 1280px) {

  }
  @media (min-width: 760px) {

  }
`