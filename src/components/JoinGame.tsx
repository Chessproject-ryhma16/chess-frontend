
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

export default function JoinGame() {

  const ref = useRef(null!);
  const [joinRoom, setJoinRoom] = useState('')
  const [side, setSide] = useState(0)
  const [username, setUserName] = useState('')

  useEffect(()=> {
    const newSide = Math.random() < 0.5 ? 0 : 1
     setSide(newSide)
  }, [side])

  useEffect(() => {
    const user = localStorage.getItem("username")
    if(user !== null){
        setUserName(user)
    }
    },[username])
  
 
  let navigate = useNavigate()


  const handleJoinClick = () => {

    playBoardStartSound(1)

    socket.emit("join", joinRoom )
    console.log(side, "determineside before")
    socket.once("joined", (arg) => {
    if(arg === "joined room"){
      socket.emit("determineSide", side)
      socket.emit("username", username)
      navigate('/game')
    } else {

    }
  })
  
  }


    return (

         <div className="containerCreate">
          <text className="teksti">Room name</text>
              <input className="tekstikenttä" type="text" onChange={(e) => setJoinRoom(e.target.value)} value={joinRoom} required/>
                  <button className="nappi" onClick={handleJoinClick} ref={ref}  >
                      Join game
                  </button>
        </div>
    )
}