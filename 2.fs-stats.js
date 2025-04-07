//file system modulos mas importantes de nodejs
const fs = require('node:fs') //apartir de node 16 se recomienda usar los 2 puntos mas node 

//const stat = fs.statSync('cmjs/je.txt')
const stat = fs.statSync('./archivo.txt')
console.log(
    stat.isFile(), //si es un fichero
    stat.isDirectory(), //si es un directorio
    stat.isSymbolicLink(), //si es un enlace simbolico
    stat.size   //tamaño en bytes

)