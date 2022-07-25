import React, {useEffect} from 'react'
import Box from "@mui/system/Box";
import Snackbar from "@mui/material/Snackbar"
import MuiAlert from "@mui/material/Alert";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import {getSender, getSenderId, getSenderProfilePic} from "../../../config/ChatLog";
import SearchModal from "./Search";
import ChatLoading from "../chat-loading/ChatLoading";
import { Divider} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {ChatsContainer} from "../../styledComponents/chat-styles/ChatSections";
import Chats from "./Chats";
import {Link} from "react-router-dom";
import {fetchChat, setSelectedChat} from "../../../features/action/chatAction";

const Alert = React.forwardRef( function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
} );
export default function MyChats({fetchAgain}) {
    const dispatch = useDispatch();
    const [ openE, setOpenE ] = React.useState( false );
    const [ error, setError ] = React.useState( '' );
   const {user:loggedUser}=useSelector(state=>state.user)
    const{chats,selectedChat}=useSelector(state=>state.chats)

    const handleClose = () => setOpenE( false );


    /*Request to View Previous Chats*/
    useEffect( () => {
        dispatch(fetchChat())
    }, [ fetchAgain,dispatch ] );
    console.log(chats)



    return (
        <div
            style={{
                height: "91vh",
            }}>
            <Box
                display={{base: selectedChat ? null : "flex", md: "flex"}}
                flexDirection={"column"}
                width="100%"
                height={"100%"}
                sx={{
                    backgroundColor: "#e7ebf2",
                    borderRadius: "0 0 0 10px",
                }}>
                <Box
                    borderRadius={"30px"}
                    margin={"20px"}
                    bgcolor={"inherit"}>
                    <SearchModal
                        setError={setError}
                        setOpenE={setOpenE}
                    />
                </Box>
                <ChatsContainer>
                    {chats ? (
                        <Stack>{chats.map( (chat) => (

                            <Link style={{textDecoration:'none'}} to={`/chat/${chat._id}`} key={chat._id}>
                           <Box key={chat._id} onClick={()=>dispatch(setSelectedChat(chat))}>
                                {chat.isGroupChat?
                                    (<>
                                        <Typography
                                            varient={'h3'}
                                        >
                                                 { chat.chatName}
                                        </Typography>
                                        <Divider/>
                                        </>
                                    )
                                    :
                                    (
                                        <>
                                        <Chats
                                        bgcolor= { selectedChat=== chat  ? '#aea7c3' : "#f5f5f5"}
                                        avatar={getSenderProfilePic( loggedUser, chat.users )}
                                        name={getSender(loggedUser,chat.users)}
                                        userId={getSenderId(loggedUser,chat.users)}
                                        latestMessage={chat.latestMessage}
                                    />
                                    <Divider/>
                                    </>)
                                }
                           </Box>
                            </Link>
                        ) )}
                        </Stack>
                    ) : (
                        <ChatLoading/>
                    )}

                </ChatsContainer>
            </Box>
            {error ?
                <Snackbar open={openE} autoHideDuration={6000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity="error" sx={{width: '100%'}}>
                        {error}
                    </Alert>
                </Snackbar>
                : null}
        </div>
    )
}