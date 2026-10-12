let nav = document.querySelector("nav")
let page = document.querySelector('#page')
let buy = document.querySelector(".buy")
let modal = document.querySelector(".modal")
let close = document.querySelector(".close")











function handlScrol() {
    let scrolledPiels = window.scrollY
    if (scrolledPiels >= 80) {
        nav.classList.add('show')
        page.classList.add('show')
    }else{
        nav.classList.remove("show")
        page.classList.remove("show")
    }
    window.addEventListener("scroll", handlScrol)
}
handlScrol()

function openBag() {
    modal.classList.toggle("hide")
}
buy.addEventListener("click", () => {
    openBag()
})
close.addEventListener("click", () => {
    openBag()
})
openBag()


