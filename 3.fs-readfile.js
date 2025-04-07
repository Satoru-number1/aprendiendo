const { error } = require('node:console')
const fs = require('node:fs')
const { text } = require('node:stream/consumers')
console.log("Leyendo el primer archivo")
const text = fs.readFile('cmjs/je.txt','utf-8',(err,text)=>{


    
})//bien lo que hace es leer el archivo de forma sincrona, el primer parametro es deee la ubicacion del archivo en este caso txt, si se lo deja asi nomas nos devuelve el contenido del fichero en bytes
console.log(text)
console.log("Haciendo otra cosas")
//ahora el segundo parametro es de la conversion de los bytes de este
console.log("leyendo el segundo archivo")
const text1 = fs.readFile('./archivo.txt','utf-8')
console.log(text1)
//aqui el problema con la sincrono(que es el manejo de 1 hilo, es decir que va de forma secuecial  ) y como se bloquea el hilo
//ahora para leer un archivo de forma asincrona es con readFile

//callbacks son funciones que se ejecutan cuando una tarea ha finalizado o terminado, entonces en el read file, ahora debera tener otro parametro el cual sera un callback