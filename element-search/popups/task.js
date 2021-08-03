const modalMain = document.querySelector("modal_main");
modalMain.className += "modal_active";

const modalSucces = document.querySelector("modal_succes");
const closeModal = Array.from(document.getElementsByClassName("modal__close"));
const showSucess = Array.from(modalMain.getElementsByClassName("show-success"));

function close() {
    this.closest("modal_active").classList.remove("modal_active"); 
}

function show_sucess() {
    modalSuccess.classList.add("modal_active");
    modalMain.classList.remove("modal_active");
}

closeModal.forEach(element => element.onclick = close);
success.forEach(element => element.onclick = show_sucess);