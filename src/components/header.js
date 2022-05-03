import "../Assets/css/style.css"
import React from 'react'
import LOGO from "../Assets/img/LOGO_B.png"



function acao_chat() {
  // document.querySelector('.mdl_chat').style.display = 'block'
  
}
function acao_soli() {
  
  // document.querySelector('.mdl_solicitacoes').style.display = 'block';
  
}
export default function Header() {
  return (
    
    <div>
      <header>
        <div className="container">
          <div className="header_container">
            <img src={LOGO} alt="" />
            <div className="modal">
              <div className="btn" onclick={acao_chat()}>chat</div>
              <div className="btn" onclick={acao_soli()}>solicitações</div>
              <a className="btn" href="">manual do aluno</a>
            </div>
          </div>
        </div>
      </header>
    </div> 
  );
}
