function agregarTarea() {
    const tarea = document.getElementById("tarea")
    const lista = document.getElementById("miLista");
    const nuevoElemento = document.createElement("li");
    nuevoElemento.id = `li${lista.children.length + 1}`;
    
    //agrega el boton input delete
    const boton = document.createElement("input");
    boton.id = `boton${lista.children.length + 1}` ;
    boton.type = "button";
    boton.className = "delete";
    boton.value = "X";
    boton.addEventListener("click", function(event){
        let lista = document.getElementById("miLista");
        let slice = event.target.id.slice(5); //obtiene el numero del boton
        lista.removeChild(document.querySelector(`#li${slice}`));
        actualizarId(); //se setean los nuevos id de acuerdo a su posicion en la lista, ademas de setear el atributo for del label
        contador();
        //console.log('Ha sido removido la tarea');
    });
    nuevoElemento.appendChild(boton);
    //nuevoElemento.textContent = tarea.value; create text node
    //agrego el checkbox
    const checkbox = document.createElement("input");
    checkbox.id = `check${lista.children.length + 1}`;
    checkbox.type = "checkbox";
    checkbox.className = "check";
    checkbox.addEventListener("click", contador);
    nuevoElemento.appendChild(checkbox);
 
    //agrego el texto
    const texto = document.createElement("LABEL");
    texto.id = `label${lista.children.length + 1}`;
    texto.setAttribute("for", checkbox.id);
    texto.textContent = tarea.value;
    //const texto = document.createTextNode(tarea.value);
    nuevoElemento.appendChild(texto);

    tarea.value = "";
    lista.appendChild(nuevoElemento);
    contador();
  }

  //cuenta las Tareas pendientes
function contador(){
    //const lista = document.getElementById("miLista");
    const contador = document.getElementById("contador");
    const lista = document.getElementsByClassName("check");
    var checks = 0;
    //console.log(lista)
    for (var i in lista){
         if(!lista[i].checked && lista[i].checked != undefined){
             //console.log(lista[i].checked)
             checks++;
         }
    }
    contador.textContent = "Tareas pendientes: "+ checks;
}

function actualizarId(){
    const lista = document.getElementById("miLista");
    for (var i = 0; i < lista.children.length; i++){
        lista.children[i].id = `li${i+1}`;
        lista.children[i].children[0].id = `boton${i+1}`;
        lista.children[i].children[1].id = `check${i+1}`;
        lista.children[i].children[2].id = `label${i+1}`;
        lista.children[i].children[2].setAttribute("for", `check${i+1}`);
    }
}