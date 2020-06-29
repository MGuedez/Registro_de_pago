function registrar(ref) {
    console.log(ref);

    
    ref.classList.add("click");
    // ref.onclick=null;

    setTimeout(() => {
        ref.classList.remove("click");
        ref.classList.add("enviando");
    }, 350);

    setTimeout(() => {
        ref.classList.remove("enviando");
        ref.classList.add("enviado");
        ref.innerHTML= "&#10004";
        let popup_id = document.getElementById("popup-1");
        popup_id.classList.add("");
    }, 5000); 
}