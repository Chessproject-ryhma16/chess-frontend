import "./CreateGame.css";
import { useEffect, useRef, useState } from "react";
import {socket} from '../Constants'
import { useNavigate } from 'react-router-dom';


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