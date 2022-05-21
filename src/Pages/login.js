import React from 'react'
import Header from "../../src/components/header";
import Footer from "../../src/components/footer";
import "../../src/Assets/css/login.css"
import svg from "../../src/Assets/img/password.svg"
import user from "../../src/Assets/img/user.svg"



export default function Login() {

    return (


        <div>
            <Header />

            <div className>
        <div className="main">
          <div className="wrap animated fadeIn">
            <form name="login" action="$(link-login-only)" method="post" />
            <input type="hidden" name="dst" defaultValue="$(link-orig)" />
            <input type="hidden" name="popup" defaultValue="true" />
            <p className="info $(if error)alert$(endif)">
              Olá bem vindo (a) <br /> 
              <br />
            </p>
            <label>
              <img className="ico" src={svg} alt="#" />
              <input className="input_Login" name="username" faultValue="true" type="text" placeholder="NIF" />
            </label>
            <label>
              <img className="ico" src={user} alt="#" />
              <input name="password" type="password" label="false" placeholder="Senha" />
            </label>
            <input type="submit" defaultValue="Conectar" />
            <a href="/gerenciamento">@</a>

            </div>

          </div>

          </div>


          </div>


    )

}