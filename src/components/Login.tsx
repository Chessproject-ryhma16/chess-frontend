import './RegisterAndLogin.css';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login(){

    const [name, setUser] = useState('')
    const[password, setPwd] = useState('');
    const[errMsg, setErrMsg] = useState('')
    
    let navigate = useNavigate()

    useEffect(() => {
        setErrMsg('')
    }, [name,password])


    async function handleLogin(event: { preventDefault: () => void; }) {
        event.preventDefault()
        console.log('yritetty loginia', {name, password})
        const response = await fetch('http://localhost:4000/login', {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name,
                password,
            }),
        })
         const data = await response.json()
         console.log(data)
         if(data.user) {
            navigate("/")
            console.log(data.user)
            localStorage.setItem("user", (data.user))
            
         } else {
            setErrMsg('Käyttäjänimi tai salasana on väärin')
         }
    }

    return(
        <div className="box">
            <div>
                Käyttäjä
            </div>
                <input className='input' type="text" id="uname" name="username" placeholder="Your username..."
                onChange={(e) => setUser(e.target.value)} value={name} required/>
            <div>
                Salasana
            </div>
                <input className='input' type="text" id="pword" name="password" placeholder="Your password..."
                onChange={(e) => setPwd(e.target.value)} value={password} required/>
            <div>
            
                <button onClick={handleLogin} className='buttons'>       
                  Login      
                </button>
            </div>
            <div>
            {errMsg}
            </div>
           
        </div>
    );
}