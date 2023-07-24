import {SearchTwoTone} from "@mui/icons-material";
import AddBoxIcon from '@mui/icons-material/AddBox';
import SearchIcon from "@mui/icons-material/Search";
import Box from '@mui/material/Box';
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import {alpha, styled} from "@mui/material/styles";
import * as React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {BootstrapDialog, StyledButton} from "../../../common/components/NewPost/PostModalStyled.jsx";
import {accessChat, setSelectedChat} from "../../../features/action/chatAction.js";
import {searchUsers} from "../../../features/action/userAction.js";
import ChatLoading from "./chat-loading/ChatLoading.jsx";
import UserListItem from "./chat-loading/lists/UserList.jsx";


const Search = styled('div')(({theme}) => ({
  position: 'relative',
  borderRadius: "30px",
  backgroundColor: alpha(theme.palette.common.white, 0.70),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 1),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({theme}) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({theme}) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '100%',
    },
    borderRadius: "30px",
  },
}));


export default function SearchModal(props) {
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch()
  const {users} = useSelector(state => state.search)
  const [search, setSearch] = React.useState('');
  const {chat, loading} = useSelector(state => state.chats)


  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    dispatch({
      type: 'clearUsers'
    })
    setOpen(false)
  };

  const handleSearch = async () => {
    if (!search) {
      setOpen(false)
    }
    dispatch(searchUsers(search))
  }
  const handleAccessChat = async ({user}) => {
    const userId = user._id
    await dispatch(accessChat(userId))
    await dispatch(setSelectedChat(chat))
  }

  return (
    <div>
      <IconButton onClick={handleOpen}>
        <SearchTwoTone/>
      </IconButton>
      <BootstrapDialog keepMounted open={open} onClose={handleClose} aria-labelledby="keep-mounted-modal-title"
                       aria-describedby="keep-mounted-modal-description">
        <Box>
          <Search>
            <SearchIconWrapper><AddBoxIcon/></SearchIconWrapper>
            <StyledInputBase value={search} onChange={(e) => {
              setSearch(e.target.value)
            }} placeholder="Search or start a new chat..." inputProps={{'aria-label': 'search'}}/>
          </Search>
          <div>
            <StyledButton disabled={loading} onClick={handleSearch} endIcon={<SearchIcon/>}>
              {loading ? "Searching.." : "Search"}
            </StyledButton>
          </div>
          <Box sx={{width: "300px"}}>
            {loading ? (<ChatLoading/>) : (users?.map((user) => (
              <UserListItem onClose={handleClose} key={user._id} userId={user._id} name={user.name}
                            avatar={user.avatar.url} handleFunction={() => handleAccessChat({user})}/>)))}
          </Box>
        </Box>
      </BootstrapDialog>
    </div>
  );
}