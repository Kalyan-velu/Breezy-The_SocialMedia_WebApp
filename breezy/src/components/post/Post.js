import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import {
    alpha,
    Avatar,
    Button,
    Dialog,
    DialogContent,
    DialogTitle,
    Divider,
    IconButton,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Snackbar,
    Stack,
    styled as muiStyled,
    Tooltip,
    Typography
} from "@mui/material";
import {Link} from "react-router-dom";
import {DeleteForever, Edit, Favorite, FavoriteBorder,} from "@mui/icons-material";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {useDispatch, useSelector} from "react-redux";
import {addCommentOnPost, likePost} from "../../features/action/postAction";
import {Alert} from "@mui/lab";
import {getFollowingPosts} from "../../features/action/userAction";
import {pink} from "@mui/material/colors";
import CommentComponent from "./comment/CommentDialog";
import CommentShort from "./comment/CommentShort";


const ITEM_HEIGHT = 48;

const StyledMenu = muiStyled((props) => (
    <Menu
        elevation={0}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
        }}
        {...props}
    />
))(({theme}) => ({
    '& .MuiPaper-root': {
        borderRadius: 6,
        marginTop: theme.spacing(1),
        minWidth: 180,
        color:
            theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
        boxShadow:
            'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
        '& .MuiMenu-list': {
            padding: '4px 0',
        },
        '& .MuiMenuItem-root': {
            '& .MuiSvgIcon-root': {
                fontSize: 18,
                color: theme.palette.text.secondary,
                marginRight: theme.spacing(1.5),
            },
            '&:active': {
                backgroundColor: alpha(
                    theme.palette.primary.main,
                    theme.palette.action.selectedOpacity,
                ),
            },
        },
    },
}));

const Post = ({
                  postImage,
                  caption,
                  ownerId,
                  ownerName,
                  ownerAvatar,
                  likes = {},
                  comments = {},
                  createdAt,
                  postId,
                  isDelete = false,
                  isAccount = false,
              }) => {


    const dispatch = useDispatch();
    const [liked, setLiked] = useState(false);
    const [likesUser, setLikesUser] = useState(false);
    const [commentValue,setCommentValue] = useState("");
    const [commentToggle,setCommentToggle] = useState(false);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [errorAlert, setErrorAlert] = React.useState('')
    const [messageAlert, setMessageAlert] = React.useState('')
    const [alertOpen, setAlertOpen] = useState(false);
    const {error, message} = useSelector((state) => state.like)
    const {user} = useSelector(state => state.user)
    const open = Boolean(anchorEl);

    const date = new Date(createdAt);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleAlertClose = () => {
        setAlertOpen(false);
    };

    const handleLike = async () => {
        setLiked(!liked);
        await dispatch(likePost(postId));
        if (isAccount) {
            dispatch(getFollowingPosts(user._id))
        } else {
            dispatch(getFollowingPosts())
        }
    }
    const addCommentHandler = async (e) => {
        e.preventDefault();
        await dispatch(addCommentOnPost(postId,commentValue));

        if (isAccount) {
            dispatch(getFollowingPosts(user._id))
        } else {
            dispatch(getFollowingPosts())
        }
    };
    useEffect(() => {
        likes.forEach(item => {
            if (item._id === user._id) {
                setLiked(true)
            }
        })
    }, [likes, user._id]);


    useEffect(() => {
        if (error) {
            setAlertOpen(true)
            setErrorAlert(error)
            dispatch({type: "clearError"})
        }
        if (message) {
            setAlertOpen(true)
            setMessageAlert(message)
            dispatch({type: "clearMessage"})
        }
    }, [error, message]);


    return (
        <Container>
            <PostHeader>
                <List>
                    <Avatar
                        title={ownerName}
                        src={`https://images.unsplash.com/photo-1644982647531-daff2c7383f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=1000&q=60`}
                        alt={ownerName}
                        sx={{
                            height: "50px",
                            width: "50px",
                        }}
                    />

                    <Link to={`/user/${ownerId}`}>
                        <Typography
                            fontWeight={700}
                        >
                            {ownerName}
                        </Typography>
                        <Typography
                            fontWeight={100}
                            sx={{
                                color: '#111',
                                fontSize: '12px',
                            }}
                        >
                            {date.toLocaleTimeString()} {date.toLocaleString('en-us', {weekday: 'long'})}, {date.getDate()} {date.toLocaleString('default', {month: 'long'})}
                        </Typography>
                    </Link>

                </List>
                {isAccount ?
                    <div>
                        <IconButton
                            aria-label="more"
                            id="long-button"
                            aria-controls={open ? 'long-menu' : undefined}
                            aria-expanded={open ? 'true' : undefined}
                            aria-haspopup="true"
                            onClick={handleClick}
                        >
                            <MoreVertIcon/>
                        </IconButton>
                        <StyledMenu
                            id="long-menu"
                            MenuListProps={{
                                'aria-labelledby': 'long-button',
                            }}
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            PaperProps={{
                                style: {
                                    maxHeight: ITEM_HEIGHT * 4.5,
                                    width: '20ch',
                                },
                            }}
                        >
                            <MenuItem onClick={handleClose} disableRipple>
                                <DeleteForever/>
                                Delete
                            </MenuItem>
                            <MenuItem onClick={handleClose} disableRipple>
                                <Edit/>
                                Edit
                            </MenuItem>
                        </StyledMenu>
                    </div>
                    : null
                }
            </PostHeader>

            <Divider sx={{my: 0.5}}/>
            {postImage ? (
                <PostImg>
                    <img src={postImage} alt={"post"}/>
                </PostImg>
            ) : (
                <PostText>
                    <Typography
                        fontWeight={700}
                        sx={{
                            fontSize: '14px',
                            lineHeight: '1.5',
                        }}>
                        {caption}
                    </Typography>
                </PostText>
            )}
            <Divider sx={{my: 0.5}}/>
            <PostFooterFirst>
                <div>
                    <Tooltip title={liked ? 'Liked' : 'Unliked'}>
                        <IconButton onClick={handleLike}>
                            {liked ? <Favorite sx={{color: pink[500]}}/> : <FavoriteBorder/>}
                        </IconButton>
                    </Tooltip>
                    <Button
                        onClick={() => {
                            setLikesUser(!likesUser)
                        }}
                        disableFocusRipple={true}
                        disableTouchRipple={true}
                        disableElevation={true}
                        style={{textTransform: 'none'}}
                        disableRipple={true}
                        disabled={likes.length === 0}
                    >
                        <Typography fontWeight={200}>{likes.length} likes</Typography>
                    </Button>

                </div>
                <div>
                    <CommentComponent
                        postId={postId}
                        comments={comments}
                        commentToggle={commentToggle}
                        setCommentToggle={setCommentToggle}
                        commentValue={commentValue}
                        setCommentValue={setCommentValue}
                        addCommentHandler={addCommentHandler}
                        isAccount={isAccount}
                    />


                </div>
            </PostFooterFirst>



            <PostDetails>
                <List>
                    <Link to={`/user/${ownerId}`}>
                        <Typography
                            fontWeight={700}
                        >
                            {ownerName}
                        </Typography>
                    </Link>
                    <Typography noWrap>
                        {caption}
                    </Typography>
                </List>
                <List>
                    {comments.length > 0 ? (
                        <CommentShort
                            postId={postId}
                            comments={comments}
                            commentToggle={commentToggle}
                            setCommentToggle={setCommentToggle}
                            commentValue={commentValue}
                            setCommentValue={setCommentValue}
                            addCommentHandler={addCommentHandler}
                            isAccount={isAccount}
                        />
                    ) : null}
                </List>

            </PostDetails>

            <Stack spacing={2} sx={{width: '100%'}}>
                <Snackbar open={alertOpen} autoHideDuration={6000} onClose={handleClose}>
                    <Alert onClose={handleAlertClose} severity="success" sx={{width: '100%'}}>
                        {messageAlert}
                    </Alert>
                </Snackbar>
            </Stack>

            <Dialog maxWidth={"md"} open={likesUser} onClose={() => setLikesUser(!likesUser)}>
                <DialogTitle>Liked By</DialogTitle>
                <DialogContent>
                    <List>
                        {likes.map((like, index) => {
                            return (
                                <Link to={`/user/${like._id}`}>
                                    <ListItem key={index}>
                                        <ListItemAvatar>
                                            <Avatar alt={like.name} src={like.avatar}/>
                                        </ListItemAvatar>
                                        <ListItemText primary={like.name}/>
                                    </ListItem>
                                </Link>
                            )
                        })}
                    </List>
                </DialogContent>
            </Dialog>


        </Container>
    )
}
export default Post

const Container = styled.div`
	width: 100%;
	border-radius: 5px;
	box-shadow: #7e879a;
	display: flex;
	flex-direction: column;
	justify-content: center;
	max-width: 714px;
	background-color: white;
	margin: 0 auto;
	padding: 15px 0;

	@media (min-width:1024px){
		margin-top: 20px;
		
	}
`
const PostHeader = styled.div`
	display: flex;
	justify-content: space-between;
	margin: 5px 10px 10px;
`
const PostDetails = styled.div`
	text-decoration: none;
	color: black;
	margin: 5px 10px 10px;
	a{
		text-decoration: none;
		color: black;
		margin: 1vmax;
	}
`
const List = styled.div`
display: flex;
align-items: center;
a {
	text-decoration: none;
  font-family: 'Poppins',sans-serif;
  margin-left: 20px;
}
`
const PostImg = styled.div`
  width: 100%;

  img {
    width: 100%;
    object-fit: contain;
  }
`
const PostText = styled.div`
    width: 100%;
    margin: 5px 10px 10px;
    text-align: center;
    font-family: 'Poppins',sans-serif;
    font-size: 14px;
    line-height: 1.5;
    color: #7e879a;
`
const PostFooterFirst = styled.div`
	display: flex;
	justify-content: space-around;
`