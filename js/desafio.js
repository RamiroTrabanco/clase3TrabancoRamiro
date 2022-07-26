let nombreApellido = false

while (nombreApellido == false) {
    nombre = prompt("Ingresá tu nombre")
    apellido = prompt("Ingresá tu apellido")
    if (nombre === "Ramiro" || nombre === "Rami" && apellido === "Trabanco") {
        console.log ("Bienvenido,", nombre)
        nombreApellido = true
    } else {
        console.warn ("Nombre y apellido incorrecto")
    }
}