import * as React from 'react'
import Box from "@mui/system/Box";
import Typography from "@mui/material/Typography";
import {ArrowBackIos} from "@mui/icons-material";
import { IconButton} from "@mui/material";
import {io} from "socket.io-client";
import {ChatState} from "../../context/ChatProvider";
import {messageInstance} from "../../../../config/axios";
import {getSender, getSenderFull} from "../../../../config/ChatLog";
import ChatScroll from "../ChatScroll";
import GroupModal from "../group/GroupModal";
import UserProfileModal from "../../../profile/account/UserProfileModal";
import {ChatHeader, ChatContainer} from "../../../styledComponents/chat-styles/ChatSections";
import {BootstrapInput} from "../../../styledComponents/PostModalStyled";
import {useDispatch, useSelector} from "react-redux";
import {setSelectedChat} from "../../../../features/action/chatAction";

const ENDPOINT = "http://localhost:8000"
let socket, selectedChatCompare;
const SingleChat = ({fetchAgain, setFetchAgain}) => {
	const dispatch=useDispatch()
	const [ messages, setMessages ] = React.useState( [] );
	const [ newMessage, setNewMessage ] = React.useState( "" );
	const [ loading, setLoading ] = React.useState( false );
	const [ typing, setTyping ] = React.useState( false );
	const [ isTyping, setIsTyping ] = React.useState( false );
	const [ socketConnected, setSocketConnected ] = React.useState( false );
	const{user}=useSelector(state=>state.user)
	const{selectedChat}=useSelector(state=>state.chats)
	const { notification, setNotification} = ChatState()


	async function sendMessage(e) {
		if (e.key === "Enter" && newMessage) {
			socket.emit( "stop typing", selectedChat._id );
			try {
				setNewMessage( "" );
				const response = await messageInstance.post( '/', {
					"content": newMessage,
					"chatId": selectedChat._id
				}, )
				socket.emit( "new message", response.data )
				setMessages( [ ...messages, response.data ] )
			} catch (e) {
				console.log( e )
			}
		}

	}

	React.useEffect( () => {
		socket = io( ENDPOINT );
		socket.emit( "setup", user );
		socket.on( "connected", () => setSocketConnected( true ) )
		socket.on( 'typing', () => setIsTyping( true ) )
		socket.on( 'stop typing', () => setIsTyping( false ) )
	}, [] )

	React.useEffect( () => {
		async function fetchMessages() {
			if (!selectedChat) {
				return console.log( "No Selected Chat" )
			}

			try {
				setLoading( true )
				const response = await messageInstance.get( `/${selectedChat._id}`,
					{
						headers: {
							"Authorization": `Bearer ${user.token}`
						}
					} )
				console.log( response.data )
				setMessages( response.data )
				setLoading( false )

				socket.emit( "join chat", selectedChat._id )
			} catch (e) {
				console.log( e )
				setLoading( false )
			}
		}
		// eslint-disable-next-line
		fetchMessages();
		selectedChatCompare = selectedChat;
	}, [ selectedChat ] );

	React.useEffect( () => {
		socket.on( 'message received', (newMessageReceived) => {
			if (!selectedChatCompare || selectedChatCompare._id !== newMessageReceived.chat._id) {
				if (!notification.includes( newMessageReceived )) {
					setNotification( [ newMessageReceived, ...notification ] )
					setFetchAgain( !fetchAgain )
				}
			} else {
				setMessages( [ ...messages, newMessageReceived ] )
			}
		} )
	} );


	function typingHandler(e) {
		setNewMessage( e.target.value );

		if (!socketConnected) return;
		if (!typing) {
			setTyping( true )
			socket.emit( 'typing', selectedChat._id )
		}
		let lastTyping = new Date().getTime()
		let timeLength = 1000;
		setTimeout( () => {
			let timeNow = new Date().getTime();
			let timeDiff = timeNow - lastTyping;

			if (timeDiff >= timeLength && typing) {
				socket.emit( 'stop typing', selectedChat._id )
				setTyping( false )
			}
		}, timeLength )
	}

	return (
		<div
			style={{
				width: "100%",
				height: "100%",
			}}
		>{selectedChat ?
			(<ChatContainer>
					<ChatHeader>
						<IconButton
							onClick={() => dispatch(setSelectedChat(null))}
						>
							<ArrowBackIos/>
						</IconButton>
						<div style={{flexGrow:1}}/>
						{!selectedChat.isGroupChat ? (
							<>
								<Typography
									fontSize={"20px"}>
									{getSender( user, selectedChat.users )}
								</Typography>
							</>
						) : (
							<>
								<Typography
									fontSize={"20px"}>
									{selectedChat.chatName}
								</Typography>
							</>
						)}
						<div style={{flexGrow:1}}/>
						{!selectedChat.isGroupChat ? (
						<>
							<UserProfileModal
								user={getSenderFull( user, selectedChat.users )}
							/>
						</>
					) : (
						<>
							<GroupModal
								fetchAgain={fetchAgain}
								setFetchAgain={setFetchAgain}/>
						</>
					)}
					</ChatHeader>


						<Box
							display={"flex"}
							flexDirection={"column"}
							justifyContent={"flex-end"}
							width={"100%"}
							height={"100%"}
							p={3}
							bgcolor={"#E8E8E8"}
							style={{overflowY: "hidden"}}>
							{loading ? (
								<div>
									loading
								</div>
							) : (
								<div style={{
									display: "flex",
									flexDirection: "column",
									overflowY: 'scroll',
									scrollbarWidth: 'none'
								}}>
									<ChatScroll
										messages={messages}
									/>
									{isTyping ? <div>Loading...</div> : null}
									<BootstrapInput
										margin={'dense'}
										fullWidth
										placeholder={"Type a message"}
										size={"small"}
										onKeyDown={sendMessage}
										onChange={typingHandler}
										value={newMessage}
									/>

								</div>
							)}
						</Box>
				</ChatContainer>
			) : (

					<Typography
						variant={"h4"}
						color={"#0f112d"}
						pb={3}
					>
						Click on a conversation to start chatting
					</Typography>

			)
		}
		</div>

	)

}
export default SingleChat