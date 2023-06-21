document.addEventListener("DOMContentLoaded", function() {
    const fadeInElements = document.querySelectorAll(".fadeIn");
  
    function fadeIn() {
      for (let i = 0; i < fadeInElements.length; i++) {
        const element = fadeInElements[i];
        const position = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
  
        if (position < windowHeight) {
          element.classList.add("visible");
        }
      }
    }
  
    // Fade in on page load
    fadeIn();
  
    // Remove the fade-in class for non-selected items
    for (let i = 0; i < fadeInElements.length; i++) {
      const element = fadeInElements[i];
      if (!element.classList.contains("visible")) {
        element.classList.remove("fadeIn");
      }
    }
  });



  document.addEventListener("DOMContentLoaded", function() {
    const fadeInElements = document.querySelectorAll(".fadeInScroll");
  
    function fadeInOnScroll() {
      for (let i = 0; i < fadeInElements.length; i++) {
        const element = fadeInElements[i];
        const position = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
  
        if (position < windowHeight) {
          element.classList.add("visible");
        }
      }
    }
  
    function throttle(callback, delay) {
      let previousCall = new Date().getTime();
      return function() {
        const time = new Date().getTime();
  
        if (time - previousCall >= delay) {
          previousCall = time;
          callback.apply(null, arguments);
        }
      };
    }
  
    // Fade in on page load
    fadeInOnScroll();
  
    // Add fade-in effect on scroll
    window.addEventListener("scroll", throttle(fadeInOnScroll, 200));
  });