// ======================
// COMPONENT - Smooth Scroll to Sections via Anchor
// ======================

// Cache HTML & Body (Jquery)
const $root = $('html, body');

// Define vertical space to offset scroll position up
const moveUp = 110;

// Add event listener for anchor click
$(document).on('click', 'a[href^="#"]', function(event) {
  event.preventDefault();

  $root.animate(
    {
      scrollTop: $($.attr(this, 'href')).offset().top - moveUp,
    },
    500
  );
});
