function toggleMenu() {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

function toggleDropdown(event) {
    event.preventDefault();
    event.stopPropagation();
    const dropdownParent = event.target.closest('.dropdown-parent');
    dropdownParent.classList.toggle("active");
}

const navLinks = document.querySelectorAll(".nav-link");
navLinks.forEach(link => link.addEventListener("click", (event) => {
    const dropdownParent = event.target.closest('.dropdown-parent');
    if (!dropdownParent) {
        const navMenu = document.querySelector(".nav-menu");
        const hamburger = document.querySelector(".hamburger");
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    }
}));

// Close dropdowns when clicking outside
document.addEventListener("click", function(event) {
    const dropdowns = document.querySelectorAll(".dropdown-parent");
    dropdowns.forEach(dropdown => {
        if (!dropdown.contains(event.target)) {
            dropdown.classList.remove("active");
        }
    });
});
