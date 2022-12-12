const labWrapper = document.querySelectorAll(".lab-wrapper");
[...labWrapper].forEach(item => {
    item.addEventListener("click", function () {
        const box = this.nextElementSibling
        const icon = this.lastElementChild
        box.classList.toggle("active")
        icon.classList.toggle("active")
    })
})