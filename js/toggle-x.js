document.addEventListener("DOMContentLoaded", function() {
    const navbarToggler = document.querySelector(".navbar-toggler");
    const navbarTogglerIcon = navbarToggler.querySelector(".navbar-toggler-icon");

    navbarToggler.addEventListener("click", function() {
        navbarTogglerIcon.classList.toggle("x-icon");
    });
});
