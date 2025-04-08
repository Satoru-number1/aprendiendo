const canvas=document.querySelector('canvas');
const context=canvas.getContext('2d');
//el bloque de los objetos
const size_ob=27;
//esto es cala el tablero, de acuerdo al tamaño


const width_table=15;
const height_table=30;
//el ancho del table sera el objeto 20*15, ese seria en total el ancho de la tabla
canvas.width=size_ob*width_table;

//el ancho del table sera el objeto 20*30, ese seria en total el alto de la tabla
canvas.height=size_ob*height_table;
//
context.scale(size_ob,size_ob);
//context.scale(canvas.height,canvas.width)
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

// //el metodo stroke se usa para dibujar el trazo de una figura o un caminto path en el canvas
// // canvas.stroke();


/*entonces el cuadro deberia ser el ancho del table y la altura del tablero
*/ 
var cuadro =
[
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
    [0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0],
    [0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 1 , 1 , 1 , 1 , 1 , 0]
]
//lo que hace esto es llamar constantemente al dibujo

function actualizar(){
    //context.scale(size_ob,size_ob);
    dibujar();
    window.requestAnimationFrame(actualizar);
    
}
/*


context.scale(size_ob,size_ob);
context.fillStyle="#000";
    
context.fillRect(0,0,canvas.width,canvas.height)


cuadro.forEach((array,posicion_x) => {
       //console.log('Hey que pasa',array);
       
       array.forEach((valor,posicion_y)=>{
        
            if(valor===1){
                //console.log(array);
                //console.log("ctme que xuxa pasa")
                
                console.log("esto esl o que contiene",cuadro[posicion_x][posicion_y])
                context.fillStyle="red";
                
                context.fillRect(posicion_y,posicion_x,1,1);
            }
       });
});
*/

function dibujar(){
    
    context.fillStyle="#000";    
    context.fillRect(0,0,canvas.width,canvas.height);

    cuadro.forEach((array,posicion_x) => {     
        if (posicion_x===0){
            let ale=aleatoriedad();
            if(ale<12){
                read_shapes(primary_l,ale);
            }
            
        }  
           /*array.forEach((valor,posicion_y)=>{
                if(valor===1){
                    //console.log(array);
                    //console.log("ctme que xuxa pasa")
                    //console.log("esto esl o que contiene",cuadro[posicion_x][posicion_y])
                    context.fillStyle="red";  
                    context.fillRect(posicion_y,posicion_x,1,1);
                }
           });*/
    });
}
actualizar();

/*var aux=[]
for (let i=0;i<primary_l[0].length;i++){
    aux.push([]);
    for (let j=0;j<primary_l.length;j++){
        aux[i].push(0)
    };
    console.log(`esta es la ${i+1}`)
};*/

//this function supposwed to read the shape and change the sqare to 1
function read_shapes(shape,posicion_random_square){
    shape.forEach(value_row => {
        console.log("leyendo el shape ")
        value_row.forEach((value_column,index_y) => {
            /*if (value_column===1){
                context.fillStyle="red";  
                context.fillRect(index_y,index_x+posicion_random_square,1,1);
                cuadro[index_x][posicion_random_square+index_y]=1;
            }*/
        });
    });
}   

/**movements of one L
 *  1     1 1               
 *  1       1           1       1 1 1
    1 1     1       1 1 1       1
  */
    const square=[
        [1, 1, 1],
        [1, 1, 1],
        [1, 1, 1],
    ]
    var primary_l=
    [   
        [1, 0, 0],
        [1, 0, 0],
        [1, 1, 0],
    ]
const seond_l=[
    [0, 0, 1],
    [0, 0, 1],
    [0, 1, 1],
]


/**movements second L
 *  1       1 1         
    1       1       1 1 1       1
  1 1       1           1       1 1 1
*/
const linea_reca=[
    [1, 1, 1, 1],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],

]


function aleatoriedad(){
    let shape_random=Math.round(Math.random()*14);
    return shape_random;
    //console.log('este es el numero',shape_random);
}
