import React, {useEffect, Suspense} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {getFollowingPosts} from "../../../features/action/userAction";
import Loader from "../../styledComponents/error-handlers/Loader";
import {Typography} from "@mui/material";
import {Container, Section, Sections} from "../../styledComponents/HomeStyled";
import Post from "../../post/Post";
import {ErrorBoundary} from "react-error-boundary";
import Error from "../../styledComponents/error-handlers/Error";


const LoggedInUser=React.lazy(()=>
    import( "../../profile/account/LoggedInUser"));


function Home() {
    const dispatch = useDispatch();
    const [fetchAgain, setFetchAgain] = React.useState(false);
    const {loading, posts} = useSelector((state) => state.postOfFollowing);
    const {user} = useSelector(state => state.user)


    useEffect(() => {
        dispatch(getFollowingPosts())
    }, [fetchAgain,dispatch]);


    return loading === true ? (
        <Loader/>
    ) : (
        <Container>
            <Section>
                <div>
                    <ErrorBoundary fallback={<Error/>}>
                    <Suspense fallback={<Loader/>}>
                        <LoggedInUser
                            userId={user?._id}
                            avatar={user?.avatar?.url}
                            name={user?.name}
                            email={user?.email}
                            followers={user?.followers}
                            following={user?.following}
                            posts={user?.posts}
                        />
                    </Suspense>
                    </ErrorBoundary>
                </div>

            </Section>
            <Sections style={{
                scrollbarWidth:'none'
            }}>
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
                            setFetchAgain={setFetchAgain}
                            fetchAgain={fetchAgain}
                        />
                        ))
                ) : (
                    <Typography variant="h6" color="textSecondary" align="center" >
                        No posts to show
                    </Typography>
                )}
            </Sections>
        </Container>

    )
}

export default Home