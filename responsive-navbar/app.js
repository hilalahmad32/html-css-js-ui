const navbar = document.querySelector("#navbar");
const btn = document.querySelector("#btn");
// 
btn.addEventListener("click", () => {
    if (btn.innerText == 'Show') {
        btn.innerText = 'Hide';
        navbar.classList.add('nav_active')
    } else {
        btn.innerText = 'Show';
        navbar.classList.remove('nav_active')
    }
})