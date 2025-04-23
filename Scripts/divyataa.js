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
  
  const track = document.querySelector('.carousel-track');
  const slides = document.querySelectorAll('.carousel-slide');
  const descriptions = document.querySelectorAll('.desc');
  const leftBtn = document.querySelector('.carousel-arrow.left');
  const rightBtn = document.querySelector('.carousel-arrow.right');

  let currentIndex = 0;
  const totalSlides = slides.length;

  function showSlide(index) {
    track.style.transform = `translateX(-${index * 100}vw)`;

    descriptions.forEach((desc, i) => {
      desc.classList.toggle('active', i === index);
    });
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    showSlide(currentIndex);
    resetAutoScroll();
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    showSlide(currentIndex);
    resetAutoScroll();
  }

  leftBtn.addEventListener('click', prevSlide);
  rightBtn.addEventListener('click', nextSlide);

  let autoScroll = setInterval(nextSlide, 6000);

  function resetAutoScroll() {
    clearInterval(autoScroll);
    autoScroll = setInterval(nextSlide, 6000);
  }

  window.addEventListener('resize', () => showSlide(currentIndex));