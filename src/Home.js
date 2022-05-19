import React from 'react'
import Header from "../src/components/header";
import Footer from "../src/components/footer";
import "../src/Assets/css/style.css"
import info from "../src/Assets/img/info.png"
import an1 from "../src/Assets/img/anuncio_1.png"
import an2 from "../src/Assets/img/anuncio_2.png"
import an3 from "../src/Assets/img/anuncio_3.png"
import Modal from 'react-modal';

export default function home() {

    // const [show, setShow] = useState(false);

   function fechar() {
        // document.getElementById('a').style.display = 'none';
         //document.getElementById('b').style.display = 'none';
   }
    return (
        <div>
            <Header/>
            <main>
               <div className="containerMain">
                <section>
                    <img className="banner"src={info} alt="" />
                </section>
                <div className="container_img">
                    <img className="imagem" src={an1} alt="" />
                    <img className="imagem" src={an2} alt="" />
                    <img className="imagem" src={an3} alt="" />
                </div>

               </div>
            </main>
            <Footer/>
        </div>


    );
}