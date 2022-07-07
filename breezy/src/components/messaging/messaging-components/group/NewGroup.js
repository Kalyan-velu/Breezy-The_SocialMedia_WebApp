import * as React from 'react';
import Box from '@mui/system/Box';
import {styled} from '@mui/system'
import ModalUnstyled from '@mui/base/ModalUnstyled';
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import TextField from "@mui/material/TextField";

import Typography from "@mui/material/Typography";

import LoadingButton from "@mui/lab/LoadingButton";
import Button from "@mui/material/Button";

import {Tooltip} from "@mui/material";
import UserBadgeItem from "../../chat-loading/lists/UserBadgeItem";
import UserListItem from "../../chat-loading/lists/UserList";
import {chatInstance} from "../../../../config/axios";
import {searchUsers} from "../../../../features/action/userAction";
import {ChatState} from "../../context/ChatProvider";
import {useDispatch, useSelector} from "react-redux";


const StyledModal = styled( ModalUnstyled )`
  position: fixed;
  z-index: 1300;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Backdrop = styled( 'div' )`
  z-index: -1;
  position: fixed;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  -webkit-tap-highlight-color: transparent;
`;

const style = {
	width: 400,
	bgcolor: '#fff',
	p: 2,
	px: 4,
	pb: 3,
};

export default function NewGroup() {
	const dispatch=useDispatch()
	const [ open, setOpen ] = React.useState( false );
	const [ groupName, setGroupName ] = React.useState( '' );
	const [ selectedUsers, setSelectedUsers ] = React.useState( [] );
	const [ search, setSearch ] = React.useState( '' );
	const [ loading, setLoading ] = React.useState( false );
	const [ searchResults, setSearchResults ] = React.useState( [] );
	const {users}=useSelector(state=>state.search)
	const {user, chats, setChats} = ChatState()

	const handleOpen = () => setOpen( true );
	const handleClose = () => setOpen( false );

	/*
	* Handling Search
	*/
	async function handleSearch(query) {
		setSearch( query )
		if (!query) {
			console.log( 'No Query' )
		}
		try {
			setLoading( true )
			dispatch(searchUsers(search))
			setLoading( false )
			setSearchResults( users )
		} catch (e) {
			console.log( `HandleSearch:${e}` )
		}
	}

	/*
	*Submitting Users To Create a New Group Chat
	*/
	async function handleSubmit() {
		if (!groupName || !selectedUsers) {
		}
		try {
			const response = await chatInstance.post( `/group`, {
				groupname: groupName,
				users: JSON.stringify( selectedUsers.map( (u) => u._id ) )
			}, {headers: {Authorization: `Bearer ${user.token}`}} )
			setChats( [ response.data, ...chats ] )
			console.log( `Chats:${chats}` )
		} catch (e) {
			console.log( `HandleSubmit:${e}` )
		}
	}

	/*
	Handling Deleting Chips
	*/
	function handleDelete(detUser) {
		setSelectedUsers( selectedUsers.filter( sel => sel._id !== detUser._id ) )
	}

	/*
	*Handling SearchResults
	*/
	function handleGroup(userToAdd) {
		if (selectedUsers.includes( userToAdd )) {
			console.log( 'Already Added' )
		}
		setSelectedUsers( [ ...selectedUsers, userToAdd ] )
	}

	return (
		<div>
			<Tooltip
				title={"Create Group"}>
				<Button
					color={"inherit"}
					onClick={handleOpen}
					variant={'outlined'}
					startIcon={<AddOutlinedIcon/>}
					disableElevation
				>
					New Group
				</Button>
			</Tooltip>
			<StyledModal
				aria-labelledby="unstyled-modal-title"
				aria-describedby="unstyled-modal-description"
				open={open}
				onClose={handleClose}
				BackdropComponent={Backdrop}
			>
				<Box sx={style}>


					<Typography
						varient={"h1"}
						id="unstyled-modal-title"
					>
						<b>Create New Group</b>
					</Typography>
					<Box
						display="flex"
						flexDirection={"column"}
					>
						<TextField
							margin={"dense"}
							variant={"outlined"}
							label={"Group Name"}
							value={groupName}
							onChange={(e) => setGroupName( e.target.value )}
						/>
						<TextField
							margin={"dense"}
							variant={"outlined"}
							label={"Add Users "}
							value={search}
							onChange={(e) => handleSearch( e.target.value )}
						/>
					</Box>


					<Box
						display={'flex'}
						flexWrap={"wrap"}>
						{selectedUsers.map( u => (
							<UserBadgeItem
								user={u}
								key={u._id}
								handleFunction={() => handleDelete( u )}/>
						) )}
					</Box>

					{loading ? <div>Loading...</div> : (
						searchResults?.slice( 0, 4 ).map( user => (
							<UserListItem
								key={user._id}
								userId={user._id}
								avatar={user.avatar.url}
								name={user.name}
								handleFunction={() => handleGroup( user )}
							/>
						) )
					)

					}

					<Box
						display="flex"
						justifyItems={"flex-end"}
					>
						<div style={{flexGrow: "1"}}/>
						<LoadingButton
							loading={loading}
							onClick={handleSubmit}
						>
							Create
						</LoadingButton>
					</Box>
				</Box>
			</StyledModal>
		</div>
	);
}