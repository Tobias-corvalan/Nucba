
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

for(let i = 0; i < cantidad_pizza; i++){

    let id = parseInt(prompt("Ingrese id: "));
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

for(let i = 0; i < lista_pizza.length; i++){
    console.log(lista_pizza[i]);
}
