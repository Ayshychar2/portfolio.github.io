

function toggleMenu() {
    document.getElementById("navLinks").classList.toggle("active");
  }

 const dropdownToggle = document.querySelector('.dropdown-toggle');
  const dropdownMenu = document.querySelector('.dropdown-menu');

  dropdownToggle.addEventListener('click', function (e) {
    e.preventDefault();
    dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
  });

  // Close dropdown if clicked outside
  window.addEventListener('click', function (e) {
    if (!dropdownToggle.contains(e.target) && !dropdownMenu.contains(e.target)) {
      dropdownMenu.style.display = 'none';
    }
  });

 
  document.querySelector('.btn-resume').addEventListener('click', function(e) {
    e.preventDefault(); // Stop the default #resume behavior

    const link = document.createElement('a');
    link.href = 'resume-ayush.pdf'; // ✅ Update path if inside a folder
    link.download = 'Ayush-Chaurasia-Resume.pdf'; // ✅ File name to be downloaded
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });

  document.addEventListener('DOMContentLoaded', function () {
    const aboutLink = document.getElementById('aboutLink');
    
    if (aboutLink) {
      aboutLink.addEventListener('click', function (e) {
        e.preventDefault();
        // Scrolls 200px down from current position
        window.scrollBy({
          top: 200,
          behavior: 'smooth'
        });
      });
    }
  });
  
  function initSlider(sliderId) {
    const slider = document.getElementById(sliderId);
    const slides = slider.querySelectorAll('img');
    let index = 0;
  
    function showSlide(n) {
      slider.style.transform = `translateX(-${n * 100}%)`;
    }
  
    function nextSlide() {
      index = (index + 1) % slides.length;
      showSlide(index);
    }
  
    function prevSlide() {
      index = (index - 1 + slides.length) % slides.length;
      showSlide(index);
    }
  
    const buttons = document.querySelectorAll(`[data-slider="${sliderId}"]`);
    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        if (btn.classList.contains('next')) nextSlide();
        else prevSlide();
      });
    });
  
    setInterval(nextSlide, 5000); // autoplay
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    initSlider('slider1');
    initSlider('slider2');
  });
  



 



