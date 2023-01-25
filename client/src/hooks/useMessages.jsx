import { socket } from "../services";
import { useState, useEffect} from "react";


const useMessages=()=>{
    const [messages, setMessages] = useState([])


    useEffect(() => {
        socket.on('message', (message) => {
          setMessages([message, ...messages])
        })
        return () => {
          socket.off('message', message => setMessages([message, ...messages]))
        }
      }, [messages])
    
    
    return{ messages, setMessages}
}

export default useMessages;