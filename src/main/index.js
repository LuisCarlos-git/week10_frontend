import React, { useEffect, useState } from 'react';

import api from '../services/api'

import './main.css';

export default function Main(){
    const [ devs, setDevs ] = useState([])

    useEffect(() => {
        async function loadDves() {
            const response = await api.get('/devs');

            setDevs(response.data)
        }
        

        loadDves()
    }, [])

    return(
        <>
            <ul>
                {devs.map(dev => (
                    <li key={dev._id} className="dev-item">
                    <header>
                        <img src={dev.avatar_url} alt={dev.name}/>
                        <div className="dev-info">
                            <strong>{dev.name}</strong>
                            <span>{dev.techs.join(', ')}</span>
                        </div>
                    </header>
                    <p>{dev.bio}</p>

                    <a href={`https://github.com/${dev.github_username}`}>Acessar perfil no Github</a>
                </li>
                ))}
            </ul>
        
        </>
    );
}