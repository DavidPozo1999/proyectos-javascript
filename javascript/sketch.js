//Dato recogido por teclado
const button=document.querySelector(".sendSquare");
let num="";
button.addEventListener("click", ()=>{
    do{
        let cadena=prompt("Elige un numero entre 1 y 100");
        num=parseInt(cadena);
    }while(num<1 || num > 100)
    getGrid(num);
})

//Creación de 16 divs dentro de un contenedor
function getGrid(number){
    const container=document.querySelector(".container-sketch");
    container.style.gridTemplateRows=`repeat(${number},1fr)`;
    container.style.gridTemplateColumns=`repeat(${number},1fr)`;
    for(let i=0; i<number*number;i++){
        let div=document.createElement("div");
        div.setAttribute("class","grid-item");
        div.classList.add("grid-item");
        container.appendChild(div);
    }
    alt();
}


//Funcion para generar un número aleatorio
function randomNumber(){
    let number=Math.floor(Math.random()*256);
    return number;
}

function alt(){
const items=document.querySelectorAll(".grid-item");
    items.forEach(item=>{
        item.addEventListener("mouseenter", (event)=>{
            item.style.backgroundColor=`rgb(${randomNumber()},${randomNumber()},${randomNumber()})`;
        })
    })
}