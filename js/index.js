function mostrarFutbol() {
    document.getElementById("historia-futbol").style.display = "block";         document.getElementById("historia-programacion").style.display = "none"; document.getElementById("historia-futbol").scrollIntoView({ behavior: "smooth" });
} 

function cerrarFutbol() { document.getElementById("historia-futbol").style.display = "none"; document.getElementById("intereses").scrollIntoView({ behavior: "smooth" }); } 

function mostrarProgramacion() { document.getElementById("historia-programacion").style.display = "block"; document.getElementById("historia-futbol").style.display = "none"; document.getElementById("historia-programacion").scrollIntoView({ behavior: "smooth" }); } 

function cerrarProgramacion() { document.getElementById("historia-programacion").style.display = "none"; document.getElementById("intereses").scrollIntoView({ behavior: "smooth" }); } 

function mostrarMensaje() { document.getElementById("mensaje").innerHTML = "🔥 ¡Gracias por visitar Santiago.com! 🔥"; } 