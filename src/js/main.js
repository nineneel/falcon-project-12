const navMenu = document.getElementById("nav-menu"),
    navToggle = document.getElementById("nav-toggle"),
    navClose = document.getElementById("nav-close");

/*===== MENU SHOW =====*/
if (navToggle) {
    navToggle.addEventListener("click", () => {
        navMenu.classList.add("show-menu");
    });
}

/*===== MENU HIDDEN =====*/
if (navClose) {
    navClose.addEventListener("click", () => {
        navMenu.classList.remove("show-menu");
    });
}

const faqList = document.querySelectorAll(".faq-answer-wrapper"),
    faqBtnList = document.querySelectorAll(".faq-item");

faqBtnList.forEach((e, i) => {
    e.addEventListener("click", () => {
        isSame = false;
        faqList.forEach((element, j) => {
            if (i == j && element.classList.contains("faq-show")) isSame = true;
            element.classList.remove("faq-show");
        });
        if (!isSame) faqList[i].classList.add("faq-show");
    });
});
