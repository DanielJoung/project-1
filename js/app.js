const navToggle = document.querySelector(".nav-toggle");
const linkContainer = document.querySelector(".link-container")
const links = document.querySelector(".links")

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
