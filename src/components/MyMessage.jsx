const MyMessage = ({message}) => {
    if(message?.attchments?.length>0){
        return(
            <img 
            src={message.attchments[0].file}
            alt="message-attachment"
            className="message-image"
            style={{float: 'right'}}/>
        )
    }
    return ( 
        <div className="message" style={{float: 'right', marginRight: '18px' , color: 'white' , backgroundColor:'#382A50'}}>
          {message.text}
        </div>
    )
}

export default MyMessage;