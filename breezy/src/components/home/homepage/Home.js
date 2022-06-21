import React, {useEffect} from 'react'
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import User from "../../contact/User";
import Post from "../../post/Post";
import {getAllUsers, getFollowingPosts} from "../../../features/action/userAction";
import Loader from "../../loader/Loader";
import {IconButton, Typography} from "@mui/material";
import {Logout} from "@mui/icons-material";


function Home() {
    const dispatch = useDispatch();
    const {loading, posts, error} = useSelector((state) => state.postOfFollowing);
    const user = useSelector((state) => state.user);
    const {users, loading: loadingUsers, error: errorUsers} = useSelector((state) => state.allUsers);


    useEffect(() => {
        dispatch(getFollowingPosts())
        dispatch(getAllUsers())
    }, []);


    return loading === true || loadingUsers === true ? (
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
                    <Typography>
                        All Users
                    </Typography>
                    {users && users.length > 0 ? (
                        users.map((user) => (
                            <User
                                key={user._id}
                                userId={user._id}
                                name={user.name}
                                avatar={user.avatar}
                            />))) : (
                        <Typography variant="h6" color="textSecondary" align="center">
                            No users to show
                        </Typography>
                    )}
                </div>
                <div>
                    <IconButton>
                        <Logout/>
                    </IconButton>
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
  @media(min-width: 1280px){
    position: fixed;
	  display: inline;
    right:1px;
	  width: 20%;
  }
  @media(min-width: 760px){
	
    grid-column: span 1/span 1;
  }
  
`