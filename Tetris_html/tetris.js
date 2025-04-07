const canvas=document.querySelector('canvas');
const context=canvas.getContext('2d');
//el bloque de los objetos
const size_ob=27;
//esto es cala el tablero, de acuerdo al tamaño
context.scale(size_ob,size_ob)

const width_table=15;
const height_table=30;
//el ancho del table sera el objeto 20*15, ese seria en total el ancho de la tabla
canvas.width=size_ob*width_table;

//el ancho del table sera el objeto 20*30, ese seria en total el alto de la tabla
canvas.height=size_ob*height_table;

// // canvas.rect(30,50,100,100);
// // canvas.fillStyle='blue';
// // canvas.fill();
// // // tsx.fillStyle= "blue";
// // // tsx.fillRect(2,2,size_ob,100);
// // //el beginPath comienza una nueva ruta vaciando la lista de subrutas, es como crear otra linea digamos
// // canvas.beginPath();
// // //el move to seria como el punto inicial de la recta
// // canvas.moveTo(20,20);
// // //el line to seria donde finaliza la linea , un ejemplo seria el punto a(moveto)=0,10 b(lineto)=20,45
// // canvas.lineTo(100,30);
// //si se quiere agregar otra linea, entonces esta continuara desde el ultimo linetop
// // canvas.lineTo(200,50);
// // canvas.lineTo(100,100);
// // canvas.lineTo(20,20);
// // canvas.strokeStyle="red";

// //el metodo stroke se usa para dibujar el trazo de una figura o un caminto path
// // canvas.stroke();


/*entonces el cuadro deberia ser el ancho del table y la altura del tablero
*/ 
var cuadro =[
    [0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0],    
    [0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0],    
    [0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0],
    [0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0],
    [0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0],    
    [0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0],
    [0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0],
    [0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0],
    [0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0],
    [0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0],
    [0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0],
    [0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0],
    [0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0],
    [0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0],
    [0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0],
    [0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0],
    [0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0],
    [0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0],
    [0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0],
    [0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0],
    [0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0],
    [0 , 0,  0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0],
    [0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0],
    [0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0],
    [0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0],
    [0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0],
    [0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0],
    [0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0],
    [0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 1],
    [1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1]
]
//lo que hace esto es llamar constantemente al dibujo
function actualizar(){
    dibujar()
    window.requestAnimationFrame(actualizar)
}
function dibujar(){
    
    context.fillStyle="#000";
    context.fillRect(0,0,canvas.width,canvas.height)
    
  
    cuadro.forEach((array,posicion_x) => {
           //console.log('Hey que pasa',array);
           
           array.forEach((valor,posicion_y)=>{
            
                if(valor===1){
                    //console.log("ctme que xuxa pasa")
                    //console.log("esto esl o que contiene",cuadro[posicion_x][posiocion_y])
                    context.fillStyle="red";
                    context.fillRect(posicion_x,posicion_y,size_ob,size_ob);
                }
           })
    });
}
actualizar();
const square=[
    [1, 1],
    [1, 1],
]
const ele=
[   [1, -1],
    [1, -1],
    [1, 1],
]
const ele_larga=[
    [0, 0, 1],
    [1, 1, 1],
]
const linea_reca=[
    [1],
    [1],
    [1]
]

