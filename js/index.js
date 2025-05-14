import { conteudo} from "./bd.js"

// Selecionar os botões
let btns = document.querySelectorAll('button')

btns.forEach(btn =>{
    btn.onclick = pressButton
})
// btns[0].onclick = pressButton
// btns[1].onclick = pressButton
// btns[2].onclick = pressButton
// btns[3].onclick = pressButton
// btns[4].onclick = pressButton

function pressButton(e){

    //origem do evento
    let alvo = e.target
    let value = parseInt(alvo.value)
    
    // seleção
    let h2 = document.querySelector('h2')
    let descricao = document.querySelector('p')

    let obj = editarObjeto(value)

    // Editar
     h2.textContent = obj.h2
     descricao.textContent = obj.descricao
}


function editarObjeto(value){
    var obj = {
        h2: "",
        descricao: ""
    }

    switch (value) {
        case 1:
            obj.h2 = conteudo[0].titulo
            obj.descricao = conteudo[0].descricao
            break;
    }

    return obj
}