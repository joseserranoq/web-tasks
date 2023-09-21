function agregarTarea() {
    const tarea = document.getElementById("tarea")
    const lista = document.getElementById("miLista");
    const nuevoElemento = document.createElement("li");
    nuevoElemento.id = lista.children.length + 1;
    //agrego el checkbox
    const checkbox = document.createElement("input");
    nuevoElemento.textContent = tarea.value ;
    checkbox.type = "checkbox";
    checkbox.onchange = contador();
    nuevoElemento.appendChild(checkbox);
    //agrega el boton
    const boton = document.createElement("button");
    boton.textContent = "X";
    nuevoElemento.appendChild(boton);

    tarea.value = "";
    lista.appendChild(nuevoElemento);
    contador();
  }

function contador(){
    const lista = document.getElementById("miLista");
    const contador = document.getElementById("contador");
    console.log(lista.children);
    for (const i in lista.children){
        console.log(i.children[0].checked);
    }
    contador.textContent = "Tareas pendientes: "+ lista.children.length;
}