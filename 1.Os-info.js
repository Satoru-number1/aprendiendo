//modulos nativos de node js, da accedo a sistema de archivos, internet,etc
//informacion del sistema operativo
const os = require('node:os')

console.log('Informacion del sistema operativo: ')
console.log("---------------------------------")
console.log('Nombre del sistema operativo ', os.platform())
console.log('Version del sistema operativo ', os.release())

console.log('Arquitectura', os.arch())
console.log('CPus', os.cpus())
console.log('Memoria libre ', os.freemem()/1024/1024)
console.log('Memoria total', os.totalmem()/1024/1024)


console.log('uptime', os.uptime()/60/60)