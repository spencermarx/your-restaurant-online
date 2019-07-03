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
