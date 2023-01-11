const hamburger = document.querySelector(".header__btn");
const navMenu = document.querySelector(".header__menu_list-items");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    // document.body.style.overflow = "hidden";
});

document.querySelectorAll(".header__menu_list-items_item_item-link").forEach(n => n.
    addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
        document.body.style.overflow = "scroll";
    }));

// btn-up
window.addEventListener("scroll", function () {
    if (this.window.pageYOffset > 300) {
        goTopBtn.classList.add("btn-up-show")
    }
    else {
        goTopBtn.classList.remove("btn-up-show")
    }
})

let goTopBtn = document.querySelector(".btn-up");

goTopBtn.addEventListener("click", function backToTop() {
    if (window.pageYOffset > 0) {
        window.scrollBy(0, -50);
        setTimeout(backToTop, 10)
    }
})