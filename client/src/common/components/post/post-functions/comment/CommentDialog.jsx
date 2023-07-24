import ChatBubbleOutlined from "@mui/icons-material/ChatBubbleOutlined";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import CommentCard from "./CommentCard";

const CommentComponent = ({
                            postId,
                            comments,
                            isAccount,
                            commentValue,
                            commentToggle,
                            addCommentHandler,
                            setCommentToggle,
                            setCommentValue,
                          }) => {
  return (
    <div>
      <Tooltip title={"Add Comment"}>
        <IconButton onClick={() => setCommentToggle(!commentToggle)}>
          <ChatBubbleOutlined/>
        </IconButton>
      </Tooltip>

      <Button
        disableFocusRipple={true}
        disableTouchRipple={true}
        disableElevation={true}
        style={{textTransform: 'none'}}
        disableRipple={true}
        disabled={comments.length === 0}
        onClick={() => setCommentToggle(true)}
      >
        <Tooltip title={"View Comments"}>
          <Typography fontWeight={200}>{comments.length} comments</Typography>
        </Tooltip>
      </Button>
      <Dialog maxWidth={'xs'} fullWidth open={commentToggle} onClose={() => setCommentToggle(!commentToggle)}>
        <DialogTitle>Comments</DialogTitle>
        <DialogContent>
          {comments.length > 0 ? (comments?.map((item) => (
              <CommentCard
                key={item?._id}
                userId={item?.user._id}
                name={item?.user.name}
                avatar={item?.user?.avatar?.url}
                comment={item?.comment}
                commentId={item?._id}
                postId={postId}
                item={item}
                isAccount={isAccount}
              />
            ))
          ) : (
            <Typography>No Comments Yet</Typography>
          )}
        </DialogContent>

        <form action={""} onSubmit={addCommentHandler}>
          <TextField id="outlined-basic" variant="standard"
                     value={commentValue}
                     onChange={(e) => setCommentValue(e.target.value)}
                     rows={1}
                     sx={{width: '100%'}}
                     inputProps={{
                       maxLength: 100,
                     }}
                     placeholder={"Add a comment..."}
          />
          <Button type={"submit"} variant="contained" color="primary"
                  disabled={commentValue.length === 0}
                  sx={{width: '100%'}}>
            Comment
          </Button>
        </form>

      </Dialog>

    </div>
  )
}
export default CommentComponent;