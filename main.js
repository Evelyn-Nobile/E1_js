// // const pizza = ["Harina", "Levadura", "Sal", "Agua", "Aceite", "Azúcar", "Salsa","Queso", "Orégano", "Aceitunas"]; 

// // function contarIngredientes(ingredienes) {
// //    let pares = [];
// //     let impares = [];
// //     for (i = 0; i < pizza.length; i++){
// //         let count = pizza[i].length;
    
// //         if (count % 2 === 0) {
// //             pares.push(pizza[i]);
// //         }
// //         else {
// //             impares.push(pizza[i]);
// //         }
// //     }
// //     return(console.log(`Los ingredientes pares son ${pares}`),
// //     console.log(`Los ingredientes impares son ${impares}`));
      
// // }






// // contarIngredientes(pizza);

// //  E2:Crear el array de objetos "Pizzas". 🍕
// // 👉 Debemos crear 6 objetos como mínimo.
// // 👉 Cada objeto debe tener definido su id (1,2,3,etc), nombre, ingredientes (Sobre la base) y precio. (Ingredientes debe ser una lista). 

// // 🔥 Crear una iteración del array que imprima en consola:
// // a) Las pizzas que tengan un id impar.
// // b) ¿Hay alguna pizza que valga menos de $600?
// // c) Los nombres de todos las pizzas.
// // d) Los precios de las pizzas.
// // e) El nombre de cada pizza con su respectivo precio.

// // Cada respuesta debe ser, como siempre, usuario friendly. 
// // Si (como en el punto B), la respuesta es un booleano, no imprimir el booleano. 
// // Manejemos esa respuesta, pensando en que un usuario promedio va a leer eso. 

// // Por ejemplo: "La pizza X, tiene un valor de $XXXX”. 💸


// let pizzas = [
//      {
//     id: 1,
//      nombre: "Mozzarella", 
//      ingredienes: ["Salsa de Tomate", "Mozzarella", "Orégano", "Aceitunas"], 
//      precio: 950,
     
// },

// {
//     id: 2, 
//     nombre: "Fugazza", 
//     ingredienes: ["Salsa de Tomate", "Mozzarella", "Cebolla", "Orégano", "Aceitunas"], 
//     precio: 1150,
  
// },

// {
//     id: 3,
//      nombre: "Napolitana", 
//      ingredienes: ["Salsa de Tomate", "Mozzarella", "Tomate en rodajas", "Ajo",  "Orégano","Aceitunas"], 
//      precio: 1200,
    
// },

// {
//     id: 4, 
//     nombre: "Champiñon", 
//     ingredienes: ["Salsa de Tomate", "Mozzarella", "Champiñones", "Orégano", "Aceitunas"],
//      precio: 1300,
    
// },

// {
//     id: 5, 
//     nombre: "Roquefort", 
//     ingredienes: ["Salsa de Tomate", "Mozzarella", "Roquefort", "Orégano", "Aceitunas"],
//      precio: 1350,
// },

// {
//     id: 6, 
//     nombre: "4 quesos", 
//     ingredienes: ["Salsa de Tomate", "Mozzarella", "Provolone", "Parmesano", "Roquefort", "Orégano", "Aceitunas"], 
//     precio: 1500,
// },

// ]

// // a) Las pizzas que tengan un id impar.
// pizzas.forEach((element)=> {
//     if (element.id % 2 !== 0) {
//         console.log('La pizza con id ' + element.id + ' es impar');
//       }
//     });

// // b) ¿Hay alguna pizza que valga menos de $600?

// if (pizzas.precio < 600){
//     console.log ("En esta lista tenemos pizzas a menos de $600")
// }
// else {
//     console.log ("En esta lista no tenemos pizzas a menos de $600")
// }

// // c) Los nombres de todos las pizzas.
// console.log(`Las variedades de nuestras pizzas son:`)
// pizzas.forEach((element, i)=> console.log(`${i + 1}) ${element.nombre}`));


// // d) Los precios de las pizzas.
// console.log(`Los precios de nuestras pizzas son:`)
// pizzas.forEach((element, i)=> console.log(`${i + 1}) ${element.precio}`));

// // e) El nombre de cada pizza con su respectivo precio.
// pizzas.forEach ((element) => {
// console.log(`La pizza ${element.nombre} cuesta $ ${element.precio}`)
// });


//E3//
let pizzas = [
    {
   id: 1,
    nombre: "Mozzarella", 
    ingredienes: ["Salsa de Tomate", "Mozzarella", "Orégano", "Aceitunas"], 
    precio: 950,
    
},

{
   id: 2, 
   nombre: "Fugazza", 
   ingredienes: ["Salsa de Tomate", "Mozzarella", "Cebolla", "Orégano", "Aceitunas"], 
   precio: 1150,
 
},

{
   id: 3,
    nombre: "Napolitana", 
    ingredienes: ["Salsa de Tomate", "Mozzarella", "Tomate en rodajas", "Ajo",  "Orégano","Aceitunas"], 
    precio: 1200,
   
},

{
   id: 4, 
   nombre: "Champiñon", 
   ingredienes: ["Salsa de Tomate", "Mozzarella", "Champiñones", "Orégano", "Aceitunas"],
    precio: 1300,
   
},

{
   id: 5, 
   nombre: "Roquefort", 
   ingredienes: ["Salsa de Tomate", "Mozzarella", "Roquefort", "Orégano", "Aceitunas"],
    precio: 1350,
},

{
   id: 6, 
   nombre: "4 quesos", 
   ingredienes: ["Salsa de Tomate", "Mozzarella", "Provolone", "Parmesano", "Roquefort", "Orégano", "Aceitunas"], 
   precio: 1500,
},

]
  

  const mostrarNumber = document.getElementById('mostrar-number');
  const bntEnviar = document.getElementById('btn');
  const nombrePizza = document.getElementById('nombres-pizzas');
  const precioPizza = document.getElementById('precios-pizzas');
  let pizza = '';
  

  bntEnviar.addEventListener('click', mostrarInput);
  
  function mostrarInput() {
  
    pizza = buscarId(mostrarNumber.value);

    if (pizza == undefined) {
     nombrePizza.textContent = `No se encontro resultado con la busqueda id: ${mostrarNumber.value}`;
     precioPizza.textContent = '';
    } else {
      nombrePizza.textContent = pizza.nombre;
     precioPizza.textContent = pizza.precio;
    }

  mostrarNumber.value = '';
  }
  
  function buscarId(idPizza) {
    
    let pizza = pizzas.find((elemento) => elemento.id == idPizza);
    console.log(pizza);
  
   
    return pizza;
  }
  







     
        
 
      