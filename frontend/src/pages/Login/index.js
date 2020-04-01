import React, {useState} from "react";

import { Link, useHistory } from 'react-router-dom';

import heroesImg from '../../assets/heroes.png'

import logoImg from '../../assets/logo.svg'

import './styles.css'

//this is a bundle of many different icon source, which icon inside this packet is a react component
import { FiLogIn } from 'react-icons/fi'
import api from "../../services/api";

const Login = () => {

    const history = useHistory();

    const [id, setId] = useState("");

    const handleLogin = async event => {
        event.preventDefault();

        try {
            const response = await api.post('session', { id })

            localStorage.setItem('ongId', id);
            localStorage.setItem('ongName', response.data.name);

            history.push('/profile');
            
        }catch(err){
            alert("Falha no Login, tente novamente");
        }
    }

    return(
        <div className="login-container">
            <section className="form">

                <img src={logoImg} alt="Be The Hero"/>

                <form onSubmit={handleLogin}>
                    <h1>Faça seu logon</h1>
                    
                    <input 
                        placeholder="Sua ID"
                        value={id}
                        onChange={ event => setId(event.target.value) }
                    />

                    <button type="submit" className="button"> Entrar </button>
                    
                    {/*The Link component replaces the  html's common tag "<a>"
                    It prevents the whole page be reloads when the link is clicked on */}
                    <Link className = "back-link" to="/register">
                        {/* This is the icon imported from react-icon ("size") is height*/}
                        <FiLogIn size={16} color={"#E02041"} />
                        Não tenho cadastro
                    </Link> 
    
                </form>
            </section>

            <img src={heroesImg} alt ="Heroes" />

        </div>
    );
}

export default Login;