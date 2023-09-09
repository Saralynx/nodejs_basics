console.log('Ejercicio 10...')

const random_array = [ 1, 4, 7, 10 ]


let nuevo_random_array = random_array.map((item) => {
  return item * 100
})

let newdiezmil = random_array.map((equis) => {
  if (equis >= 6){
  let zeta = equis - 100 
  return zeta + 2 }
else 
return equis * 2 
})
  
console.log('Nuevo array: ' + newdiezmil)


// Ahora crear un array con los dias de la semana en MAYUSCULAS usando la funcion map