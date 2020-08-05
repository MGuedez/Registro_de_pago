// cambio de texto e interarccion entre los botones de registrar y consultar 
function resetClass(element, classname) {
    element.classList.remove(classname);
}

document.getElementsByClassName("show-register")
[0].addEventListener("click", function(){
    console.log("hola");
    let form = document.getElementsByClassName("form")[0];
    resetClass(form, "query");
    form.classList.add("register");
    document.getElementById("submit-btn").innerText = "Registrar"
    document.getElementsByClassName("subtitle")[0].innerText = "Formulario de registro"
});

document.getElementsByClassName("show-register")
[0].addEventListener("click", function(){
    let text = document.getElementsByClassName("description")[0];
    resetClass(text, "query");
    text.classList.add("register");
    document.getElementsByClassName("title")[0].innerText = "Verificación de pago"
    document.getElementsByClassName("text")[0].innerText = "Una vez registrado tu pago, podrás hacerle seguimiento al proceso de verificación en el formulario de consulta."
});

document.getElementsByClassName("show-query")
[0].addEventListener("click", function(){
    let form = document.getElementsByClassName("form")[0];
    resetClass(form, "register");
    form.classList.add("query");
    document.getElementById("submit-btn").innerText = "Consultar"
    document.getElementsByClassName("subtitle")[0].innerText = "Formulario de Consulta"
});

document.getElementsByClassName("show-query")
[0].addEventListener("click", function(){
    let text = document.getElementsByClassName("description")[0];
    resetClass(text, "register");
    text.classList.add("query");
    document.getElementsByClassName("title")[0].innerText = "Registro de pago"
    document.getElementsByClassName("text")[0].innerText = "Registrar tu pago nos permitirá tener un control y garantizar una mejor gestion de entrega"
});
