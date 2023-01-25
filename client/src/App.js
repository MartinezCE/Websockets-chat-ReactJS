import { useState } from 'react'
import './App.css'
import { socket } from './services';
import { WindowChat } from './components/WindowChat/WindowChat.jsx';
import { WriteChat } from './components/WriteChat/WriteChat.jsx';
import { Modal } from './components/Modal/Modal';
import useCount from './hooks/useCount';
import useMessages from './hooks/useMessages';




const App = () => {
  const [message, setMessage] = useState('')
  const [nickName, setNickName] = useState('')
  const [modal, setModal] = useState(true)
  
  const {messages, setMessages} = useMessages()
  const { count } = useCount()

  const handleSubmit = (e) => {
    e.preventDefault()
    socket.emit('message', { body: message, nickName: nickName })
    const newMessage = {
      body: message,
      from: socket.id,
      nickName: nickName,
    }
    setMessages([newMessage, ...messages])
    setMessage('')
  }

  return (
    <div>
      <div className='content-title' >
        <h1>Chatroom</h1>
        <p className='header-p'>Hay {count} usuarios conectados en la sala</p>
      </div>
      {modal && (<Modal onChange={setNickName} onSubmit={setModal} value={nickName} />)}
      <WindowChat messages={messages} socket={socket} />
      <WriteChat onSubmit={handleSubmit} value={message} onChange={setMessage} />
    </div>
  )
}

export default App
