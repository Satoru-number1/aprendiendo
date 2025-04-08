function solution(l, fares){
    const user_Uber=20;
    const name_ubers=["UberX","UberXL","UberPLus","UberBlack","UberSUV"]

    var aux='';
    fares.forEach((element,index) => {
        if ((l*element)<=user_Uber){
            aux=name_ubers[index];
            console.log(name_ubers[index])
            console.log(aux)
        }
        
        console.log('aqui ',l*element)
    });
    return aux;
}

// const fare=[1,2,3,4,5];
// let s=solution(19,fare)
// console.log(s)


function solution_find_minstree(departure,destination){
    let departure_x=departure[0];
    let departure_y=departure[1];
    let destination_x=destination[0]
    let destination_y=destination[1]
    let aux_x=Math.min(departure_x,Math.round(destination_x))
    let aux;
    let aux2
    if (departure_x>=destination_x){
        aux=Math.abs(Math.round(departure_x)-departure_x)
        aux2=Math.abs(Math.round(destination_x)-destination_x)
        //+destination_x+(Math.abs(destination_y-departure_y))
        console.log("Estes es el resultado 1 ",aux+aux2+Math.abs(destination_y-departure_y))
    }
    else{
        aux=Math.round(destination_x)
        destination_x=Math.abs(aux-destination_x)  
        aux2=Math.abs(aux-departure_x)

        console.log("este es el resultado 2 ",aux2+destination_x+Math.abs(destination_y-departure_y))
    }
}
// let desti=[3.7,2.8]
// let depar=[1.2,0.5]
// solution_find_minstree(depar,desti)

//clases u objetos en js

function findJavaScript(matrix) {
    let a=[-1,-1]
    // tu código aquí
    matrix.forEach((valor,index)=>{

        console.log(valor,index)
      valor.forEach((val1,ind)=>{

        console.log(val1,ind)
        if (val1==="JavaScript"){
          console.log("hola")
            a= [index,ind]

        }
      });
    })
    return a
  }
const matrix = [
    ['HTML', 'CSS', 'JavaScript'],
    ['Java', 'C++', 'Python'],
    ['Ruby', 'Go', 'Swift']
  ]
// let a=findJavaScript(matrix)
// console.log(a)
// let a=[1,2,3,4,5]
// console.log(a.includes(20))

//funcion flecha
const numa = (a,b) => {
  return a+b
  
//son anonimas, y son expresiones que quiere decir que debe ser variables
}//el nombre que quieras, tambien puede haber un return implicito es quitando los corchetes y poner a lado lo que quieres que devuevla\
//console.log(numa(1,2))


//funciona recursiva
function  cuenta_atras(numero){
  if (numero<0){return }
  console.log(numero)
  cuenta_atras(numero-1)
  
}
console.log()

function factoria(num){
  if (num===1 || num===0){return 1 }
  else {
    return num*factoria(num-1)
  }
  
}

function suma_n(n){
  if (n===0){
    return 0
  }
  else{
    return n+suma_n(n-1)
  }
}
function fibonnaci(n){
  if (n<=1){return n}
  else{
    return fibonnaci(n-1)+fibonnaci(n-2)
  }
}
// factoria(3)
// console.log(suma_n(5))
// console.log(fibonnaci(5))
//funcion some
let emo=['casa', 'asa', 'taza']
function findin(word){

  return emo.every(pal=> pal.endsWith("a"))
}

// el sort por defecto ordenara los numeros en funcion de su valor como cadena de texto, no de su valor numerico
//aqui hay 3 reglas para el ordenamiento
let ar=[2,1,40,14,19,7]
//console.log(ar.findIndex((ele)=>ele<))
console.log(ar.sort())

let words=['casa', 'coche']
let word='casa'

function buscaPalabras(words, word) {
  // tu código aquí
  let a=words.findIndex(palabra=> palabra===word)
  console.log('soy a ',a)
  let c=words.filter((element)=> element.length>a)
  console.log(c)
  return c
}
buscaPalabras(words,word)

console.log("quetald1");