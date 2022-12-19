import "./CreateAndJoinGame.css"
import { useRef, useState } from "react"
import {socket} from '../Constants'
import { useNavigate } from 'react-router-dom'


const boardStart = require('../boardStart.mp3')

export default function JoinGame() {

  const ref = useRef(null!);
  const [joinRoom, setJoinRoom] = useState('')
  
  let navigate = useNavigate()

  const handleJoinClick = () => {

    new Audio(boardStart).play()

    socket.emit("join", joinRoom )

    socket.on("joined", (arg) => {
      console.log(arg)
      if(arg === "joined room"){
        console.log("Joined room successfully")
        navigate('/game')
      } else {
        console.log("Room is full")
      }
    })
  }


    return (
         <div className="containerCreate">
          <text className="teksti">Anna huoneen nimi</text>
              <input className="tekstikenttä" type="text" onChange={(e) => setJoinRoom(e.target.value)} value={joinRoom} required/>
                  <button className="nappi" onClick={handleJoinClick} ref={ref}  >
                      Liity pelihuoneeseen
                  </button>
        </div>
    )
}