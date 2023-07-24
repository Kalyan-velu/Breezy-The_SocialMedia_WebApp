import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import {useTheme} from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import React, {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {getSender, getSenderId, getSenderProfilePic} from "../../../config/ChatLog.jsx";
import {fetchChat, setSelectedChat} from "../../../features/action/chatAction.js";
import {ChatsContainer} from "../styles/ChatSections.jsx";
import ChatLoading from "./chat-loading/ChatLoading.jsx";
import Chats from "./Chats.jsx";
import SearchModal from "./Search.jsx";

export default function MyChats({fetchAgain}) {
  const dispatch = useDispatch();
  const theme = useTheme()
  const {user: loggedUser} = useSelector(({app}) => app)
  const {chats, selectedChat} = useSelector(({chats}) => chats)

  /*Request to View Previous Chats*/
  useEffect(() => {
    dispatch(fetchChat())
  }, [fetchAgain, dispatch]);

  return (
    <div style={{height: "91vh"}}>
      <Box display={{base: selectedChat ? null : "flex", md: "flex"}} flexDirection={"column"} width="100%"
           height={"100%"} sx={{backgroundColor: theme.palette.secondary.main, borderRadius: "0 0 0 10px",}}
      >
        <Box borderRadius={"30px"} margin={"20px"} bgcolor={"inherit"}>
          <SearchModal/>
        </Box>
        <ChatsContainer>
          {chats ? (
              <Stack>{chats?.map((chat) => (
                <Link style={{textDecoration: 'none'}} to={`/chat/${chat._id}`} key={chat._id}>
                  <Box key={chat._id} onClick={() => dispatch(setSelectedChat(chat))}>
                    {chat.isGroupChat ? (
                      <>
                        <Typography varient={'h3'}>{chat.chatName}</Typography>
                        <Divider/>
                      </>) : (
                      <>
                        <Chats bgcolor={selectedChat === chat ? '#aea7c3' : "#f5f5f5"}
                               avatar={getSenderProfilePic(loggedUser, chat.users)}
                               name={getSender(loggedUser, chat.users)} userId={getSenderId(loggedUser, chat.users)}
                               latestMessage={chat.latestMessage}/>
                        <Divider/>
                      </>)}
                  </Box>
                </Link>))}
              </Stack>) :
            (<ChatLoading/>)}
        </ChatsContainer>
      </Box>
    </div>
  )
}