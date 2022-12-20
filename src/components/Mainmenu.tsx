import './Mainmenu.css';
import {Link} from "react-router-dom"
import jwt_decode from "jwt-decode";
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Mainmenu (){

    let navigate = useNavigate()
    const[username, setUsername] = useState('Guest')
    const[userlogin, setUserLogin] = useState(false)
    saveUsername()
    
    useEffect(() => {

        function getCurrentUser() {
    
              var user = localStorage.getItem('user')
               if(user !== null){
                    let username = jwt_decode(user)
                     let u = JSON.stringify(username)
                     const split = u.split('"')
                     setUsername(split[3])
                   
               } else {
                  
               } 
       }
       getCurrentUser()
    },[])

    function saveUsername(){
        localStorage.setItem("username", username);
    }

     useEffect(() => {
         setUserLogin(false)
    },[userlogin])

    const isUserLoggedIn = () => {
        var user = localStorage.getItem('user')
        if(user !== null){
            return true
        } else {
         
         return false
        }
    }
    const logout = () => {
        localStorage.removeItem('user')
        navigate("/")
        setUsername("Guest")
    }

    const sound = require('../boardStart.mp3')

    function playNewGameSound() {
        new Audio(sound).play()
    }

    return(
      <div className="container">
        <div className='nav'>
            <img className="Logo" src="assets/images/16.png"/>
            <div className="username">
            {username}
            </div>
            <div>{isUserLoggedIn() === true ? (<>
                <button className="user" onClick={logout}>Log out</button>
            </>):
             (<>
             <Link to ="/login">
            <button className="user">Log in</button>
            </Link>
             </>)
             }</div>
            <Link to ="/register">
                <button className="user">Register</button>
            </Link>
        </div>
            <div className='boxes'>
                <Link to="/creategame">
            <button className='play' onClick={playNewGameSound}>Create new game</button>        </Link>
            <Link to ="/joingame">
            <button className='play'>Join game</button>
            </Link>
            </div>
            <div>
                {}
            </div>
      </div>
    );
}