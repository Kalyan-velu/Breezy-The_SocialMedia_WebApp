import React from 'react'
import ErrorBoundary from "../../common/components/errorBoundary"
import {ChatPageContainer, ChatSection, ChatSections} from "./styles/ChatSections.jsx";

const MyChats = React.lazy(() => import("./components/MyChats.jsx"))
const SingleChat = React.lazy(() => import("./components/private/SingleChat.jsx"))

const Index = () => {
  const [fetchAgain, setFetchAgain] = React.useState(false);
  return (
    <ChatPageContainer>
      <ChatSections>
        <ErrorBoundary>
          <MyChats setFetchAgain={setFetchAgain} fetchAgain={fetchAgain}/>
        </ErrorBoundary>
      </ChatSections>
      <ChatSection>
        <ErrorBoundary>
          <SingleChat fetchAgain={fetchAgain} setFetchAgain={setFetchAgain}/>
        </ErrorBoundary>
      </ChatSection>
    </ChatPageContainer>
  )
}
export default Index