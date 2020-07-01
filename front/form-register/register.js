function registrar(ref) {
    console.log(ref);
    ref.classList.add("click");
    ref.onclick=null;

    setTimeout(() => {
        ref.classList.remove("click");
        ref.classList.add("enviando");
    }, 350);

    setTimeout(() => {
        ref.classList.remove("enviando");
        ref.classList.add("enviado");
        ref.innerHTML= "&#10004";
    }, 5000); 
}