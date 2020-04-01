import React, { useState } from "react";

import "./styles.css";

import logoImg from "../../assets/logo.svg";

import { Link, useHistory } from "react-router-dom";

import { FiArrowLeft } from 'react-icons/fi'

import api from "../../services/api"

const NewIncident = () => {

    const history = useHistory();

    const ongId = localStorage.getItem('ongId');

    const [ title, setTitle ] = useState('');
    const [ description, setDescription ] = useState('');
    const [ value , setValue ] = useState('');


    const hundleNewIncident = async event => {
        event.preventDefault();

        const data = {
            title,
            description,
            value
        }

        console.log(data);

        try{
            await api.post('incidents', data, {
                headers: {
                    Authorization: ongId,
                }
            });

            history.push('/profile');

        }catch (err){
            alert('Erro ao cadastrar, tente novamente');
        }
    }

    return(
        <div className="new-incident-container">
            <div className ="content">
                <section>
                    <img src={logoImg} alt="Be The Hero"/>                    
                    
                    <h1> Cadastrar Novo Caso  </h1>
                    <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso.</p>
                    <Link className = "back-link" to="/profile">
                        {/* This is the icon imported from react-icon ("size") is height*/}
                        <FiArrowLeft size={16} color={ "#E02041"} />
                        Home
                    </Link> 
                </section>

                <form onSubmit = {hundleNewIncident} >

                    <input 
                        placeholder = "Título do caso"
                        value={title}
                        onChange={event => setTitle(event.target.value)}
                    />
                    <textarea 
                        placeholder = "Descrição detalhada"
                        value={description}
                        onChange={event => setDescription(event.target.value)}
                    />
                    <input 
                        placeholder = "Valor em R$"
                        value={value}
                        onChange={event => setValue(event.target.value)}
                    />

                    <button className="button" type="submit" > Cadastrar </button>
                </form>
            </div>
        </div>
    );
}

export default NewIncident;