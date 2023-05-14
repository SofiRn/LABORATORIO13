function agregarTarea(){
    const validarTarea = document.getElementById("task-input").value
    const tarea = new Tarea (validarTarea, "TODO")
    let lista = localStorage.getItem("lista")
    if (lista === null){
        lista = [tarea]
        const listaString = JSON.stringify(lista)
        localStorage.setItem("lista", listaString)
    } else{
        let listaJSON = JSON.parse(lista)
        let listaTareas = []
        for(let i = 0; i < listaJSON.length; i++){
            const obj = listaJSON[i]
            const objTarea = new Tarea(obj.desc, obj.status)
            listaTareas.push(objTarea)
        }
        listaTareas.push(tarea)
        const listaString = JSON.stringify(listaTareas)
        localStorage.setItem("lista", listaString)
    }
    renderAll()
}

function renderAll(){
    const divTodo = document.getElementById("todo")
    const divDoing = document.getElementById("doing")
    const divDone = document.getElementById("done")

    divTodo.innerHTML = ""
    divDoing.innerHTML = ""
    divDone.innerHTML = ""
    let lista = localStorage.getItem("lista")
    if(lista !== null){
        let listaJSON = JSON.parse(lista)
        for(let i = 0; i < listaJSON.length; i++){
            const obj = listaJSON[i]
            const objTarea = new Tarea(obj.desc, obj.status)
            if (objTarea.status === "TODO"){
                divTodo.innerHTML += objTarea.html(i)
            } else if (objTarea.status === "DOING"){
                divDoing.innerHTML += objTarea.html(i)
            }else{
                divDone.innerHTML += objTarea.html(i)
            }
        }
    }
}


function actualizarTarea(pos){
    let lista = localStorage.getItem("lista")
    let listaJSON = JSON.parse(lista)
    let tarea =listaJSON[pos]
    if(tarea.status === "TODO"){
        tarea.status = "DOING"
    } else if (tarea.status === "DOING"){
        tarea.status = "DONE"
    }

    let listaTareas = []
    for (let i = 0; i < listaJSON.length; i++) {
        const obj = listaJSON[i]
        const objTarea = new Tarea(obj.desc, obj.status)
        listaTareas.push(objTarea)
    }
    const listaString = JSON.stringify(listaTareas)
    localStorage.setItem("lista", listaString)
    renderAll()
}

renderAll()

/*function eliminarTarea(){
    document.getElementById("eliminar").addEventListener("click", () => {
        divTodo.innerHTML = "";
        tarea.slice(index, 1);
        let listaJSON = JSON.stringify(tarea);
        window.localStorage.setItem("tarea", listaJSON);
        renderAll();
})}

function retroceder(){
    document.getElementById("retroceder").addEventListener("click", () => {
        divTodo.innerHTML = "";
        element.status = element.status - 1;
        let listaJSON = JSON.stringify(tarea);
        window.localStorage.setItem("tarea", listaJSON);
        renderAll();
    })
}*/

function eliminarTarea(pos) {
    let lista = localStorage.getItem("lista");
    let listaJSON = JSON.parse(lista);
    listaJSON.splice(pos, 1);
    const listaString = JSON.stringify(listaJSON);
    localStorage.setItem("lista", listaString);
    renderAll();
  }

  function retroceder(pos) {
    let lista = localStorage.getItem("lista");
    let listaJSON = JSON.parse(lista);
    let tarea = listaJSON[pos];
    if (tarea.status === "DOING") {
      tarea.status = "TODO";
    } else if (tarea.status === "DONE") {
      tarea.status = "DOING";
    }

    const listaString = JSON.stringify(listaJSON);
    localStorage.setItem("lista", listaString);
    renderAll();
  }