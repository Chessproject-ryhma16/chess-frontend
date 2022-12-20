
import { useEffect, useRef, useState } from "react";
import "./CreateAndJoinGame.css"
import {socket} from '../Constants'
import { useNavigate } from 'react-router-dom'

const boardStart = require('../boardStart.mp3')

function playBoardStartSound(volume: number) {
  const audio = new Audio(boardStart)
  audio.volume = volume
  audio.play()
}

export default function CreateGame() {

  const ref = useRef(null!);
  const [roomName, setRoomName] = useState('')
  const [currentMsg, setCurrentMsg] = useState('')
  const [createdRoom, setCreatedRoom] = useState(false)
  const [userName, setUserName] = useState('')

  let navigate = useNavigate()

  useEffect(() => {
    const user = localStorage.getItem("username")
    if(user !== null){
        setUserName(user)
    }
    },[userName])


  const handleClick = () =>{
  
    playBoardStartSound(1)
    
  socket.emit("join", roomName )
  
  socket.on("created", (arg) => {
    console.log(arg)
    if(arg){
      console.log(arg)
      setCurrentMsg(arg)
      setCreatedRoom(true)
    } else {
    
    }
  })
  }
  socket.on("joined", (arg)=> {
    if(arg === "joined room"){
      socket.emit("username2", userName)
      navigate('/game')
    } else {
      
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