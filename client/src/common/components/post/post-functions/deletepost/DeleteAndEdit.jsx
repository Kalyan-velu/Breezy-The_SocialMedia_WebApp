import Delete from '@mui/icons-material/Delete';
import Edit from '@mui/icons-material/Edit';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Update from '@mui/icons-material/Update';
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from '@mui/material/MenuItem';
import {alpha, styled as muiStyled} from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import React from 'react'
import {useDispatch} from "react-redux";
import {deletePost, updateCaption} from "../../../../../features/action/postAction.js";
import {fetchAgain} from "../../../../../features/action/userAction.js";

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

const DeleteAndEdit = ({
                         loading,
                         postId,
                         open,
                         handleClick,
                         handleClose,
                         anchorEl,
                         captionValue,
                         setCaptionValue
                       }) => {
  const [captionToggle, setCaptionToggle] = React.useState(false);
  const dispatch = useDispatch();
  const updateCaptionHandler = (e) => {
    e.preventDefault()
    dispatch(updateCaption(captionValue, postId));
    dispatch(fetchAgain())
    handleClose();
  }
  const deleteHandler = () => {
    dispatch(deletePost(postId));
    dispatch(fetchAgain())
  }

  return (
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
        <MenuItem onClick={deleteHandler} disableRipple>
          {loading ? (<CircularProgress/>) : (<Delete/>)} {
          loading ? 'Deleting...' : 'Delete'
        }
        </MenuItem>
        <MenuItem onClick={() =>
          handleClose && setCaptionToggle(!captionToggle)} disableRipple>
          <Edit/>
          Edit
        </MenuItem>
      </StyledMenu>
      <Dialog maxWidth={'xs'} fullWidth open={captionToggle} onClose={() => setCaptionToggle(!captionToggle)}>
        <DialogTitle sx={{textAlign: 'center',}}>Update Caption</DialogTitle>
        <form onSubmit={updateCaptionHandler}>
          <TextField id="outlined-basic" variant="standard"
                     value={captionValue}
                     onChange={(e) => setCaptionValue(e.target.value)}
                     rows={1}
                     fullWidth
                     inputProps={{
                       maxLength: 100,
                     }}
                     placeholder={"Caption Here..."}
          />
          <Button type={"submit"} variant="contained" color="primary"
                  fullWidth
                  disabled={captionValue.length === 0}
                  endIcon={<Update/>}
          >
            Update Caption
          </Button>
        </form>

      </Dialog>

    </div>
  )
}
export default DeleteAndEdit