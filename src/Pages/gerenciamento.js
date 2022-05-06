import React from 'react';
import Header from "../../src/components/header";
import Footer from "../../src/components/footer";
import "../../src/Assets/css/style.css";



// class DraggableUploader extends React.Component{
//     constructor(props){
//       super(props);
//       this.state={};
//     }
//   }




export default function Gereciamento() {

    return (
        <div>
            <Header />
            <main>
               
               <section>
                   <input className="input-banner" type="file"id="file-browser-input" name="file-browser-input" 
                   ref={input=>this.fileInput=input}
                   onDragOver={(e)=>{
                           e.preventDefault();
                       e.stopPropagation();
                       }}
                       onDrop={this.onFileLoad.bind(this)}
                       onChange={this.onFileLoad.bind(this)}
                       />
               </section>
               <div className="container_img">
               <input className="input-imagem" type="file"/>
               <input className="input-imagem" type="file"/>
               <input className="input-imagem" type="file"/>
               </div>
           </main>

            <Footer />
        </div>
    )
}