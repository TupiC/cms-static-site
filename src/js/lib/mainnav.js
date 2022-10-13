export function init() {
    const hamburger = document.querySelector("#hamburger");
    const hamburgerContainer = document.querySelector(".menu");
    hamburger.addEventListener("click", () => {
        if (hamburger.classList.contains("closed")) {
            hamburger.classList.add("open");
            hamburger.classList.remove("closed");
            hamburgerContainer.classList.add('hamburgerContainer');
        } else {
            hamburger.classList.add("closed");
            hamburger.classList.remove("open");
            hamburgerContainer.classList.remove('hamburgerContainer');

        }
    })
}
