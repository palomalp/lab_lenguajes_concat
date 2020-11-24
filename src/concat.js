//2. CONCAT.

//Implementea una función concat, tal que, dados 2 arrays como entrada, devuelva la concatenación de ambos.Utilizar rest y spread operators.

const animals = ["snail", "turtle", "camel"];
const colours = ["brown", "gree", "pink"];

const concat = (array1, array2) => {
    return [...array1] + "," + [...array2]
}

console.log (concat(animals, colours));



//Implementa una versión del ejercicio anterior donde se acepten múltiples arrays de entrada (más de 2).
