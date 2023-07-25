import { useEffect } from 'react'
import socketIO from 'socket.io-client'
import Room from './Room.jsx'

export default function Connection(props) {
    const username = Math.random().toString().substring(0, 4) + ' man'
    const socket = socketIO.connect('http://localhost:4000')
    useEffect(() => {
        socket.emit('joinRoom', {
            room: props.room,
            username: username
        })
        return () => {
            socket.disconnect()
        }
    }, [])

    return <Room socket={socket} username={username} room={props.room}/>
}
