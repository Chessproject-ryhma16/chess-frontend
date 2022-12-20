import './Mainmenu.css';
import {Link} from "react-router-dom"
import jwt_decode from "jwt-decode";
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Mainmenu (){

    let navigate = useNavigate()
    const[username2, setUsername] = useState('Guest')
    const[userlogin, setUserLogin] = useState(false)
    
    
    useEffect(() => {

        function getCurrentUser() {
    
            console.log("getcurrentuser")
              var user = localStorage.getItem('user')
              console.log("getcurrentuser",user)
               if(user !== null){
                    let username = jwt_decode(user)
                    console.log(user,"suoraan token")
                    console.log(username,"mainmenu stringify")
                     let u = JSON.stringify(username)
                     const split = u.split('"')
                     console.log(split[3], "splitti")
                     setUsername(split[3])
                   
               } else {
                   console.log("ei ole kirjautunut sisään")
                   //setUsername("toimippanyt")
               } 
       }
       getCurrentUser()
    },[])
    

    //    useEffect(() => {
    //        setUsername('')
    //   },[username2])

     useEffect(() => {
         setUserLogin(false)
    },[userlogin])

    const isUserLoggedIn = () => {
        var user = localStorage.getItem('user')
        console.log(user)
        if(user  !== null){
            //setUsername(username2)
            console.log(username2)
            console.log("käyttäjä on kirjautunut sisään")
            //setUserLogin(true)
            return true
        } else {
         console.log("käyttäjä ei ole kirjautunut sisäään")
         return false
        }
    }
    const logout = () => {
        localStorage.removeItem('user')
        navigate("/")
        setUsername("heipä jei")
    }

    return(
      <div className="container">
        <div className='nav'>
            <img className="Logo" src="assets/images/16.png"/>
                <Link to ="/user-info">
                    <li className="username" >{username2}</li>
                </Link>
            <div>{isUserLoggedIn() === true ? 
            (<>
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
                    <button className='play'>Create new game</button>        
                </Link>
                <Link to ="/joingame">
                    <button className='play'>Join game</button>
                </Link>
            </div>
            <div>
                {}
            </div>
      </div>
    )
}