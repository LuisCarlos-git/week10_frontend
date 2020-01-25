import React, { useEffect, useState } from 'react';

import api from '../services/api'

import './sideBar.css'

export default function Form(){
    const [ devs, setDevs ] = useState([])

    const [ github_username, setGithub_username] = useState('');
    const [ techs, setTechs] = useState('');

    const [ longitude, setLongitude] = useState('');
    const [ latitude, setLatitude] = useState('');
  
  
    useEffect(() => {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords
  
          setLongitude(longitude);
          setLatitude(latitude);
        },
        (err) => {
          console.log(err);
        },
        {
          timeout: 30000,
        }
      )
    }, []);

    async function handleSubmit(event){
        event.preventDefault();

        const response = await api.post('/devs', {
            github_username,
            techs,
            latitude,
            longitude,
        })

        setGithub_username('');
        setTechs('');

        setDevs([...devs, response])

        window.location.reload();
    }

    return(
        <>
            <strong>Cadastro</strong>
            <form onSubmit={handleSubmit}>
                <div className="input-block">
                    <label htmlFor="github_username">Usuario do Github</label>
                    <input 
                        type="text"
                        placeholder=" Digite seu usuario do Git"
                        name="github_username"
                        id="github_username"  
                        required
                        value={github_username}
                        onChange={event => setGithub_username(event.target.value)}
                                 
                    />
                </div>

                <div className="input-block">
                    <label htmlFor="techs">Tecnologias</label>
                    <input 
                        type="text"
                        placeholder=" Tecnologias desejadas"
                        name="techs"
                        id="techs"  
                        required 
                        value={techs}
                        onChange={event => setTechs(event.target.value)}        
                    />
                </div>

                <div className="input-group">
                    <div className="input-block">
                        <label htmlFor="longitude">longitude</label>
                        <input 
                            type="number"
                            placeholder=" Longitude"
                            name="longitude"
                            id="longitude"  
                            required
                            value={longitude}  
                            onChange={event => setLongitude( event.target.value )}       
                        />
                    </div>

                    <div className="input-block">
                        <label htmlFor="latitude">Latitude</label>
                        <input 
                            type="number"
                            placeholder=" latitude"
                            name="latitude"
                            id="latitude"  
                            required 
                            value={latitude} 
                            onChange={event => setLatitude( event.target.value )}        

                        />
                    </div>
                </div>

                <button type="submit">Salvar</button>
            </form>
        </>
    );
}