import {ArrowBackIos} from "@mui/icons-material";
import {IconButton} from "@mui/material";
import Box from "@mui/material/Box";

import {useTheme} from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import * as React from 'react'
import {useDispatch, useSelector} from "react-redux";
import {io} from "socket.io-client";
import {BootstrapInput} from "../../../../common/components/NewPost/PostModalStyled.jsx";
import {messageInstance} from "../../../../config/axios.js";
import {getSender} from "../../../../config/ChatLog.jsx";
import {ChatState} from "../../../../context/ChatProvider.jsx";
import {setSelectedChat} from "../../../../features/action/chatAction.js";
import {ChatContainer, ChatHeader} from "../../styles/ChatSections.jsx";
import ChatScroll from "../ChatScroll.jsx";

const ENDPOINT = "https://social-media-server.adaptable.app"
let socket, selectedChatCompare;
const SingleChat = ({fetchAgain, setFetchAgain}) => {
  const theme = useTheme()
  const dispatch = useDispatch()
  const [messages, setMessages] = React.useState([]);
  const [newMessage, setNewMessage] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [typing, setTyping] = React.useState(false);
  const [isTyping, setIsTyping] = React.useState(false);
  const [socketConnected, setSocketConnected] = React.useState(false);
  const {user} = useSelector(({app}) => app)
  const {selectedChat} = useSelector(state => state.chats)
  const {notification, setNotification} = ChatState()

  async function sendMessage(e) {
    if (e.key === "Enter" && newMessage) {
      socket.emit("stop typing", selectedChat._id);
      try {
        setNewMessage("");
        const response = await messageInstance.post('/', {
          "content": newMessage,
          "chatId": selectedChat._id
        },)
        socket.emit("new message", response.data)
        setMessages(current =>
          [...current, response.data])
      } catch (e) {
        dispatch({
          type: "STATUS",
          payload: {
            variant: "error",
            message: (e?.response.data.message == null) ? e.message : e.response.data.message
          }
        })
      }
    }
  }

  React.useEffect(() => {
    socket = io(ENDPOINT);
    socket.emit("setup", user);
    socket.on("connected", () => setSocketConnected(true))
    socket.on('typing', () => setIsTyping(true))
    socket.on('stop typing', () => setIsTyping(false))
  }, [user])

  React.useEffect(() => {
    async function fetchMessages() {
      if (!selectedChat) {
        return
      }
      try {
        setLoading(true)
        const response = await messageInstance.get(`/${selectedChat._id}`)
        console.log(response.data)
        setMessages(response.data)
        setLoading(false)

        socket.emit("join chat", selectedChat._id)
      } catch (e) {
        dispatch({
          type: "STATUS",
          payload: {
            variant: "error",
            message: (e?.response.data.message == null) ? e.message : e.response.data.message
          }
        })
        setLoading(false)
      }
    }

    // eslint-disable-next-line
    fetchMessages();
    selectedChatCompare = selectedChat;
  }, [selectedChat]);

  React.useEffect(() => {
    socket.on('message received', (newMessageReceived) => {
      if (!selectedChatCompare || selectedChatCompare._id !== newMessageReceived.chat._id) {
        if (!notification.includes(newMessageReceived)) {
          setNotification([newMessageReceived, ...notification])
          setFetchAgain(!fetchAgain)
        }
      } else {
        setMessages([...messages, newMessageReceived])
      }
    })
  });

  function typingHandler(e) {
    setNewMessage(e.target.value);

    if (!socketConnected) return;
    if (!typing) {
      setTyping(true)
      socket.emit('typing', selectedChat._id)
    }
    let lastTyping = new Date().getTime()
    let timeLength = 1000;
    setTimeout(() => {
      let timeNow = new Date().getTime();
      let timeDiff = timeNow - lastTyping;

      if (timeDiff >= timeLength && typing) {
        socket.emit('stop typing', selectedChat._id)
        setTyping(false)
      }
    }, timeLength)
  }

  return (
    <>
      {selectedChat ?
        (<ChatContainer>
          <ChatHeader>
            <IconButton onClick={() => dispatch(setSelectedChat(null))}><ArrowBackIos/></IconButton>
            <div style={{flexGrow: 1}}/>
            <>
              <Typography fontSize={"20px"} fontWeight={"500"}>
                {getSender(user, selectedChat.users)}
              </Typography>
              {isTyping ? <div>Typing...</div> : null}
            </>
            <div style={{flexGrow: 1}}/>
          </ChatHeader>
          <Box display={"flex"} flexDirection={"column"} justifyContent={"flex-end"} width={"100%"} height={"100%"}
               p={3} style={{overflowY: "hidden"}}>
            {loading ? (<div>loading</div>) :
              (<div style={{display: "flex", flexDirection: "column", overflowY: 'auto', scrollbarWidth: 'none'}}>
                  <ChatScroll messages={messages}/>
                  <div style={{padding: "10px"}}/>
                  <BootstrapInput padding={1} margin={'dense'} fullWidth placeholder={"Type a message"} size={"small"}
                                  onKeyDown={sendMessage} onChange={typingHandler} value={newMessage}/>
                </div>
              )}
          </Box>
        </ChatContainer>) : (
          <Typography variant={"h4"} color={theme.palette.text.primary} pb={3}>Click on a conversation to start
            chatting</Typography>)}
    </>)
}
export default SingleChat