let usuarios=[]

function guardar(event){
    event.preventDefault();
    const nombre = document.getElementById('nombre').value.trim();
    const cedula = document.getElementById('cedula').value.trim();
    const correo = document.getElementById('correo').value.trim();
    const telefono = document.getElementById('telefono').value.trim();
   
    const usuario={nombre, cedula, correo, telefono}

    usuarios.push(usuario)
    alert("El usuario fue guardado")
    renderizarUsuarios()
    document.getElementById('usuarios').reset();
}

function buscar(event){
    event.preventDefault();
    const buscarcc= document.getElementById('buscarcc').value.trim();

    for (let i = 0; i < usuarios.length; i++) {
        
        if (usuarios[i].cedula === buscarcc) {
            alert(`Usuario encontrado: ${usuarios[i].nombre}`)
            document.getElementById('buscar').reset();
            renderizarUsuarios()
            return usuarios[i]
        }
        
    }
    document.getElementById('buscar').reset();
    alert("Usuario no existe")
    renderizarUsuarios()
    return null

}

function eliminar(event){
    event.preventDefault();
    const eliminarcc= document.getElementById('eliminarcc').value.trim();

    for (let i = 0; i < usuarios.length; i++) {
        
        if (usuarios[i].cedula === eliminarcc) {
            usuarios.splice(i,1)
            alert("Usuario eliminado") 
            document.getElementById('eliminar').reset();
            renderizarUsuarios()
            return;
  
        }
        
    }
    alert("usuario no encontrado")
    document.getElementById('eliminar').reset();
    renderizarUsuarios()
}

function actualizar(event){
    event.preventDefault();
    const actualizarcc= document.getElementById('actualizarcc').value.trim();
    
    for (let i = 0; i < usuarios.length; i++) {
        if (usuarios[i].cedula===actualizarcc) {
            const nombrenuevo = prompt("Ingrese el nuevo nombre:", usuarios[i].nombre) || usuarios[i].nombre;
            const correonuevo = prompt("Ingrese el nuevo correo:", usuarios[i].correo) || usuarios[i].correo;
            const telefononuevo = prompt("Ingrese el nuevo teléfono:", usuarios[i].telefono) || usuarios[i].telefono;
            usuarios[i] = {nombre: nombrenuevo,cedula: actualizarcc,correo: correonuevo,telefono: telefononuevo}
            alert("Usuario actualizado")
            document.getElementById('actualizar').reset();
            renderizarUsuarios()
            return;
        } 
    }
    alert("usuario no existe")
    document.getElementById('actualizar').reset();
    renderizarUsuarios()
}

function renderizarUsuarios() {
    const listaUsuarios = document.getElementById('UsuariosList');
    listaUsuarios.innerHTML = ''; // Limpiar la lista antes de renderizar

    usuarios.forEach(usuario => {
        const li = document.createElement('li');
        li.textContent = `Nombre: ${usuario.nombre}, Cédula: ${usuario.cedula}, Correo: ${usuario.correo}, Teléfono: ${usuario.telefono}`;
        listaUsuarios.appendChild(li);
    });
}

document.getElementById('usuarios').addEventListener('submit', guardar);
document.getElementById('buscar').addEventListener('submit', buscar);
document.getElementById('eliminar').addEventListener('submit', eliminar);
document.getElementById('actualizar').addEventListener('submit', actualizar);