import Header from "../components/header";
import React, { useState, useEffect } from "react";
import axios from 'axios';
import Footer from "../components/footer";
import { append } from "dom/lib/mutation";



export const Gerenciamento = () => {

  // Cadastrar
  const [imagem, setImagem] = useState();
  // Listar
  const [imagens, setImagens] = useState([]);

  const Cadastrar = (event) => {
    event.preventDefault();
    var formData = new FormData();
    
    const target = document.getElementById('imagem')
    console.log(target)
    const file = target.files[0]
    console.log(file)

    if (target.files[0] == undefined) {
      console.log("tá undefined")
      formData.append('File', file)
  } else {
      formData.append('File', file, file.name)
  }
   
    // formData.append('file', file, file.name)
    // formData.append('id', 0);
    // formData.append('imagem', imagem);
console.log(formData)
    
    axios({
      method: "post",
      url: "https://localhost:5001/api/Campanha",
      data: formData,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (response) {
        //handle error
        console.log(response);
      });
  }

  function Listar () {
    axios.get('https://localhost:5001/api/Campanha')
      .then(resposta => {
        setImagens(resposta.data);
      })
      .catch(erro => console.log(erro))
  }

  function Remover  (id) {
    axios.delete('https://localhost:5001/api/Camapanha' + id)
      .then(() => {
        Listar();
      })
      .catch(erro => console.log(erro))
  }

  // const LerOCR = (event) => {

  //   event.preventDefault();

  //   var formData = new FormData();

  //   const element = document.getElementById("codigo");
  //   const file = element.files[0];

  //   formData.append("url", file, file.name);


  // }

  useEffect(() => {
    Listar();
  }, []);

  return (
    <>
      <Header />
      <main className="container">

        <div className="containerImput">
          <h2>Adicione uma imagem</h2>
          <form className="escolherArquivo" encType="multipart/form-data">

{/* 
            <div className="imp1"> */}
              <label className="laybel" htmlFor="codigo">Enviar arquivo</label>

              <input
                type="file"
                name="imagem"
                id="codigo"
                accept="image/png, image/jpeg"
                // onChange={(e) => LerOCR(e)}
              />
            {/* </div> */}
            {/* <div className="inputs"> */}
              {/* <label className="laybel" htmlFor="codigo">Enviar arquivo</label>
              <input
                name="codigo"
                type="file"
                id="codigo"
                accept="image/png, image/jpeg"
                // onChange={(e) => LerOCR(e)}
              /> */}
              {/* <label className="laybel" htmlFor="codigo">Enviar arquivo</label>
              <input
                name="codigo"
                type="file"
                id="codigo"
                accept="image/png, image/jpeg"
                // onChange={(e) => LerOCR(e)}
              />
              <label className="laybel" htmlFor="codigo">Enviar arquivo</label>
              <input
                name="codigo"
                type="file"
                id="codigo"
                accept="image/png, image/jpeg"
                // onChange={(e) => LerOCR(e)}
              /> */}

            {/* </div> */}
            {/* <div className="botao"> */}

              <button
                type="submit"
                className="btn btn__cadastro"
                onClick={Cadastrar}
              >
                Cadastrar
              </button>
            {/* </div> */}

          </form>




          </div>
          {imagens.map(item =>
            <div className="card" key={item.id}>
              <img src={"https://localhost:5001/StaticFiles/Images/" + item.imagem} alt="" />
              <div>

                {/* <span>Cadastrado em {new Date(item.dataCadastro).toLocaleDateString()}</span> */}
              </div>
              <button className="excluir" onClick={() => Remover(item.id)}>Excluir</button>
            </div>
          )}


      </main>
      <Footer />
    </>
  )
}

export default Gerenciamento;