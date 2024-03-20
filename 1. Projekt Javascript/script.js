const menuIcon = document.querySelector(".icon-menu-wrapper")
const menuList = document.querySelector(".nav-fullscreen")
const hamburgerIcon = document.querySelector(".fa-solid")
const closedIcon = document.querySelector("#icon-menu-closed")

menuIcon.addEventListener("click", () => {
    if (hamburgerIcon.classList[1] === "fa-bars") {
        hamburgerIcon.classList.add("a-circle-xmark")
        hamburgerIcon.classList.remove("fa-bars")
        menuList.style.display = "block"
        closedIcon.style.display = "block"
    } else {
        hamburgerIcon.classList.add("fa-bars")
        hamburgerIcon.classList.remove("a-circle-xmark")
        menuList.style.display = "none" 
        closedIcon.style.display = "none"
    }
})