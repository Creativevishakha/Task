// Add any interactivity here, such as dynamic content loading or animations
document.addEventListener('DOMContentLoaded', function() {
    console.log("Blog page loaded");
  });
  function toggleText(element) {
    const excerpt = element.previousElementSibling;  // Selects the <p> element containing the excerpt
    const moreText = excerpt.querySelector('.more-text');  // Selects the hidden text part
  
    if (moreText.style.display === "none") {
      // Show more text
      moreText.style.display = "inline";
      element.textContent = "Read Less";
      element.classList.add('expanded');
    } else {
      // Hide the extra text
      moreText.style.display = "none";
      element.textContent = "Read More";
      element.classList.remove('expanded');
    }
  }
  
  // Initial setup to hide all "more-text" parts
  document.addEventListener('DOMContentLoaded', function() {
    const moreTexts = document.querySelectorAll('.more-text');
    moreTexts.forEach(function(moreText) {
      moreText.style.display = 'none';
    });
  });
    