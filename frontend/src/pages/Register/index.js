import React, { useState  } from "react";

import "./styles.css"

import { FiArrowLeft } from 'react-icons/fi'

import { Link, useHistory } from 'react-router-dom';

import  logoImg  from '../../assets/logo.svg'

import api from '../../services/api'

const  Register = () => {
    //The variables that will store the inputs then send to backend
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [whatsapp, setWhatsapp] = useState("");
    const [city, setCity] = useState("");
    const [uf, setUf] = useState("");

    /* History redirect the route when we can't use Link 
    component like in a Vanilla Javascript function */
    const history = useHistory();

    const handleRegister = async event => {
        //This prevent the page to reload on submit
        event.preventDefault();
        
        const data = {
            name,
            email,
            whatsapp,
            city,
            uf
        }
    
        
        try {
            const response = await api.post('/ongs', data);

            alert(`Seu ID de acesso ${response.data.id}`);

            /* Send the user back to the first page*/
            history.push('/');
        }catch (err){
            alert('Erro no cadastro, tente novamente.');
        }
        
    }

    return(
        <div  className="register-container">
            <div className ="content">
                <section>
                    <img src={logoImg} alt="Be The Hero"/>                    
                    <h1> Cadastro </h1>
                    <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG</p>
                    <Link className = "back-link" to="/">
                        {/* This is the icon imported from react-icon ("size") is height*/}
                        <FiArrowLeft size={16} color={ "#E02041"} />
                        Voltar
                    </Link> 
                </section>

                <form onSubmit={handleRegister}>
                    <input 
                        placeholder = "Nome da ONG"
                        /*Defines the state variable name as the value of the input*/
                        value={name}
                        /*This keep listing for changes on the input,
                        once it happen, the arrow function changes the value of
                        name */
                        onChange={ event => setName(event.target.value) }
                    />


                    <input 
                        type="email" 
                        placeholder = "E-mail"
                        value={email}
                        onChange={ event => setEmail(event.target.value) }
                    />


                    <input 
                        placeholder = "WhatsApp"
                        value={whatsapp}
                        onChange={ event => setWhatsapp(event.target.value) }
                    />

                    <div className="input-group">
                        
                        <input 
                            placeholder="Cidade"
                            value={city}
                            onChange={event => setCity(event.target.value)}
                        />


                        
                        <input 
                            placeholder="UF" 
                            /*Style receives a object with any css' feature */
                            style={{ width:80 }}
                            value={uf}
                            onChange={event => setUf(event.target.value)}
                        />
                    </div>

                    <button className="button" type="submit" > Cadastrar </button>
                </form>
            </div>
        </div>
    );
}

export default Register;