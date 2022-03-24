let body = document.querySelector("body")//querySelector, seleciona um elemento dentro do documento, "." é classe, "#" é id.
let divL = document.createElement("divL")
divL.setAttribute("id","lampada")
let divB = document.createElement("divB")
divB.setAttribute("id","interruptor")
let ligado=document.createElement("img")
ligado.setAttribute("src","./img/ligado.png")
let acesa=document.createElement("img")
acesa.setAttribute("src","./img/acesa.png")
acesa.setAttribute("id", "inverter")
ligado.setAttribute("class", "button");

divL.append(acesa)
divB.append(ligado)
body.append(divL)
body.append(divB)

ligado.onclick=function(){
    if(acesa.getAttribute("src")=="./img/acesa.png"){
        acesa.setAttribute("src", "./img/apagada.png")
        acesa.setAttribute("class", "ajuste-on")
        ligado.src="./img/desligado.png"
        body.style.background="#000"
        
    }else{
        acesa.setAttribute("src", "./img/acesa.png")
        acesa.setAttribute("class", "ajuste-off")
        body.style.background="#fff"
        ligado.src="./img/ligado.png"
        }   
    }