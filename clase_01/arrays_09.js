console.log('Ejercicio 09...')

const meses = ['enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre']
const dias = ['lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado', 'domingo']


let meses_minuscula = meses.map((mes) => {
  return mes.toLowerCase()
})

console.log('meses_maysucula: ' + meses_minuscula)


// Ahora crear un array con los dias de la semana en MAYUSCULAS usando la funcion map