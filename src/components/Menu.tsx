import "./Menu.css";
import { useRef } from "react";
import { io } from "socket.io-client";
const socket = io("http://localhost:3001");

export default function Menu() {
    const ref = useRef(null!);
    const handleClick = () => 
    socket.emit("send_message", {message: "bhx h4"});
   // console.log("CLICKED", ref.current);

    return (
      <div className="home">
        <button onClick={handleClick} ref={ref}>
            Aloita peli
        </button>
     </div>
    );
    
}