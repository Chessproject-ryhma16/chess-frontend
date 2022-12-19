import { useRef, useState } from "react";
import {socket} from '../Constants'
import { useNavigate } from 'react-router-dom';



export default function JoinGame() {

  const ref = useRef(null!);
  const [joinRoom, setJoinRoom] = useState('')
  
  let navigate = useNavigate()

  const handleJoinClick = () => {
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