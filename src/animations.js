// Smooth scrolling and transition logic
export function initScrollAnimations() {
    const hero = document.getElementById('hero');
    const greenBox = document.getElementById('greenBox');
    const downloadButton = document.getElementById('downloadButton');
  
    // Scroll listener for button behavior
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY;
      const heroHeight = hero.offsetHeight;
  
      // Transition the download button to the bottom of the screen
      if (scrollY > heroHeight * 0.5) {
        downloadButton.classList.add('fixed', 'bottom-4', 'right-4', 'bg-primary-light');
        downloadButton.classList.remove('hover:bg-primary');
      } else {
        downloadButton.classList.remove('fixed', 'bottom-4', 'right-4', 'bg-primary-light');
        downloadButton.classList.add('hover:bg-primary');
      }
    });
  
    // Intersection Observer for greenBox visibility
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // If hero is in view, make the greenBox visible
            greenBox.classList.add('visible');
            greenBox.classList.remove('hidden');
          } else {
            // If hero is not in view, hide the greenBox
            greenBox.classList.add('hidden');
            greenBox.classList.remove('visible');
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the hero is in view
    );
  
    observer.observe(hero);
  }
  