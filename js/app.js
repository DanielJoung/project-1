const deck = {
    number : ["2","3","4","5","6","7","8","9","10","J","Q","K","A"],
    shape: ["❤️","♠","☘️","🔹"]
}

const navToggle = document.querySelector(".nav-toggle");
const linkContainer = document.querySelector(".link-container")
const links = document.querySelector(".links")
const randomNumber = Math.floor(Math.random() * deck.number.length)
const randomShape = Math.floor(Math.random() * deck.shape.length)


navToggle.addEventListener("click", () => {
    const containerHeight = linkContainer.getBoundingClientRect().height;
    const linksHeight = links.getBoundingClientRect().height;
    if(containerHeight === 0) {
        linkContainer.style.height = `${linksHeight}px`
        setTimeout(() => {linkContainer.style.height = 0},5000)
    }else {
        linkContainer.style.height = 0
    }
})
