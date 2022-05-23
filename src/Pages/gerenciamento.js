import Header from "../components/header";
import React, { useState, useEffect } from "react";
import axios from 'axios';
import Footer from "../components/footer";



export const Gerenciamento = () => {

  // Cadastrar
  const [imagem] = useState('');

  // Listar
  const [imagens, setImagens] = useState([]);

  const Cadastrar = (event) => {

    event.preventDefault();

  

    var formData = new FormData();

    const target = document.getElementById('arquivo')
    const file = target.files[0]
    formData.append('arquivo', file, file.name)

    formData.append('id', 0);
    formData.append('imagem', imagem);

    debugger

    axios({
      method: "post",
      url: "http://localhost:5001/api/Campanha",
      data: formData,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then(function (response) {
        console.log(response);
        Listar();
      })
      .catch(function (response) {
        //handle error
        console.log(response);
      });
  }

  const Listar = () => {
    axios.get('http://localhost:5001/api/Campanha')
      .then(resposta => {
        setImagens(resposta.data);
      })
      .catch(erro => console.log(erro))
  }

  const Remover = (id) => {
    axios.delete('http://localhost:5001/api/Camapanha' + id)
      .then(() => {
        Listar();
      })
      .catch(erro => console.log(erro))
  }

  const LerOCR = (event) => {

    event.preventDefault();

    var formData = new FormData();

    const element = document.getElementById("codigo");
    const file = element.files[0];

    formData.append("url", file, file.name);


  }

  useEffect(() => {
    Listar();
  }, []);

  return (
    <>
      <Header/>
      <main className="container">

        <h2>Adicione uma imagem</h2>
        <form classNeme="escolherArquivo" encType="multipart/form-data">


        <label className="laybel" for="codigo">Enviar arquivo</label>
            
          <input
            type="file" name="codigo" 
            
            id="codigo"
            accept="image/png, image/jpeg"
            onChange={(e) => LerOCR(e)}
          />
          <label className="laybel" for="codigo">Enviar arquivo</label>
          <input
          name="codigo"
            type="file"
            id="codigo"
            accept="image/png, image/jpeg"
            onChange={(e) => LerOCR(e)}
          />
          <label className="laybel" for="codigo">Enviar arquivo</label>
          <input
          name="codigo"
            type="file"
            id="codigo"
            accept="image/png, image/jpeg"
            onChange={(e) => LerOCR(e)}
          />
          <label className="laybel" for="codigo">Enviar arquivo</label>
          <input
          name="codigo"
            type="file"
            id="codigo"
            accept="image/png, image/jpeg"
            onChange={(e) => LerOCR(e)}
          />

          <button
            type="submit"
            className="btn btn__cadastro"
            onClick={(e) => Cadastrar(e)}
          >
            Cadastrar
          </button>

        </form>



        {imagens.map(item =>
          <div className="card" key={item.id}>
            <img src={"http://localhost:5001/StaticFiles/Images/" + item.imagem} alt="" />
            <div>

              <span>Cadastrado em {new Date(item.dataCadastro).toLocaleDateString()}</span>
            </div>
            <button className="excluir" onClick={() => Remover(item.id)}>Excluir</button>
          </div>
        )}

      </main>
      <Footer/>
    </>
  )
}

export default Gerenciamento;