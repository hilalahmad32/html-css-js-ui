let modal = document.querySelector("#myModal");
let open = document.querySelector("#openModal");
let close = document.querySelector("#closeModal");


const togglefunction = (value) => {
    modal.style.display = value;
}

open.addEventListener("click", () => { togglefunction("flex") })
close.addEventListener("click", () => { togglefunction("none") })