import React from "react";
import './styles.css'
import heroesImg from '../../assets/heroes.png'
import logoImg from '../../assets/logo.svg'
//this is a bundle of many different icon source, which icon inside this packet is a react component
import { FiLogIn } from 'react-icons/fi'
const Login = () => {
    return(
        <div className="login-container">
            <section className="form">
                <img src={logoImg} alt="Be The Hero"/>
                <form>
                    <h1>Faça seu logon</h1>
                    
                    <input placeholder="Sua ID"/>
                    <button type="submit" className="button"> Entrar </button>
                    <a href="/register">
                        {/* This is the icon imported from react-icon ("size") is height*/}
                        <FiLogIn size={16} color={"#E02041"} />
                        Não tenho cadastro
                    </a>
                </form>
            </section>

            <img src={heroesImg} alt ="Heroes" />

        </div>
    );
}

export default Login;