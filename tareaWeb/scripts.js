function agregarTarea() {
    const tarea = document.getElementById("tarea")
    const lista = document.getElementById("miLista");
    const nuevoElemento = document.createElement("li");
    nuevoElemento.id = `li${lista.children.length + 1}` ;
    //nuevoElemento.textContent = tarea.value; create text node
    //agrego el checkbox
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "check";
    nuevoElemento.appendChild(checkbox);

    //agrego el texto
    const texto = document.createTextNode(tarea.value);
    nuevoElemento.appendChild(texto);

    //agrega el boton
    const boton = document.createElement("button");
    boton.className = "delete";
    boton.textContent = "X";
    nuevoElemento.appendChild(boton);


    tarea.value = "";
    lista.appendChild(nuevoElemento);
    contador();
  }

function contador(){
    const lista = document.getElementById("miLista");
    const contador = document.getElementById("contador");
    var checks = 0;
    //console.log(lista.children)
    for (const i in lista.children){
        // if(i != null){
        //     console.log(i.children[0].checked)};
        console.log(lista.children[i].DOCUMENT_NODE);
        
    }
    contador.textContent = "Tareas pendientes: "+ lista.children.length;
}