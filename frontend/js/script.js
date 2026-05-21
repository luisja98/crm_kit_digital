function mostrarMensaje() {
    document.getElementById("mensaje").innerHTML =
        "Sistema CRM funcionando correctamente";
}

document.getElementById("formularioCliente").addEventListener("submit", function (evento) {
    evento.preventDefault();

    let nombre = document.getElementById("nombre").value;
    let email = document.getElementById("email").value;
    let empresa = document.getElementById("empresa").value;
    let telefono = document.getElementById("telefono").value;
    let servicio = document.getElementById("servicio").value;

    if (nombre === "" || email === "" || empresa === "" || telefono === "" || servicio === "") {
    return;
}

    let tabla = document.getElementById("tablaClientes");

    let fila = document.createElement("tr");

    fila.innerHTML =
        "<td>" + nombre + "</td>" +
        "<td>" + email + "</td>" +
        "<td>" + empresa + "</td>" +
        "<td>" + telefono + "</td>" +
        "<td>" + servicio + "</td>" +
        "<td><button class='botonEliminar' onclick='eliminarFila(this)'>Eliminar</button></td>";

    tabla.appendChild(fila);

    document.getElementById("formularioCliente").reset();

    actualizarContador();
});

function eliminarFila(boton) {
    boton.parentElement.parentElement.remove();

    actualizarContador();
}

function actualizarContador() {
    let total = document.getElementById("tablaClientes").rows.length;

    document.getElementById("clientesRegistrados").innerHTML = total;
}