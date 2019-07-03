// ======================
// Utilities - Main Utilities
// ======================

// Create promise
function createPromise(callback){
    var promise = new Promise(function(resolve, reject) {
        callback;
        resolve("Success");
      });
    return promise;
};

// Evaluate if element is visible
function isScrolledIntoView(element) {
  var rect = element.getBoundingClientRect();
  var elementTop = rect.top;
  var elementBottom = rect.bottom;

  // Only completely visible elements return true:
  var isVisible = (elementTop >= 0) && (elementBottom <= window.innerHeight);

  // Partially visible elements return true:
  //isVisible = elemTop < window.innerHeight && elemBottom >= 0;
  return isVisible;
}