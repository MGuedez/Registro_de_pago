function resetClass(element, classname) {
    element.classList.remove(classname);
}

document.getElementsByClassName("show-register")
[0].addEventListener("click", function(){
    console.log("hola");
    let form = document.getElementsByClassName("container-form")[0];
    resetClass(form, "query");
    form.classList.add("register");
    document.getElementById("button").innerText = "Registrar"
    document.getElementsByClassName("subtitle")[0].innerText = "Formulario de registro"
});

document.getElementsByClassName("show-query")
[0].addEventListener("click", function(){
    let form = document.getElementsByClassName("container-form")[0];
    resetClass(form, "register");
    form.classList.add("query");
    document.getElementById("button").innerText = "Consultar"
    document.getElementsByClassName("subtitle")[0].innerText = "Formulario de Consulta"
});