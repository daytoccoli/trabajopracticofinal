var form = document.getElementById("contact-form");

form.addEventListener("submit", function(event) {
    Event.preventDefault(); // Prevenir el envío del formulario por defecto

    // Obtener los valores de los campos
    var firstName = document.getElementById("first-name").value;
    var lastName = document.getElementById("Apellido").value;
    var email = document.getElementById("Correo").value;
    var startDate = document.getElementById("cuando desea iniciar su seguro").value;
    var insuranceType = document.getElementById("seguro").value;

    // Crear un objeto XMLHttpRequest
    var xhr = new XMLHttpRequest();

    // Configurar la solicitud POST
    xhr.open("POST", "contact.php");
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    // Definir la función de respuesta
    xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
        alert("¡Gracias por contactarnos! Tu mensaje ha sido enviado.");
        form.reset(); // Limpiar el formulario
    }
    };

    // Enviar los datos del formulario
    xhr.send("first-name=" + firstName + "&last-name=" + lastName + "&email=" + email + "&start-date=" + startDate + "&insurance-type=" + insuranceType);
});

