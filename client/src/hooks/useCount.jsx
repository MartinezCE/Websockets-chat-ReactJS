import { useState } from "react";
import { socket } from "../services";

const useCount = () => {
    const [count, setCount] = useState(0)

    socket.on('count', count => {
        setCount(count[0])
    })

    return { count }
}


export default useCount