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
  

function openModal(title) {
    const modal = document.getElementById('program-modal');
    document.getElementById('modal-title').textContent = title;
    document.getElementById('modal-desc').innerHTML = programData[title] || '<p>Information coming soon.</p>';
    modal.classList.add('show');
  }
  
  function closeModal() {
    const modal = document.getElementById('program-modal');
    modal.classList.remove('show');
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('a[href]');
  
    links.forEach(link => {
      // Skip external links and hash links
      const isExternal = link.hostname !== window.location.hostname;
      const isHash = link.getAttribute('href').startsWith('#');
  
      if (!isExternal && !isHash) {
        link.addEventListener('click', function (e) {
          e.preventDefault();
          const href = this.getAttribute('href');
  
          document.body.classList.add('fade-out');
  
          setTimeout(() => {
            window.location.href = href;
          }, 250); // match your CSS transition duration
        });
      }
    });
  });
  