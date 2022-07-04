import React, {Suspense, useEffect, useState} from 'react'
import {
    AccountDetails,
    List,
    StyledAvatar,
    StyledBox,
    StyledContainer
} from "../../../styledComponents/UserAccountStyled";
import {Button, Dialog, DialogContent, DialogTitle, Typography} from "@mui/material";
import {Sections} from "../../../styledComponents/HomeStyled";
import Loader from "../../../styledComponents/loader/Loader";
import User from "../../User";
import {useDispatch, useSelector} from "react-redux";
import { useParams} from "react-router-dom";
import {followUser, getUserProfile} from "../../../../features/action/userAction";
import Post from "../../../post/Post";
import {getUserPosts} from "../../../../features/action/postAction";

const OtherProfiles = () => {
    const params=useParams()
    const [errorAlert, setErrorAlert] = React.useState('')
    const [messageAlert, setMessageAlert] = React.useState('')
    const [alertOpen, setAlertOpen] = useState(false);
    const [followersToggle,setFollowersToggle] =useState(false);
    const [followingToggle,setFollowingToggle] =useState(false);
    const [following, setFollowing] = useState(false);
    const {user} = useSelector(state => state.getUserProfile)
    const {user:me} = useSelector(state => state.user)
    const {loading, posts, error} = useSelector((state) => state.userPosts);
    const {error:likeError, message} = useSelector((state) => state.like)
    const{error:followError, message:followMessage} = useSelector((state) => state.follow)
    const dispatch=useDispatch()
    const[fetchAgain,setFetchAgain] = useState(false)

    useEffect(() => {
        dispatch(getUserPosts(params.id))
        dispatch(getUserProfile(params.id))
        console.log("Fetching Again....")
    }, [fetchAgain,setFetchAgain,params.id,dispatch])

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

    function followHandle() {
        setFollowing(!following)
        dispatch(followUser(params.id))
        setFetchAgain(!fetchAgain)
    }
    useEffect(() => {
      if (followError) {
        setFollowing(false)
          setAlertOpen(true)
          setErrorAlert(followError)
          console.log(followError)
      }
      if(followMessage) {
          console.log(followMessage)
          setAlertOpen(true)
          setMessageAlert(followMessage)
      }
    },[followError,followMessage])

    useEffect(() => {
            if(user){
                user.followers.map(follower => {
                    if(follower._id===me._id){
                        return setFollowing(true)
                    }
                })
            }else{
                return setFollowing(false)
            }
        },[user,me])


    return (
       <StyledContainer>
           {user &&
               (<>
                   <StyledBox>
                       <StyledAvatar
                           src={user.avatar.url}
                           alt={user.name}
                           title={user.name}
                       />
                       <List>
                           <Button
                               onClick={followHandle}
                               style={{
                                   color: following ? '#ff0000' : '#000000',
                               }}
                           >
                               {following?'Unfollow':'Follow'}
                           </Button>
                       </List>
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
                                       paddingRight: '10px',
                                   }}
                               >
                                   {user.followers.length} Followers
                               </Typography>
                           </Button>
                       </AccountDetails>
                   </StyledBox>
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
                                           isAccount={false}
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
               </>)}

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
    )
}
export default OtherProfiles