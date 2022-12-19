import "./CreateGame.css";
import { useRef, useState } from "react";
import {socket} from '../Constants'
import { useNavigate } from 'react-router-dom';


export default function CreateGame() {

  const ref = useRef(null!);
  const [roomName, setRoomName] = useState('')
  const [currentMsg, setCurrentMsg] = useState('')
  const [createdRoom, setCreatedRoom] = useState(false)

  let navigate = useNavigate()

  const handleClick = () =>{

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
      <div>
        <input type="text" onChange={(e) => setRoomName(e.target.value)} value={roomName} required/>

         {createdRoom ? true : <button onClick={handleClick} ref={ref}>
             Luo uusi pelihuone
         </button>}
         <div>
          {currentMsg}
         </div>
      </div>
    )
    
}