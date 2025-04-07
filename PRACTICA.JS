
//gracias a global, se puede ejecutar en consola el js el console, mas bien global this pertenece a js 
globalThis.console.log('hola mundo')
//sistema clasico de modulos de node js
//.js -> por defecto utiliza commonjs
//.mjs -> para utilizar ES modules
//.cjs -> para utilizar commonjs
/*
let signo='*';
let nombres_lista=['acc','b','c']
let max_lengt=Math.max(...nombres_lista.map(nombres_lista=> nombres_lista.length))
let height=nombres_lista.length+2;

let marco=""
let width=max_lengt+4;
console.log(height)
var o=0;
for (let i=0;i<height;i++){
    if (i==0 || i==height-1){
        marco+=("*".repeat(width))
        marco+="\n"
    }
    else{
        marco+=(`* ${nombres_lista[o]}${' '.repeat((max_lengt-nombres_lista[o].length)+1)}*`)
        o+=1;
        marco+="\n"
    }
    
}
console.log(marco.slice(0,-1))*/

