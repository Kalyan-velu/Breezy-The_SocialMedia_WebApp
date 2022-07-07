import React from 'react'
import MyChats from "../messaging-components/MyChats";
import {ChatPageContainer, ChatSection, ChatSections} from "../../styledComponents/chat-styles/ChatSections";
import SingleChat from "../messaging-components/private/SingleChat";


const ChatPage = () => {
    const [ fetchAgain, setFetchAgain ] = React.useState( false );

    return (
        <ChatPageContainer>
                <ChatSections>
                            <MyChats
                                setFetchAgain={setFetchAgain}
                                fetchAgain={fetchAgain}
                            />
                </ChatSections>
                <ChatSection>
                    <SingleChat
                        fetchAgain={fetchAgain}
                        setFetchAgain={setFetchAgain}
                    />
                </ChatSection>
        </ChatPageContainer>
    )
}
export default ChatPage