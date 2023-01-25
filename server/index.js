import express from 'express'
import morgan from 'morgan'
import { Server as SocketServer } from 'socket.io'
import http from 'http'
import cors from 'cors'
import { dirname,join } from 'path'
import { fileURLToPath } from 'url'
import { PORT } from './config.js'

const app = express();
const __dirname= dirname(fileURLToPath(import.meta.url))
const server = http.createServer(app)
const io = new SocketServer(server, {
    cors: {
        origin: '*',
    }
})

app.use(cors())
app.use(morgan('dev'))
app.use(express.static(join(__dirname,'../client/build')))

io.on('connection', (socket) => {
    console.log('usuario conectado ' + socket.id + ' numero ' +io.sockets.server.engine.clientsCount)
    let count = []
    count.push(io.sockets.server.engine.clientsCount);

    socket.emit('count', count)   

    socket.on('message', data => {
        socket.broadcast.emit('message', {
            body: data.body,
            from: socket.id,
            nickName: data.nickName,
        })
    })

    socket.on('typing', (data) => {
        console.log(data,'servidor typing')
        socket.broadcast.emit('typing', data)
    })
})

server.listen(PORT, () => {
    console.log(`Sever started on port ${PORT}`)
})