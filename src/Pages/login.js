import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios'; 

import { parseJwt, usuarioAutenticado } from '../../src/services/auth';
import '../../src/Assets/css/login.css';

import '../../src/services/auth';
import Header from "../components/header";
import svg from "../../src/Assets/img/password.svg";
import user from "../../src/Assets/img/user.svg";




export default function Login(){
  const [nif, setNif] = useState('');
  const [pwd, setPwd] = useState('');
  const [isLoading]=useState(false);

  const [error, setError] = useState('')

  let history = useNavigate();


  function fazerlogin(event) {

    event.preventDefault();
      
    setError('')

    axios.post('https://localhost:5001/api/Login', {
      NIF: nif,
      Senha : pwd
    })
    .then(rs =>
      { 
        localStorage.setItem('usuario-login', rs.data.token);
        history('/gerenciamento')
        
      })
      .catch(() => {
        setError( 'NIF ou senha inválidos.')
      })

      console.log(nif)
      console.log(pwd)
    }

    return (


      <div>
        <Header />

        <div className>
          <div className="main">
            <div className="wrap animated fadeIn">

              <form name="login" onSubmit={fazerlogin}>             
                  <p className="info $(if error)alert$(endif)">
                    Olá bem vindo (a) <br />
                    <br />
                  </p>

                  <label>
                    <img className="ico" src={svg} alt="#" />
                    <input 
                        className="input_Login" 
                        name="username" 
                        faultValue="true" 
                        type="text" 
                        placeholder="NIF" 
                        // define que o input email recebe o valor do state email
                        value={nif}
                        // faz a chamada para a função que atualiza o state, conforme o usuário altera o valor do input
                        onChange={event => setNif(event.target.value)}
                   />
                  </label>

                  <label>
                    <img className="ico" src={user} alt="#" />
                    <input 
                        className="input_Login"
                        // senha
                        type="password"
                        name="senha"
                        // define que o input senha recebe o valor do state senha
                        value={pwd}
                        // faz a chamada para a função que atualiza o state, conforme o usuário altera o valor do input
                        onChange={event => setPwd(event.target.value)}
                        placeholder="Senha"/>
                  </label>
                  <input type="submit" defaultValue="Conectar" />
            </form> 
            </div>

          </div>

        </div>


      </div>


    )

}
