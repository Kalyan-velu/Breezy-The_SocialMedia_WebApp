import {createContext, useContext, useState} from "react";
import {useSelector} from "react-redux";

const ChatContext = createContext()

const ChatProvider = ({children}) => {
	const {user}=useSelector(state => state.user)
	const {selectedChat}=useSelector(state => state.chats)
	const [ chats, setChats ] = useState( [] )
	const [ notification, setNotification ] = useState( [] );
	const[param,setParam]=useState(null)


	return (
		<ChatContext.Provider value={{
			user,
			selectedChat,
			chats,
			setChats,
			setNotification,
			notification,
			param,
			setParam
		}}>
			{children}
		</ChatContext.Provider>)
}
export const ChatState = () => {
	return useContext( ChatContext )
}

export default ChatProvider