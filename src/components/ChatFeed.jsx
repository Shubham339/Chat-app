// import userEvent from '@testing-library/user-event';
// import MessageForm from './MessageForm';
// import MyMessage from './MyMessage';
// import TheirMessage from './TheirMessage';

// const ChatFeed = (props) => {
//     console.log("PROP" ,props);
//     const {chats , activeChat ,UserName , messages} = props;

//     const chat =chats && chats[activeChat];
//     // console.log(chat, UserName , messages);

//     const renderReadReceipts =(message , isMyMessage)=>{
//        return  chat.people.map((person, index) => person.last_read === message.id && (
//             <div 
//                 key={'read_${index}'}
//                 className="read-receipt" 
//                 style={{float:isMyMessage?'right':'left',
//                 backgroundImage : 'url(${person?.person?.avatar})'
//                 }}
//             />
//         ) )
//     }
//     const renderMessages =() => {
//         const keys =Object.keys(messages); // keys are the ids of messages 

//         console.log(keys);
//         return keys.map((key,index ) => { 
//             const message =messages[key];   // creating array message of all the message who"s index is in key array
//             const lastMessagekey =index === 0 ? null : keys[index-1];  // checking the last message 
//             const isMyMessage = UserName === message.sender.Username;  //check that last message send by me or not 
            
//            return(
//             <div key={'msg_${index}'} style={{width:'100%'}}>
//             <div className="message-block">
//                  {  //dynamic block of code
//                      isMyMessage   //Check if it's is my message 
//                      ? <MyMessage message={message} /> // if it is my message than render MyMessage component
//                      : <TheirMessage message ={message} lastMessage={message[lastMessagekey]} />  // if not my message than render  TheirMessage component
//                  }
//                  <div className="read-receipt" style={{marginRight: isMyMessage ? '18px' :'0px' , marginLeft : isMyMessage ? '0px' : '68px'}}>
//                      {renderReadReceipts(message , MyMessage)}
//                  </div>
//             </div>
//         </div>
//            );
//         }) 
//     }

//     renderMessages();
//     if(!chat) return 'Loading...';
//     return ( 
//         <div className="chat-feed">
//            <div className="chat-title-container">
//                <div className="chat-title">{chat.title}
//                </div>
//                <div className="chat-subtitle">
//                    {chat.people.map((person) => '${person.person.uername}')};
//                </div>
//            </div>
//            {renderMessages()}
//            <div style={{height: '100px'}} />
//            <div className="message-form-container">
//                <MessageForm {...props} chatId={activeChat}/>
//            </div>
//         </div>
//     )
// }

// export default ChatFeed;


import MyMessage from './MyMessage';
import TheirMessage from './TheirMessage';
import MessageForm from './MessageForm';

const ChatFeed = (props) => {
  const { chats, activeChat, userName, messages } = props;

  const chat = chats && chats[activeChat];

  const renderReadReceipts = (message, isMyMessage) => chat.people.map((person, index) => person.last_read === message.id && (
    <div
      key={`read_${index}`}
      className="read-receipt"
      style={{
        float: isMyMessage ? 'right' : 'left',
        backgroundImage: person.person.avatar && `url(${person.person.avatar})`,
      }}
    />
  ));

  const renderMessages = () => {
    const keys = Object.keys(messages);

    return keys.map((key, index) => {
      const message = messages[key];
      const lastMessageKey = index === 0 ? null : keys[index - 1];
      const isMyMessage = userName === message.sender.username;

      return (
        <div key={`msg_${index}`} style={{ width: '100%' }}>
          <div className="message-block">
            {isMyMessage
              ? <MyMessage message={message} />
              : <TheirMessage message={message} lastMessage={messages[lastMessageKey]} />}
          </div>
          <div className="read-receipts" style={{ marginRight: isMyMessage ? '18px' : '0px', marginLeft: isMyMessage ? '0px' : '68px' }}>
            {renderReadReceipts(message, isMyMessage)}
          </div>
        </div>
      );
    });
  };

  if (!chat) return <div />;

  return (
    <div className="chat-feed">
      <div className="chat-title-container">
        <div className="chat-title">{chat?.title}</div>
        <div className="chat-subtitle">
          {chat.people.map((person) => ` ${person.person.username}`)}
        </div>
      </div>
      {renderMessages()}
      <div style={{ height: '100px' }} />
      <div className="message-form-container">
        <MessageForm {...props} chatId={activeChat} />
      </div>
    </div>
  );
};

export default ChatFeed;