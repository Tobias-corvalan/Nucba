
function numeros_pares(lista, indice, tamaño){

    if(indice === tamaño){
        return 0;
    }
    if(indice <= tamaño){
        if(lista[indice] % 2 == 0){
            console.log(lista[indice])
            return 1 + numeros_pares(lista,indice + 1,tamaño);
        }else{
            return numeros_pares(lista, indice + 1, tamaño);
        }
    }
}

class  Pizza{
    
    constructor(id,nombre,precio){
        this.id = id;
        this.nombre = nombre;
        this.ingrediente=[];
        this.precio = precio;
    }

    agregar_ingrediente(ingredientes){
        this.ingrediente.push(ingredientes)
    }
    
}


let cantidad_pizza = parseInt(prompt("Ingrese la cantidad de pizzas que va a necesitar: "));
let lista_pizza = [];
id = 0
for(let i = 0; i < cantidad_pizza; i++){

    id++
    let nom = prompt("Ingrese nombre: ");
    let  precio = parseInt(prompt("Ingrese precio: "));
    let cantidad_ingre = parseInt(prompt("Ingrese cant ingre: "));
 
    const pizza = new Pizza(id,nom,precio);
    lista_pizza.push(pizza)

    for(let j = 0; j < cantidad_ingre; j++){

        let ingrediente = prompt("Ingrese ingrediente: ");
        pizza.agregar_ingrediente(ingrediente)
    }


}



//a)  Las pizzas que tengan un id impar.
const pizza_id = lista_pizza.filter(pizza => pizza.id % 2 !== 0);
console.log("Las pizzas con id impar son las siguientes:")
pizza_id.forEach(pizza => console.log(`${pizza.nombre}`))


//b) ¿Hay alguna pizza que valga menos de $600?
/*for(let i = 0; i < lista_pizza.length; i++){
    let pizza_1 = lista_pizza[i];
    if(pizza_1.precio <= 600){
        console.log(`La Pizza ${pizza_1.nombre} vale menos de $600`);
    }
}*/
const pizza_menor = pizza => pizza.precio < 600;
if(lista_pizza.some(pizza_menor)){
    console.log("Hay pizzas menores a $600")
}else{
    console.log("No hay pizzas menores a $600")
}

//c) El nombre de cada pizza con su respectivo precio.
lista_pizza.forEach(pizza => console.log(`La pizza ${pizza.nombre} tiene un precio de $${pizza.precio}`));

//d) Todos los ingredientes de cada pizza (En cada iteración imprimir los ingredientes de la pizza actual).

lista_pizza.forEach(pizza => {

    console.log(`La pizza ${pizza.nombre} tiene los siguientes ingredientes:`)
    pizza.ingrediente.forEach(ing => console.log(`${ing}`));
})
//Todo esto conveniente hacerlo con metodos


//DOM


//HAY TRES FORMAS DE "TRAER" ELEMENTOS DEL HTML

/*
1-document.getElementById("logo")
2-document.getElementByClassName("logo-2") 
3-document.getElementByTagName("a") //agarra directamente la etiqueta html; ejemplo: a,p,div,li,span,etc.-
4-document.querySelector("p") //elemento html,#(id),clases, se buscan todos los tipos especificando bien y en este caso solo busca el primero que encuentre
5-document.querySelectoAll
A los elementos HTML se los trata como objetos, esto quiere decir que hay un metodo que busca(los anteriores mencionados) y una propiedad a reemplazar o mostrar

para reemplazar un valor o agregar:
*/

document.getElementById("logo").innerHTML = "Texto que se quiere mostrar";
const a = document.getElementById("logo")
//console.log(a)
//console.log(a.innerHTML = "hola mundo")
//console.log(a.innerText) //muestra el texto que hay dentor de a
//console.log(a.textContent)//idem anterior
//a.textContent = "hola tobias" //sirve para cambiar texto en pagina

const footerItems = document.getElementsByClassName("footer-item");
//console.log(footerItems);
const footerItemsArray = [...footerItems];

//footerItemsArray.forEach(element => console.log(element.textContent));


const alldivs = document.getElementsByTagName("div");

//console.log(alldivs);

const alldivsArray = [...alldivs];

//alldivsArray.forEach(elementodiv => console.log(elementodiv.innerHTML));//este nos muestra con las etiquetas

alldivsArray.forEach((elementosdiv)=>{
   //console.log(elementosdiv.textContent);//este solo el texto dentro de las etiquetas
})


const allLi = document.querySelector(".footer-item");

//console.log(allLi);

const allLi_2 = document.querySelectorAll(".footer-item");

//console.log(allLi_2);

const allLiArray = [...allLi_2];

//allLiArray.forEach(elemento => console.log(elemento.textContent));

//Funcionalidades del Browser

setTimeout(() => {
   //console.log("Pasaron 3 seg")
   //location.reload()
},3000) //Esta funcion se ejecuta despues que pase esa x cantidad de tiempo.

let contador = 0;
setInterval(() => {
    //console.log(`pasaron ${contador} segundos`)//para hacer los backticks ctrl+ALT+ TECLA ARRIBA DERECHA DEL ENTER
    //contador++
},1000);//Esta funcion se ejecuta cada 1 seg 

//console.log(location);
//console.log(navigator)

const p = document.querySelector(".saludo");

function saludar(){
    //let imprimir = prompt("Ingrese su nombre");
    //p.textContent = `Hola ${imprimir}`;
    //p.innerHTML = `Hola <strong>${imprimir}</strong>`;//Para agregar elementos html se utiliza el innerHTML
}

saludar()


let nombre = "Sabiot";
let contraseña = "Sabiot20122."

console.log(contraseña.startsWith(nombre,0))