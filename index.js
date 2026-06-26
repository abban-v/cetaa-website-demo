const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
});

const navbar=document.querySelector("div.navbar");
const divsInNavbar=navbar.querySelectorAll("div");
divsInNavbar.forEach((div)=>(div.classList.add("scroll-text")));

const hiddenElements = document.querySelectorAll('.scroll-text');

hiddenElements.forEach((el) => observer.observe(el));