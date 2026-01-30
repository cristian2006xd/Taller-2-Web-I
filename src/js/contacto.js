import 'flowbite'; 

const formulario = document.getElementById("formulario");
const nombre = document.getElementById("username");
const email = document.getElementById("email");
const telefono = document.getElementById("telefono");
const fecha = document.getElementById("fecha");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const terminos = document.getElementById("terms");

const patrones = {
    nombre: /^[a-zA-ZÀ-ÿ\s]{3,16}$/, 
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, 
    passw: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/, 
    telefono: /^\d{7,14}$/ 
}

const mostrarError = (input, idError) => {
    const mensajeError = document.getElementById(idError);
    if(mensajeError) mensajeError.classList.remove("hidden");
    input.classList.add("border-red-500", "ring-1", "ring-red-500");
    input.classList.remove("border-gray-200");
}

const eliminarError = (input, idError) => {
    const mensajeError = document.getElementById(idError);
    if(mensajeError) mensajeError.classList.add("hidden");
    input.classList.remove("border-red-500", "ring-1", "ring-red-500");
    input.classList.add("border-gray-200");
}

formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    let formularioValido = true;

    if(!patrones.nombre.test(nombre.value)) {
        mostrarError(nombre, "error-username");
        formularioValido = false;
    } else {
        eliminarError(nombre, "error-username");
    }

    if(!patrones.email.test(email.value)) {
        mostrarError(email, "error-email");
        formularioValido = false;
    } else {
        eliminarError(email, "error-email");
    }

    if(!patrones.telefono.test(telefono.value)) {
        mostrarError(telefono, ""); 
        formularioValido = false;
    } else {
        eliminarError(telefono, "");
    }

    if(fecha.value === "") {
        mostrarError(fecha, "");
        formularioValido = false;
    } else {
        eliminarError(fecha, "");
    }

    if(!patrones.passw.test(password.value)) {
        mostrarError(password, "error-password");
        formularioValido = false;
    } else {
        eliminarError(password, "error-password");
    }

    if(confirmPassword.value !== password.value || confirmPassword.value === "") {
        mostrarError(confirmPassword, "error-confirmPassword");
        formularioValido = false;
    } else {
        eliminarError(confirmPassword, "error-confirmPassword");
    }

    if(formularioValido) {
        alert("¡Registro Exitoso! Bienvenido a NeoDrive.");
        console.log("Datos enviados correctamente.");
        formulario.reset();
    }
});