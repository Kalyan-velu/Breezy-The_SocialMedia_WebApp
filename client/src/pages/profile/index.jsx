import SettingsIcon from '@mui/icons-material/Settings';
import {Button, Dialog, DialogContent, DialogTitle, Typography} from "@mui/material";
import Icon from "@mui/material/Icon"
import {useTheme} from "@mui/material/styles";
import React, {Suspense, useEffect, useState} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {useNavigate, useParams} from "react-router-dom";
import {Link} from "../../common/components/link"
import Loader from "../../common/components/loader";
import Post from "../../common/components/post";
import {accessChat, setSelectedChat} from "../../features/action/chatAction.js";
import {fetchAgain, followUser, getUserProfile} from "../../features/action/userAction";
import User from "./components/User.jsx";
import {AccountDetails, List, StyledAvatar, StyledBox} from "./styles";

const gearStyle = {
    display: "flex"
}
const OtherProfiles = () => {
    const theme = useTheme()
    const params = useParams()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [followersToggle, setFollowersToggle] = useState(false);
    const [followingToggle, setFollowingToggle] = useState(false);
    const [following, setFollowing] = useState(false);
    const {user, posts} = useSelector(state => state.getUserProfile)
    const {user: me} = useSelector(({app}) => app)
    const {error: followError, message: followMessage} = useSelector(({follow}) => follow)
    const {chat} = useSelector(state => state.chats)
    const {fetch} = useSelector(({fetch}) => fetch)
    const {isAuthenticated} = useSelector(({app}) => app)

    React.useEffect(() => {
        function isLoggedIn() {
            isAuthenticated === false ? navigate("/") : null
        }

        isLoggedIn()
    }, [])
    useEffect(() => {
        dispatch(getUserProfile(params.id))
    }, [fetch, params.id])


    function followHandle() {
        setFollowing(!following)
        dispatch(followUser(params.id))
        dispatch(fetchAgain())
    }

    useEffect(() => {
        if (followError) {
            setFollowing(false)
        }

    }, [followError])

    useEffect(() => {
        if (user) {
            user.followers.map(follower => {
                if (follower?._id === me?._id) {
                    return setFollowing(true)
                }
            })
        } else {
            return setFollowing(false)
        }
    }, [user, me])


    async function directMessage() {
        await dispatch(accessChat(params.id))
        await dispatch(setSelectedChat(chat))
        navigate(`/chat/${chat._id}`)
    }

    return (
        <>
            {user &&
                (<>
                    <StyledBox>
                        {(params.id === me._id) && <div style={gearStyle}>
                            <Link to={`/user/${me._id}/settings`}>
                                <Icon>
                                    <SettingsIcon/>
                                </Icon>
                            </Link>
                        </div>}
                        <StyledAvatar src={user.avatar.url} alt={user.name} title={user.name}/>
                        {(params.id === me._id) ? null :
                            <>
                                <List>
                                    <Button onClick={followHandle}
                                            style={{color: following ? '#ff0000' : theme.palette.text.primary,}}>
                                        {following ? 'Unfollow' : 'Follow'}
                                    </Button>
                                </List>
                            </>}
                        {(params.id === me._id) ? null : <> <List>
                            <Button onClick={directMessage} sx={{color: theme.palette.text.primary}}>message</Button>
                        </List>
                        </>
                        }
                        <List>
                            <Typography fontWeight={700} sx={{fontSize: '1.4rem'}}> {user.name} </Typography>
                        </List>
                        <List>
                            <Typography fontWeight={300}
                                        sx={{fontSize: '1.1rem'}}> {user.email} </Typography>
                        </List>
                        <AccountDetails>
                            <Typography
                                sx={{
                                    fontWeight: '500',
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
                                        color: theme.palette.text.primary,
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
                                        color: theme.palette.text.primary,
                                        fontSize: '0.5 rem',
                                        paddingRight: '10px',
                                    }}
                                >
                                    {user.followers.length} Followers
                                </Typography>
                            </Button>
                        </AccountDetails>
                    </StyledBox>
                    <section>
                        {posts && posts?.length > 0 ? (
                            posts?.map((post) => (
                                <Suspense key={post?._id} fallback={<Loader/>}>

                                    <Post
                                        key={post?._id}
                                        ownerId={post?.owner._id}
                                        ownerName={user?.name}
                                        ownerAvatar={user?.avatar?.url}
                                        caption={post?.caption}
                                        postImage={post?.image.url}
                                        likes={post?.likes}
                                        comments={post?.comments}
                                        createdAt={post?.createdAt}
                                        postId={post?._id}
                                        isAccount={params.id === me._id}
                                        isDelete={params.id === me._id}
                                    />
                                </Suspense>))
                        ) : (
                            <Typography variant="h6" color="textSecondary" align="center">
                                No posts to show
                            </Typography>
                        )}

                    </section>
                </>)}

            <Dialog fullWidth maxWidth={'xs'} open={followersToggle}
                    onClose={() => setFollowersToggle(!followersToggle)}>
                <DialogTitle sx={{textAlign: 'center'}}>
                    <Typography fontWeight={500} variant="h5">Followers</Typography>
                </DialogTitle>
                <DialogContent>
                    <div>
                        {user && user.followers.length > 0 ? user.followers.map((follower) => (
                                <User
                                    key={follower._id}
                                    userId={follower._id}
                                    name={follower.name}
                                    avatar={follower.avatar.url}
                                />
                            )
                        ) : (
                            <Typography>You have no followers</Typography>
                        )}
                    </div>
                </DialogContent>

            </Dialog>
            <Dialog fullWidth maxWidth={'xs'} open={followingToggle}
                    onClose={() => setFollowingToggle(!followingToggle)}>
                <DialogTitle sx={{textAlign: 'center'}}>
                    <Typography fontWeight={500}>Followings</Typography>
                </DialogTitle>
                <DialogContent>
                    <div>
                        {user && user.following.length > 0 ? user.following.map((following) => (
                                <User
                                    key={following._id}
                                    userId={following._id}
                                    name={following.name}
                                    avatar={following.avatar.url}
                                />
                            )
                        ) : null}
                        {user && user.following.length === 0 && (
                            <Typography>{user.name} have no followings</Typography>
                        )}
                    </div>
                </DialogContent>
            </Dialog>

        </>
    )
}
export default OtherProfiles