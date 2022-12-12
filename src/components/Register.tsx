import './Register.css'
import { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Register(){

    const [name, setUnameReg] = useState('')
    const [password, setPwdReg] = useState('')
    const [trigger, setTrigger] = useState(false);

    const[msg, setMsg] = useState('')

    useEffect(() => {
        setMsg('')
    }, [name,password])

    useEffect(() => {
        setTrigger(false)
        if(trigger === true) {
            setTimeout(()=> {
                navigate("/");
               }, 4000);
           console.log("timer aloitettu")
        }   else {
            console.log("falseeeee")
        }
      }, [trigger]);

    let navigate = useNavigate();

    async function registerUser(event: { preventDefault: () => void; }) {
        event.preventDefault()
        console.log('yritetty rekisteröiä', {name, password})
        const response = await fetch('http://localhost:4000/register', {
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
         if(data.status === "ok") {
            setTrigger(true)
            setMsg("Rekisteröinti onnistui voit nyt kirjautua sisään")
         } else {
            console.log('Tapahtui virhe')
            setMsg("Käyttäjänimi on varattu")
         }
    }

    return(
        <div className="box">
            <div>
                Käyttäjä
            </div>
                <input className='input' type="text" id="urname" name="username" placeholder="New username..."
                onChange={(e) => {setUnameReg(e.target.value)}}/>
            <div>
                Salasana
            </div>
                <input className='input' type="text" id="pword" name="password" placeholder="New password..."
                onChange={(e) => {setPwdReg(e.target.value)}}/>
            <div>
                <button onClick={registerUser} className="buttons">
                    Register
                </button>
            </div>
            <div>
                {msg}
            </div>
        </div>
    );
}