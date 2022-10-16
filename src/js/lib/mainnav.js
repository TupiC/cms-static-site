export function init() {
    const hamburger = document.querySelector("#hamburger");
    hamburger.addEventListener("click", () => {
        if (hamburger.classList.contains("closed")) {
            hamburger.classList.add("open");
            hamburger.classList.remove("closed");
        } else {
            hamburger.classList.add("closed");
            hamburger.classList.remove("open");
        }
    })
    document.querySelector('.menu').childNodes.forEach(child => {
        child.addEventListener('click', () => {
            hamburger.classList.add("closed");
            hamburger.classList.remove("open");
        })
    });
}
