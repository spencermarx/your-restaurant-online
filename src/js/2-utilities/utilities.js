// ======================
// Utilities - Main Utilities
// ======================

// Create promise
function createPromise(callback) {
  const promise = new Promise(function(resolve, reject) {
    callback;
    resolve('Success');
  });
  return promise;
}

// Get cross-browser scroll position for Y-axis
function getScrollY() {
  return window.scrollY || window.pageYOffset || document.body.scrollTop;
}

// Evaluate if element is visible
function isScrolledIntoView(element) {
  const rect = element.getBoundingClientRect();
  const elementTop = rect.top;
  const elementBottom = rect.bottom;

  // Only completely visible elements return true:
  const isVisible = elementTop >= 0 && elementBottom <= window.innerHeight;

  // Partially visible elements return true:
  // isVisible = elemTop < window.innerHeight && elemBottom >= 0;
  return isVisible;
}

// Evaluate if element has been reached on the page
function hasBeenReachedOnScroll(element, offset) {
  if (element) {
    const rect = element.getBoundingClientRect();
    const elementTop = rect.top;

    // Only completely visible elements return true:
    const hasBeenReached = elementTop + offset < window.innerHeight;

    return hasBeenReached;
  }
  return false;
}
