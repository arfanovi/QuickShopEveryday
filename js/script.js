document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.getElementById("menu-toggle");
    const menuItems = document.querySelector(".hidden.md\\:flex");

    menuToggle.addEventListener("click", function() {
        menuItems.classList.toggle("hidden");
    });
});
