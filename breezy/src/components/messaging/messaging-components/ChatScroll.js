import {Avatar, Tooltip} from "@mui/material";
import {isLastMessage, isSameSender, isSameSenderMargin, isSameUser} from "../../../config/ChatLog";
import {ChatState} from "../../context/ChatProvider";
import {ChatBoxScroll} from "../../styledComponents/chat-styles/ChatSections";
import * as React from "react";


	const ScrollableChat = ({messages}) => {
	const {user} = ChatState();
	const bottomRef = React.useRef(null);


	React.useEffect( () => {
		bottomRef.current?.scrollIntoView({behavior: "smooth",block: "end"})
	},[messages])

	return (
		<ChatBoxScroll
			style={{
			scrollbarWidth:'none'
			}}
		>
			{messages &&
				messages.map( (m, i) => (
					<div style={{display: "flex"}} key={m._id}>
						{(isSameSender( messages, m, i, user._id ) ||
							isLastMessage( messages, i, user._id )) && (
							<Tooltip title={m.sender.name} placement="bottom-start">
								<Avatar
									mt="7px"
									mr={1}
									size="sm"
									cursor="pointer"
									name={m.sender.name}
									src={m.sender.avatar.url}
								/>
							</Tooltip>
						)}
						<span
							style={{
								backgroundColor: `${
									m.sender._id === user._id ? "#BEE3F8" : "#B9F5D0"
								}`,
								marginLeft: isSameSenderMargin( messages, m, i, user._id ),
								marginTop: isSameUser( messages, m, i, user._id ) ? 3 : 10,
								borderRadius: "20px 20px",
								background: "#BEE3F8",
								padding: "5px 15px",
							}}
						>
              					{m.content}
							<div style={{flexGrow:1}}/>
								{new Date(m.createdAt).toLocaleTimeString()}
           				 </span>
					</div>
				) )}
			<div ref={bottomRef}/>
		</ChatBoxScroll>

	);
};

export default ScrollableChat;