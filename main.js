const pizza = ["Harina", "Levadura", "Sal", "Agua", "Aceite", "Azúcar", "Salsa","Queso", "Orégano", "Aceitunas"]; 

function contarIngredientes(ingredienes) {
   let pares = [];
    let impares = [];
    for (i = 0; i < pizza.length; i++){
        let count = pizza[i].length;
    
        if (count % 2 === 0) {
            pares.push(pizza[i]);
        }
        else {
            impares.push(pizza[i]);
        }
    }
    return(console.log(`Los ingredientes pares son ${pares}`),
    console.log(`Los ingredientes impares son ${impares}`));
      
}






contarIngredientes(pizza);