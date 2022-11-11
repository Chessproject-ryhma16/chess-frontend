import './Login.css';

export default function Lofin(){


    return(
        <div className="box">
            <div>
                Käyttäjä
            </div>
                <input className='input' type="text" id="urname" name="username" placeholder="Your username..."/>
            <div>
                Salasana
            </div>
                <input className='input' type="text" id="pword" name="password" placeholder="Your password..."/>
            <div>
                <button className='buttons'>
                    Login
                </button>
                <button className="buttons">
                    Register
                </button>
            </div>
        </div>
    );
}