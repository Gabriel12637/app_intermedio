const input=document.querySelector('input[type="text"]')
const userInput=document.querySelector('#inputUsuario')
const lista=document.querySelector("#lista")
let idCounter=0
const stats=document.querySelector('#stats')

userInput.addEventListener('submit',(event) =>{
    event.preventDefault()
    agregatarea()
})

let agregatarea=()=>{
    idCounter++
    let newValue=input.value
    if (newValue==""){
        alert("no puede tener una tarea vacia")
        return
    }

    lista.innerHTML+=`
    <div class="contenedor-tarea" id="id="${idCounter}>
            <label>
                <input type="checkbox">
                ${newValue}
            </label>
            <img src="./assets/tacho.png" alt="eliminar" class="btnEliminar"
            class="btnEliminar">
        </div>`

        input.value=""
        updatestats()
}
lista.addEventListener('click',(event)=>{
  if(event.srcElement.nodeName==="IMG"){
    deletetask(event.srcElement.parentNode.id)
   }else if(event.srcElement.nodeName==="INPUT"){
    updatestats()
   }
})

let updatestats=()=>{
    let divs=lista.querySelectorAll('div')
    let check=lista.querySelectorAll('input[type="checkbox"]:checked')
    stats.innerHTML=`Tareas: ${divs.length} Completadas: ${check.length}`
}
let deletetask=(id)=>{
    let taskDelete=document.getElementById(id)
    lista.removeChild(taskDelete)
    
}