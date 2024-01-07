const menuBtn = document.getElementById('menu-btn');
const navLinks = document.getElementById('nav-links');
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
    navLinks.classList.toggle('open');

    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-3-line");
});

navLinks.addEventListener("click", (e) => {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-3-line");
});

const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
}

const scrollRevealOption2 = {
    distance: "50px",
    rotate: {
        x: 0,
        y: 180,
        z: 0
    }
}

ScrollReveal().reveal(`
    .header__content h1, 
    .about__content .section__header`, {
    ...scrollRevealOption,
});
ScrollReveal().reveal(`
    .header__content .section__description, 
    .about__content .section__description`, {
    ...scrollRevealOption,
    delay: 500,
});
ScrollReveal().reveal(`
    .header__content .header__btn,
    .about__content .about__btn`, {
    ...scrollRevealOption,
    delay: 1000,
});
ScrollReveal().reveal(`.header__image`, {
    ...scrollRevealOption,
    origin: "top",
    delay: 500,
    duration: 1000
});
ScrollReveal().reveal(`.about__image`, {
    ...scrollRevealOption2,
    delay: 500,
    duration: 1000
});

ScrollReveal().reveal(`.product__card, .article__card`, {
    ...scrollRevealOption,
    interval: 500,
});