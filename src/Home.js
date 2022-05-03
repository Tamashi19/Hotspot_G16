import React from 'react'
import Header from "../src/components/header";
import Footer from "../../senaihotspot/src/components/footer";
import "../src/Assets/css/style.css"
import info from "../src/Assets/img/info.png"
import nots from "../src/Assets/img/not.png"
import Modal from 'react-modal';

export default function home() {

    // const [show, setShow] = useState(false);

   function fechar() {
        // document.getElementById('a').style.display = 'none';
        // document.getElementById('b').style.display = 'none';
   }
    return (
        <div>
            <Header/>
            <main>
                <div id="a" className="mdl_chat"><div onclick={fechar()} className="fechar_chat" /></div>
                <div id="b" className="mdl_solicitacoes">
                    <div onclick={fechar()} className="fechar_soli" />
                    <section className="soli">
                        <a href="#">Reset de senha da rede</a>
                        <a href="#">Reset de senha do portal educacional</a>
                        <a href="#">Solicitação e Declaração para almoçar no SESI</a>
                        <a href="#">Solicitação de bilhate SPtrans</a>
                    </section>
                </div>
               
                <section>
                    <img src={info} alt="" />
                </section>
                <div className="container_img">
                    <img className="imagem" src={nots} alt="" />
                    <img className="imagem" src={nots} alt="" />
                    <img className="imagem" src={nots} alt="" />
                </div>
            </main>
            <Footer/>
        </div>


    );
}