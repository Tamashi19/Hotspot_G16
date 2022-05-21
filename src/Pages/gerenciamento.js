
   
// import React, {useState, useEffect} from "react";
// import axios from 'axios';



// export const campanha = () => {
    
//     // Cadastrar


//     const[imagem] = UseState('');

//     // Listar
//     const[produtos, setProdutos] = UseState([]);


//     const Cadastrar = (event) => {

//       event.preventDefault();
      
//       var formData = new FormData();
      
//       const target = document.getElementById('arquivo')
//       const file = target.files[0]
//       formData.append('arquivo', file, file.name)
      
//       formData.append('id', 0);
//       formData.append('imagem', imagem);

//       axios({
//         method: "post",
//         url: "http://localhost:5001/api",
//         data: formData,
//         headers: { "Content-Type": "multipart/form-data" },
//       })
//       .then(function (response) {
//         console.log(response);
//         Listar();
//       })
//       .catch(function (response) {
//         //handle error
//         console.log(response);
//       });
//     }

//     const Listar = () => {
//       axios.get('http://localhost:5001/api')
//       .then(resposta => {
//         setProdutos(resposta.data);
//       })
//       .catch(erro => console.log(erro))
//     }

//     const Remover = (id) => {
//       axios.delete('http://localhost:5001/api'+id)
//       .then(() => {
//         Listar();
//       })
//       .catch(erro => console.log(erro))
//     }

//     const LerOCR = (event) => {

//       event.preventDefault();

//       var formData = new FormData();

//       const element = document.getElementById("codigo");
//       const file = element.files[0];

//       formData.append("url", file, file.name);

//     }

//     UseEffect(() => {
//       Listar();      
//     },[]);

//     return(
//         <>
//           <main className="container">

//             <h2>Adicionar imagem</h2>
//             <form encType="multipart/form-data">
//               <input
//                 className="input__login"  
                
//               />

//               <input
//                 className="input__login" 
//                 type="text" 
                
//                 id="codigo" 
               
//               />

//               <input 
//                 type="file" 
//                 id="codigo" 
//                 accept="image/png, image/jpeg" 
//                 onChange={(e) => LerOCR(e)} 
//               />

//               <label htmlFor="ativo">
//               <input 
//                 type="checkbox" 
//                 name="ativo" 
//                 id="ativo" 
//                 checked={ativo} 
//                 onChange={(e) => setAtivo(e.target.checked)} 
//               /> Produto ativo? 
//               </label>

//               <input type="file" id="arquivo" accept="image/png, image/jpeg" />

//               <button 
//                 type="submit" 
//                 className="btn btn__cadastro"
//                 onClick={(e) => Cadastrar(e)}
//               >
//                 Cadastrar
//               </button>

//             </form>

          

//             {produtos.map(item => 
//               <div className="card" key={item.id}>
//                 <img src={"http://localhost:5001/StaticFiles/Images/"+item.imagem} alt="" />
//                 <div>
                  
//                   <span>Cadastrado em {new Date(item.dataCadastro).toLocaleDateString()}</span>
//                 </div>
//                 <button className="excluir" onClick={() => Remover(item.id)}>Excluir</button>
//               </div>
//             )}

//           </main>
//         </>
//     )
// }

// export default Gerenciamento;
