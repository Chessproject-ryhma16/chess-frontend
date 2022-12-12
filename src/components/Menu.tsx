import "./Menu.css";
import { useRef, useState } from "react";
import { io } from "socket.io-client";
const socket = io("http://localhost:3001");

export default function Menu() {
    const ref = useRef(null!);

   const handleClick = () => 
   socket.emit("move", {message: msg});
   // console.log("CLICKED", ref.current);
   const [msg, setMsg] = useState('')
   const [msgServer, setMsgServer] = useState('')
   //let move

   socket.on("move", function (move) {
    console.log("liike",move) // world
    //setMsgServer(arg)
    //move = arg
   })
   socket.on("message", function (srvmsg) {
     console.log(srvmsg)
   })

    return (
      <div className="home">
        <input type="text" onChange={(e) => setMsg(e.target.value)} value={msg} required>

        </input>
        <button onClick={handleClick} ref={ref}>
            Lähetä viesti
        </button>
        <div>
          liike:
         
        </div>

     </div>
    );
    
}