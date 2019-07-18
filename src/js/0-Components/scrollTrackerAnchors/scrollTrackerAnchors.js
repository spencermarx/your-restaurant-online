// ======================
// COMPONENT - Scroll Based Anchor Highlighting
// ======================

// Select/Cache sections (Jquery)
const $sections = $('section');

// Select/Cache Navbar Links (Jquery)
const $navLinks = $('a.nav-link');

// Determine lowest visible section
function getLowestVisibleSection() {
  // Define tracker to record visibility
  const sectionTracker = {
    hero: false,
    features: false,
    benefits: false,
    quote: false,
    inquiry: false,
    contact: false,
  };

  // Define array of keys corresponding to tracker
  const sectionTrackerKeys = Object.keys(sectionTracker);

  // For each section check if it is visible
  for (let i = 0; i < $sections.length; i++) {
    // Has element been reached
    const positionCheckCurrent = hasBeenReachedOnScroll($sections[i], 300);

    // Has next element been reached
    const positionCheckNext = hasBeenReachedOnScroll($sections[i + 1], 300);

    // Record visibility in section tracker
    if (
      positionCheckCurrent &&
      (!positionCheckNext || positionCheckNext === false) &&
      sectionTracker[sectionTrackerKeys[i + 1]] === false
    ) {
      sectionTracker[sectionTrackerKeys[i]] = true;
      return i;
    }
  }
}

// Set appropriate nav link to active
function setNavLinkToActive() {
  const currentSectionIndex = getLowestVisibleSection();

  console.log(currentSectionIndex);

  // Remove active from all other nav links
  $navLinks.removeClass('sm--navbar__active-link');

  // Add active class to corresponding nav link
  $navLinks.eq(currentSectionIndex).addClass('sm--navbar__active-link');
}

// Add event listener for anchor click
$(document).on('scroll', function(event) {
  setNavLinkToActive();
});
