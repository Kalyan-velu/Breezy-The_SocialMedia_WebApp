import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import React from 'react'
import {ChatContent, ChatsUserContainer, ChatUserDetails, ChatUserList} from "../styles/ChatSections.jsx";

const Chats = ({bgcolor, userId, name, avatar, latestMessage = {}}) => {
  const date = new Date(latestMessage.createdAt);
  return (
    <ChatsUserContainer bgcolor={bgcolor} key={userId}>
      <ChatUserList>
        <Avatar title={name} src={avatar} alt={name}/>
        <ChatUserDetails>
          <ChatContent>
            <Typography fontWeight={600} sx={{fontSize: '1.2rem'}}> {name} </Typography>
            <div style={{display: 'flex', flexDirection: "row", width: '100%', justifyItems: "space-around"}}>
              <Typography fontWeight={300} sx={{fontSize: '0.9rem', width: '70%',}}>
                {latestMessage.content}
              </Typography>
              <Typography fontWeight={400} sx={{fontSize: '0.8rem', width: '30%'}}>
                {date.toLocaleTimeString()}
              </Typography>
            </div>
          </ChatContent>
        </ChatUserDetails>
      </ChatUserList>
    </ChatsUserContainer>)
}
export default Chats;