console.log(46)
console.log('no me sale')


let domi = document.getElementById('direccion')

let titulo = document.getElementById("titulo")

let boton1 = document.getElementById("boton1")

let cantidad = document.getElementById("cantidad")

let categoria = document.getElementById("inputState")

let totalpagar = document.getElementById("total")

console.log(domi)

console.log(titulo)

console.log(boton1)

console.log(cantidad)

console.log(categoria)

console.log(totalpagar)


boton1.addEventListener('click', probando)

function probando(){
    
    // titulo.innerHTML = categoria.value

    if(categoria.value=="estudiante"){
4
        // titulo.innerHTML = categoria.value
        // totalpagar.innerHTML
        totalpagar.value = (200*cantidad.value)-(cantidad.value*200*0.8)

    }else if (categoria.value=="trainee"){ 
        totalpagar.value = (200*cantidad.value)-(cantidad.value*200*0.5)

          

    }else{

        totalpagar.value = (200*cantidad.value)-(cantidad.value*200*0.15)

    

    }

    
    



}


