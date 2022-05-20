import axios from "axios";

export const LerConteudoDaImagem = async (formData) => {

    let resultado;
    await axios({
        method : "POST",
        url : "",
        data : formData,
        headers : {
            "Content-Type" : "multipart/form-data",
            "Ocp-Apim-Subscription-Key" : "c3d4e190149044b585f84c6465dd2ac5"
        }
    })
    .then(response => {
        // console.log(response)
        resultado = FiltrarOBJ(response.data);
    })
    .catch(erro => console.log(erro))

    return resultado;
}


export const FiltrarOBJ = (obj) => {

    let resultado;

    obj.regions.forEach(region => {
        region.lines.forEach(line => {
            line.words.forEach(word => {
                if(word.text[0] === "1" && word.text[1] === "2"){
                    resultado = word.text;
                }
            });
        });
    });

    return resultado;

}