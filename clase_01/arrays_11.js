console.log('Ejercicio 11...')

const nombres = [ "sara", "bernardo", "andres"] 

let nombres_sin_espacio = nombres.map((nombre) => {
  return nombre.replace('sara', 'majadito')
})


console.log('esta sara?: ' + nombres.includes("sara"))


// Ahora crea un nuevo array con el array nombres pero reemplaza las letras 'a' y 'o'  por una 'x'