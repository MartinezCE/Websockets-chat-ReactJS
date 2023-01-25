import './styles.css'

export const WindowChat = ({messages,socket}) => {
    const date = new Date();
    const [hour, minutes] = [date.getHours(), date.getMinutes()];
    return (<div className='message-wrapper'>
        <div className='message-content'>
            {messages.map((msg, index) => {
                return (msg.from !== socket.id)
                    ? <div className='divGeneric' key={index}><><p>{hour}:{minutes}  {msg.nickName}:</p> <p>{msg.body}</p></></div>
                    : <div className='divMe' key={index}><> <p>{hour}:{minutes}  Tú: </p><p>{msg.body}</p></></div>
            })}
        </div>
    </div>)
}