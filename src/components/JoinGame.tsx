import { useEffect, useRef, useState } from "react";
import {socket} from '../Constants'
import { useNavigate } from 'react-router-dom';



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
      <div>
         <div>
         <input type="text" onChange={(e) => setJoinRoom(e.target.value)} value={joinRoom} required/>
        <button onClick={handleJoinClick} ref={ref}  >
            Liity pelihuoneeseen
        </button>
         </div>

      </div>
    )
}