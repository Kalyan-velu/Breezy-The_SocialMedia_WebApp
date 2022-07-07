import React from 'react'
import {
    ChatContent,
    ChatsUserContainer,
    ChatUserDetails,
    ChatUserList
} from "../../styledComponents/chat-styles/ChatSections";
import {Avatar} from "@mui/material";
import Typography from "@mui/material/Typography";


const Chats = ({bgcolor,userId, name, avatar,latestMessage={}}) => {
    const date = new Date(latestMessage.createdAt);
    return (
        <ChatsUserContainer
            bgcolor={bgcolor}
            key={userId}>

            <ChatUserList>
                <Avatar
                    title={name}
                    src={avatar}
                    alt={name}
                />

                    <ChatUserDetails>
                        <ChatContent>
                        <Typography fontWeight={600} sx={{color: '#111', fontSize: '1.2rem'}}> {name} </Typography>
                            <div  style={{ display:'flex',flexDirection:"row",width:'100%',justifyItems:"space-around"}}>
                                <Typography
                                     fontWeight={300}
                                        sx={{
                                            color: '#111',
                                            fontSize: '0.9rem',
                                            width:'70%',
                                        }}
                                >
                                     {latestMessage.content}
                                </Typography>

                                <Typography
                                    fontWeight={400}
                                    sx={{
                                        color: '#111',
                                        fontSize: '0.8rem',
                                        width:'30%',
                                    }}
                                >
                                    {date.toLocaleTimeString()}
                                </Typography>
                            </div>
                        </ChatContent>
                    </ChatUserDetails>

            </ChatUserList>
        </ChatsUserContainer>
    )
}
export default Chats;