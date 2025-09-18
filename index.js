friendsList = []
input_amigo = document.querySelector("#input_nome_amigo");

function atualizarDisplayAmigos(){
    displayAmigos = document.querySelector(".display_de_amigos");
    displayAmigos.innerHTML = " ";
    for(let i = 0; i < friendsList.length; i++){
        element = friendsList[i];
        displayAmigos.appendChild(document.createTextNode(element))
        displayAmigos.appendChild(document.createElement("b"))
    }
    
    
}
function includeFriend(){
    
    console.log("including " + input_amigo.value)
    friendsList.push(input_amigo.value)
    input_amigo.value = ""
    
    console.log(friendsList)
    atualizarDisplayAmigos()
}

function sortearAmigo(lista){
    let i = lista.length;
    let indice_sorteado =Math.floor(Math.random() * i);
    return lista[indice_sorteado];
    
}

function iniciateGame(){
    console.log("iniciate")
    amigo_sorteado = sortearAmigo(friendsList);
    console.log("o seu amigo secreto eh: " + amigo_sorteado);
    document.querySelector(".resultado_jogo").innerHTML = ("o seu amigo secreto eh: " + amigo_sorteado)
    document.querySelector(".botao_iniciar_jogo").disabled = true;
    document.querySelector(".botao_reiniciar_jogo").disabled = false;
}
function restartGame(){
    friendsList = []
    atualizarDisplayAmigos()
    document.querySelector(".resultado_jogo").innerHTML = " "
    document.querySelector(".botao_iniciar_jogo").disabled = false ;
    document.querySelector(".botao_reiniciar_jogo").disabled = true;
}

document.querySelector(".botao_reiniciar_jogo").addEventListener("click", restartGame)
document.querySelector(".botao_incluir_amigo").addEventListener("click", includeFriend);
document.querySelector(".botao_iniciar_jogo").addEventListener("click", iniciateGame);