import {Avatar, Typography} from "@mui/material";
import React, {Suspense, useEffect, useState} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {addCommentOnPost, likePost} from "../../../features/action/postAction.js";
import {fetchAgain as fetch} from "../../../features/action/userAction.js";
import useTime from "../../../hooks/useTime.jsx";
import {Link} from "../link";
import Loader from "../loader"
import {Container, List, PostDetails, PostFooterFirst, PostHeader, PostImg, PostText} from "./styles";

const DeleteAndEdit = React.lazy(() =>
  import("./post-functions/deletepost/DeleteAndEdit"));
const PostLikes = React.lazy(() =>
  import("./post-functions/likes/PostLikes"));
const CommentComponent = React.lazy(() =>
  import("./post-functions/comment/CommentDialog"));
const CommentShort = React.lazy(() =>
  import("./post-functions/comment/CommentShort"));

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
  const [commentValue, setCommentValue] = useState("");
  const [commentToggle, setCommentToggle] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [captionValue, setCaptionValue] = useState('');
  const {loading} = useSelector((state) => state.like)
  const {user} = useSelector(({app}) => app)
  const open = Boolean(anchorEl);

  const time = useTime(createdAt);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLike = async () => {
    setLiked(!liked);
    await dispatch(likePost(postId));
    dispatch(fetch())
  }

  const addCommentHandler = async (e) => {
    e.preventDefault();
    await dispatch(addCommentOnPost(postId, commentValue));
    dispatch(fetch())
  };

  useEffect(() => {
    likes.forEach(item => {
      if (item._id === user._id) {
        setLiked(true)
      }
    })
  }, [likes, user._id]);


  return (
    <Suspense fallback={<Loader/>}>
      <Container key={postId}>
        <div key={ownerId}>
          <PostHeader>
            <List>
              <Avatar
                title={ownerName}
                src={ownerAvatar}
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
                  {time}
                </Typography>
              </Link>
            </List>
            {isAccount ?
              <DeleteAndEdit
                open={open}
                handleClick={handleClick}
                handleClose={handleClose}
                anchorEl={anchorEl}
                setAnchorEl={setAnchorEl}
                captionValue={captionValue}
                setCaptionValue={setCaptionValue}
                postId={postId}
                loading={loading}
              />
              : null
            }
          </PostHeader>
          <PostHeader>
            <div style={{flexGrow: 0.3}}/>
            <List>
              <Typography noWrap>
                {caption}
              </Typography>
            </List>
            <div style={{flexGrow: 1}}/>
            <div style={{flexGrow: 1}}/>
          </PostHeader>


          {postImage ? (
            <PostImg>
              <img src={postImage} loading={"lazy"} className={"img"} alt={"post"}/>
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


          <PostFooterFirst>
            <div>
              <PostLikes
                key={postId}
                likes={likes}
                likesUser={likesUser}
                setLikesUser={setLikesUser}
                liked={liked}
                handleLike={handleLike}
                postId={postId}
              />
            </div>
            <div>
              <CommentComponent
                key={postId}
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
              {comments.length > 0 ? (
                <CommentShort

                  key={comments[0]._id}
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
        </div>
      </Container>
    </Suspense>
  )
}
export default Post