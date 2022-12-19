import "./CreateAndJoinGame.css"
import { useRef, useState } from "react"
import {socket} from '../Constants'
import { useNavigate } from 'react-router-dom'

const boardStart = require('../boardStart.mp3')

export default function CreateGame() {

  const ref = useRef(null!);
  const [roomName, setRoomName] = useState('')
  const [currentMsg, setCurrentMsg] = useState('')
  const [createdRoom, setCreatedRoom] = useState(false)

  let navigate = useNavigate()

  const handleClick = () =>{

  new Audio(boardStart).play()

  socket.emit("join", roomName )
  
  socket.on("created", (arg) => {
    console.log(arg)
    if(arg){
      console.log(arg)
      setCurrentMsg(arg)
      setCreatedRoom(true)
    } else {
      console.log("error try again")
    }
  })
  }
  socket.on("joined", (arg)=> {
    console.log(arg, 'create gamen puolella')
    if(arg === "joined room"){
      console.log("Opponent joined room successfully")
      navigate('/game')
    } else {
      console.log("Room is full")
    }
  })

    return (
        <div className="containerCreate">
          <div className="teksti">Name your room</div>
              <input className="tekstikenttä" type="text" onChange={(e) => setRoomName(e.target.value)} value={roomName} required/>
                  {createdRoom ? true : <button className="nappi" onClick={handleClick} ref={ref}>
                      Create a new room
                  </button>}
                    <div className="message">
                      {currentMsg}
                    </div>
        </div>
    )
}