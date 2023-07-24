import {useTheme} from "@mui/material/styles"
import Typography from "@mui/material/Typography";
import React from 'react'
import {Link} from "../../../link";

const CommentShort = ({comments,}) => {
  const theme = useTheme()

  return (
    <div style={{color: theme.palette.text.primary}} className={"comment-short"}>
      <Typography>View {comments.length} comments</Typography>
      {comments.length > 0 ? (comments.slice(0, 2).map((item) => (
        <div className={'list'} key={item.user._id}>
          <Link to={`/user/${item.user._id}`}>
            <div className={'user-details'}>
              <Typography fontWeight={500}>{item.user.name}</Typography>
            </div>
          </Link>
          <div className={'user-details'}>
            <Typography
              fontWeight={200}
              fontFamily={'Popins'}
            >
              {item.comment}
            </Typography>
          </div>
        </div>
      ))) : null}
    </div>
  )
}
export default CommentShort