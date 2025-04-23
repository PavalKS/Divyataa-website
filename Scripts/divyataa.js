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

document.addEventListener('DOMContentLoaded', () => {
    const loader = document.querySelector('.loader');
  
    // 1. Hide loader after initial tiles animation completes
    loader.addEventListener('transitionend', (e) => {
      if (e.propertyName === 'width' && loader.classList.contains('loader--active')) {
        loader.classList.remove('loader--active');
      }
    }, { once: true });
  
    // 2. Before navigating away, replay the tile loader, then go
    document.querySelectorAll('.nav-link').forEach(link => {
      // skip dropdown toggles
      if (link.parentElement.classList.contains('dropdown-parent')) return;
  
      link.addEventListener('click', e => {
        e.preventDefault();
        loader.classList.add('loader--active');
        loader.offsetWidth; // force reflow to restart transitions
        setTimeout(() => window.location = link.href, 700);
      });
    });
  });
  
  