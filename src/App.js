
import  './App.css'; 
import ChatFeed from './components/ChatFeed';
import React from 'react';
import { ChatEngine } from 'react-chat-engine';

export function App() {
	return (
		<ChatEngine
			height='100vh'
			userName='Shubham'
			userSecret='Shubham@123'
            projectID='06c91593-12a6-45b5-b0a8-d935fc1a8767'
            renderChatFeed={(chatAppProps) => <ChatFeed { ...chatAppProps} /> }

		/>
	);
}
export default App;
