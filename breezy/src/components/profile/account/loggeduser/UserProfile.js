import React, {Suspense, useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Button, Dialog, DialogContent, DialogTitle, Typography} from "@mui/material";
import './user.css'
import {getMyPosts} from "../../../../features/action/userAction";
import { Sections} from "../../../styledComponents/HomeStyled";
import {
    StyledBox,
    AccountDetails,
    List,
    StyledAvatar, StyledContainer, StyledBoxUpdate, StyledBoxNewPost
} from "../../../styledComponents/UserAccountStyled";
import Loader from "../../../styledComponents/error-handlers/Loader";
import User from "../../User";
import {useNavigate} from "react-router-dom";
import {ErrorBoundary} from "react-error-boundary";
import Error from "../../../styledComponents/error-handlers/Error";
const UpdateProfile =React.lazy(()=>
    import( "../updateprofile/UpdateProfile"));
const Modal =React.lazy(()=>
    import( "../../../post/NewPost/NewPostModal"));
const Post=React.lazy(()=>
    import( "../../../post/Post"));

const UserProfile = () => {
    const [errorAlert, setErrorAlert] = React.useState('')
    const [messageAlert, setMessageAlert] = React.useState('')
    const [alertOpen, setAlertOpen] = useState(false);
    const [followersToggle,setFollowersToggle] =useState(false);
    const [followingToggle,setFollowingToggle] =useState(false);
    const {user} = useSelector(state => state.user)
    const {loading, posts, error} = useSelector((state) => state.myPosts);
    const {error:likeError, message} = useSelector((state) => state.like)
    const {fetch}=useSelector((state)=>state.fetch)
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const[fetchAgain,setFetchAgain] = useState(false)

    const handleAlertClose = () => {
        setAlertOpen(false);
    };
    useEffect(() => {
        dispatch(getMyPosts())
        console.log("Fetching Again....")
    }, [dispatch,fetch])

    useEffect(() => {
        if (likeError) {
            setAlertOpen(true)
            setErrorAlert(likeError)
        }
        if (message) {
            setAlertOpen(true)
            setMessageAlert(message)
        }
    }, [error, message]);

    return (
        <ErrorBoundary fallback={<Error/>}>
        <StyledContainer>
            <StyledBox>
                        <StyledAvatar
                            src={user.avatar.url}
                            alt={user.name}
                            title={user.name}
                            onClick={() => navigate(`/user/${user._id}/profile`)}
                        />
                        <List>
                            <Typography
                                fontWeight={700}
                                sx={{
                                    fontSize: '1.4rem'
                                }}
                            >
                                {user.name}
                            </Typography>
                        </List>
                        <List>
                            <Typography
                                fontWeight={300}
                                sx={{
                                    color: '#111',
                                    fontSize: '1.1rem',
                                }}
                            >
                                {user.email}
                            </Typography>
                        </List>

                        <AccountDetails>
                                <Typography
                                    sx={{
                                        fontWeight:'500',
                                        color: '#111',
                                        fontSize: '0.5 rem',
                                        paddingRight: '10px',
                                    }}
                                >
                                    {user.posts.length} Posts
                                </Typography>


                            <Button onClick={() => setFollowingToggle(!followingToggle)}>
                                <Typography
                                    fontWeight={500}
                                    sx={{
                                        color: '#111',
                                        fontSize: '0.5 rem',
                                    }}
                                >
                                    {user.following.length} Following
                                </Typography>
                            </Button>
                            <Button onClick={() => setFollowersToggle(!followersToggle)}>
                                <Typography
                                    fontWeight={500}
                                    sx={{
                                        color: '#111',
                                        fontSize: '0.5 rem',
                                    }}
                                >
                                    {user.followers.length} Followers
                                </Typography>
                            </Button>
                            </AccountDetails>

            </StyledBox>
            <StyledBoxUpdate>
                <Suspense fallback={<Loader />}>
                    <UpdateProfile
                        fetch={fetch}
                    />
                </Suspense>
            </StyledBoxUpdate>
            <StyledBoxNewPost>
                            <Modal
                                setFetchAgain={setFetchAgain}
                                fetchAgain={fetchAgain}
                            />
            </StyledBoxNewPost>
            <Sections>
                {posts && posts.length > 0 ? (
                    posts.map((post) => (
                        <Suspense key={post._id} fallback={<Loader/>}>
                            {loading ? <Loader/> :
                            <Post
                                key={post._id}
                                ownerId={post.owner._id}
                                ownerName={user.name}
                                ownerAvatar={user.avatar.url}
                                caption={post.caption}
                                postImage={post.image.url}
                                likes={post.likes}
                                comments={post.comments}
                                createdAt={post.createdAt}
                                postId={post._id}
                                isAccount={true}
                                isDelete={true}
                                setFetchAgain={setFetchAgain}
                                fetchAgain={fetchAgain}
                            />}
                        </Suspense>))
                ) : (
                    <Typography variant="h6" color="textSecondary" align="center" >
                        No posts to show
                    </Typography>
                )}
            </Sections>

            <Dialog fullWidth maxWidth={'xs'} open={followersToggle} onClose={() => setFollowersToggle(!followersToggle)}>
               <DialogTitle sx={{textAlign:'center'}}>
                   <Typography fontWeight={500} variant="h5">Followers</Typography>
               </DialogTitle>
                <DialogContent>
                    <div>
                    {user && user.followers.length > 0? user.followers.map((follower) => ((
                                <User
                                    key={follower._id}
                                    userId={follower._id}
                                    name={follower.name}
                                    avatar={follower.avatar.url}
                                />
                            ))
                        )  :  (
                            <Typography >You have no followers</Typography>
                        )}
                </div>
                </DialogContent>

            </Dialog>
            <Dialog fullWidth maxWidth={'xs'} open={followingToggle} onClose={() => setFollowingToggle(!followingToggle)}>
                <DialogTitle sx={{textAlign:'center'}}>
                    <Typography fontWeight={500} variant="h5">Followings</Typography>
                </DialogTitle>
                <DialogContent>
                    <div>
                    {user && user.following.length > 0? user.following.map((following) => ((
                                <User
                                    key={following._id}
                                    userId={following._id}
                                    name={following.name}
                                    avatar={following.avatar.url}
                                />
                            ))
                        )  :  (
                            <Typography>You have not following anyone</Typography>
                        )}
                </div>
                </DialogContent>
            </Dialog>
        </StyledContainer>
        </ErrorBoundary>

    )
}
export default UserProfile