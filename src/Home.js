import React from 'react'
import Header from "../src/components/header";
import Footer from "../src/components/footer";
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