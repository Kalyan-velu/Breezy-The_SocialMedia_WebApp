import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import {alpha, styled} from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import {SearchTwoTone} from "@mui/icons-material";
import {searchUsers} from "../../../features/action/userAction";
import {useDispatch, useSelector} from "react-redux";
import ChatLoading from "../chat-loading/ChatLoading";
import UserListItem from "../chat-loading/lists/UserList";
import {IconButton} from "@mui/material";
import {StyledButton} from "../../styledComponents/PostModalStyled";
import SearchIcon from "@mui/icons-material/Search";
import AddBoxIcon from '@mui/icons-material/AddBox';
import {accessChat, setSelectedChat} from "../../../features/action/chatAction";


const Search = styled( 'div' )( ({theme}) => ({
	position: 'relative',
	borderRadius: "30px",
	backgroundColor: alpha( theme.palette.common.white, 0.70 ),
	'&:hover': {
		backgroundColor: alpha( theme.palette.common.white, 1 ),
	},
	marginLeft: 0,
	width: '100%',
	[theme.breakpoints.up( 'sm' )]: {
		marginLeft: theme.spacing( 1 ),
		width: 'auto',
	},
}) );

const SearchIconWrapper = styled( 'div' )( ({theme}) => ({
	padding: theme.spacing( 0, 2 ),
	height: '100%',
	position: 'absolute',
	pointerEvents: 'none',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
}) );

const StyledInputBase = styled( InputBase )( ({theme}) => ({
	color: 'inherit',
	'& .MuiInputBase-input': {
		padding: theme.spacing( 1, 1, 1, 0 ),
		// vertical padding + font size from searchIcon
		paddingLeft: `calc(1em + ${theme.spacing( 4 )})`,
		transition: theme.transitions.create( 'width' ),
		width: '100%',
		[theme.breakpoints.up( 'sm' )]: {
			width: '100%',
		},
		borderRadius: "30px",
	},
}) );

const style = {
	backgroundColor: "#ECF1F2",
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 400,
	height: 250,
	border: '1px solid #5325g',
	borderRadius: "8px",
	boxShadow: 24,
	p: 4,
	overflow: "auto"
};


export default function SearchModal(props) {
	const [ open, setOpen ] = React.useState( false );
	const dispatch=useDispatch()
	const {users}=useSelector(state=>state.search)
	const [ search, setSearch ] = React.useState( '' );
	const {chat,loading}=useSelector(state=>state.chats)


	const handleOpen = () => setOpen( true );
	const handleClose = () => {
		dispatch({
			type:'clearUsers'
		})
		setOpen( false )};

	const handleSearch = async () => {
		if (!search) {
			props.setOpenE( true )
			props.setError( "Please Enter Something" )
			setOpen( false )
		}
		dispatch(searchUsers(search))
	}
	const handleAccessChat = async ({user}) => {
		const userId=user._id
		await dispatch(accessChat(userId))
		await dispatch(setSelectedChat(chat))
	}

	return (
		<div>
			<IconButton onClick={handleOpen}>
					<SearchTwoTone />
			</IconButton>
			<Modal keepMounted open={open} onClose={handleClose} aria-labelledby="keep-mounted-modal-title" aria-describedby="keep-mounted-modal-description">
				<Box sx={style}>
					<Search>
						<SearchIconWrapper><AddBoxIcon/></SearchIconWrapper>
						<StyledInputBase value={search} onChange={(e) => {setSearch( e.target.value )}} placeholder="Search or start a new chat..." inputProps={{'aria-label': 'search'}}/>
					</Search>
					<div>
						<StyledButton disabled={loading} onClick={handleSearch} endIcon={<SearchIcon />}>
							{loading?"Searching..":"Search"}
						</StyledButton>
					</div>
					<Box sx={{width: "300px"}}>
						{loading ? (<ChatLoading/>) : (users?.map((user) => (<UserListItem onClose={handleClose} key={user._id} userId={user._id} name={user.name} avatar={user.avatar.url} handleFunction={()=>handleAccessChat({user})}/>)))}
					</Box>
				</Box>
			</Modal>
		</div>
	);
}