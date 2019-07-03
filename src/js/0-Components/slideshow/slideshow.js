// ======================
// COMPONENT - Slideshow
// ======================

// Select all indicator bar elements
<<<<<<< HEAD
const indicatorBars = document.querySelectorAll(
  '.sm--quotes__quote-indicator-bar'
);

// Select all quote elements
const quotes = document.querySelectorAll('.sm--quotes__quote');

// Default time-based Slideshow Switch
const slideshowTiming = 8000;
let slideshowTimer;

// On scroll reaching visibility begin slideshow timer
// Scroll-based style change
document.addEventListener('scroll', function() {
  const isQuoteVisible = isScrolledIntoView(
    document.querySelector('.sm--quotes')
  );

  // If quote section is visible, start slideshow timer
  if (isQuoteVisible) {
    // Stop Slideshow timing
    clearInterval(slideshowTimer);
    // Reset Slideshow timing
    slideshowTimer = setInterval(runSlideshow, slideshowTiming);
  }
=======
var indicatorBars = document.querySelectorAll('.sm--quotes__quote-indicator-bar');

// Select all quote elements
var quotes = document.querySelectorAll('.sm--quotes__quote');

// Default time-based Slideshow Switch
var slideshowTiming = 8000;
var slideshowTimer;

// On scroll reaching visibility begin slideshow timer
// Scroll-based style change
document.addEventListener("scroll", function () {
    var isQuoteVisible = isScrolledIntoView(document.querySelector('.sm--quotes'));

    // If quote section is visible, start slideshow timer
    if(isQuoteVisible){
         // Stop Slideshow timing
         clearInterval(slideshowTimer);
         // Reset Slideshow timing
         slideshowTimer = setInterval(runSlideshow, slideshowTiming);
    }
>>>>>>> 88b4e4532d5290f15676bbe78b047d11679b5e2a
});

// Slideshow Process
function runSlideshow() {
<<<<<<< HEAD
  // Get current active quote
  const currentQuote = document.querySelector('.sm--quotes__quote-active').id;

  // Get current active quote ID
  const currentQuoteID = currentQuote.substr(currentQuote.length - 1);

  // Calculate Mew Quote ID
  if (parseInt(currentQuoteID) === 3) {
    var newQuoteID = 1;
  } else {
    var newQuoteID = parseInt(currentQuoteID) + 1;
  }

  // Select new quote
  const newQuote = document.querySelector(`#sm--quotes__quote-${newQuoteID}`);

  // Select appropriate indicator bar
  const newIndicatorBar = document.querySelector(
    `#sm--quotes__quote-indicator-bar-${newQuoteID}`
  );

  // Change appearance of other indicator bars
  createPromise(removeIndicatorBarsActive())
    // Change appearance of current indicator bar
    .finally(createPromise(addIndicatorBarActive(newIndicatorBar)));

  // Switch Quote
  switchQuote(newQuote, currentQuoteID);
=======

    // Get current active quote
    var currentQuote = document.querySelector('.sm--quotes__quote-active').id;

    // Get current active quote ID
    var currentQuoteID = currentQuote.substr(currentQuote.length - 1);

    // Calculate Mew Quote ID
    if (parseInt(currentQuoteID) === 3) {
        var newQuoteID = 1;
    } else {
        var newQuoteID = parseInt(currentQuoteID) + 1;
    }

    // Select new quote
    var newQuote = document.querySelector("#sm--quotes__quote-" + newQuoteID);

    // Select appropriate indicator bar
    var newIndicatorBar = document.querySelector("#sm--quotes__quote-indicator-bar-" + newQuoteID);

    // Change appearance of other indicator bars
    createPromise(removeIndicatorBarsActive())
        // Change appearance of current indicator bar
        .finally(createPromise(addIndicatorBarActive(newIndicatorBar)));

    // Switch Quote
    switchQuote(newQuote, currentQuoteID);

>>>>>>> 88b4e4532d5290f15676bbe78b047d11679b5e2a
}

// Note: Attaching listener to document instead
// ...of running for loop to attach event to all
// ... indicator bars (avoiding scope issues)
<<<<<<< HEAD
document.addEventListener(
  'click',
  function(event) {
    // Listen for click on any indicator bar
    if (event.target.matches('.sm--quotes__quote-indicator-bar')) {
      // Stop Slideshow timing
      clearInterval(slideshowTimer);

      // Reset Slideshow timing
      slideshowTimer = setInterval(runSlideshow, slideshowTiming);

      // Get current active quote
      const currentQuote = document.querySelector('.sm--quotes__quote-active')
        .id;
      // Get current active quote ID
      const currentQuoteID = currentQuote.substr(currentQuote.length - 1);
      // Depending on click...

      // Change appearance of other indicator bars
      createPromise(removeIndicatorBarsActive())
        // Change appearance of current indicator bar
        .finally(createPromise(addIndicatorBarActive(event.target)));

      // Make new quote slide in
      switchQuote(event.target, currentQuoteID);
    }
  },
  false
);

// Remove active class from all indicator bars
function removeIndicatorBarsActive() {
  indicatorBars.forEach(function(index) {
    index.classList.remove('sm--quotes__quote-indicator-bar-active');
  });
=======
document.addEventListener('click', function (event) {

    // Listen for click on any indicator bar
    if (event.target.matches('.sm--quotes__quote-indicator-bar')) {

        // Stop Slideshow timing
        clearInterval(slideshowTimer);

        // Reset Slideshow timing
        slideshowTimer = setInterval(runSlideshow, slideshowTiming);


        // Get current active quote
        var currentQuote = document.querySelector('.sm--quotes__quote-active').id;
        // Get current active quote ID
        var currentQuoteID = currentQuote.substr(currentQuote.length - 1);
        // Depending on click...

        // Change appearance of other indicator bars
        createPromise(removeIndicatorBarsActive())
            // Change appearance of current indicator bar
            .finally(createPromise(addIndicatorBarActive(event.target)))

        // Make new quote slide in
        switchQuote(event.target, currentQuoteID);
    }

}, false);

// Remove active class from all indicator bars
function removeIndicatorBarsActive() {
    indicatorBars.forEach(function (index) {
        index.classList.remove("sm--quotes__quote-indicator-bar-active");
    });
>>>>>>> 88b4e4532d5290f15676bbe78b047d11679b5e2a
}

// Add active class to the clicked indicator bar
function addIndicatorBarActive(eventTarget) {
<<<<<<< HEAD
  eventTarget.classList.add('sm--quotes__quote-indicator-bar-active');
=======
    eventTarget.classList.add("sm--quotes__quote-indicator-bar-active");
>>>>>>> 88b4e4532d5290f15676bbe78b047d11679b5e2a
}

// Add active class to the clicked indicator bar
function switchQuote(eventTarget, currentQuoteID) {
<<<<<<< HEAD
  switch (eventTarget.id) {
    case 'sm--quotes__quote-indicator-bar-1':
      slideQuote(1, currentQuoteID);
      break;
    case 'sm--quotes__quote-indicator-bar-2':
      slideQuote(2, currentQuoteID);
      break;
    case 'sm--quotes__quote-indicator-bar-3':
      slideQuote(3, currentQuoteID);
      break;
    case 'sm--quotes__quote-1':
      slideQuote(1, currentQuoteID);
      break;
    case 'sm--quotes__quote-2':
      slideQuote(2, currentQuoteID);
      break;
    case 'sm--quotes__quote-3':
      slideQuote(3, currentQuoteID);
      break;
    default:
      console.log('No event id match');
  }
=======
    switch (eventTarget.id) {
        case "sm--quotes__quote-indicator-bar-1":
            slideQuote(1, currentQuoteID);
            break;
        case "sm--quotes__quote-indicator-bar-2":
            slideQuote(2, currentQuoteID);
            break;
        case "sm--quotes__quote-indicator-bar-3":
            slideQuote(3, currentQuoteID);
            break;
        case "sm--quotes__quote-1":
            slideQuote(1, currentQuoteID);
            break;
        case "sm--quotes__quote-2":
            slideQuote(2, currentQuoteID);
            break;
        case "sm--quotes__quote-3":
            slideQuote(3, currentQuoteID);
            break;
        default:
            console.log("No event id match");
    }
>>>>>>> 88b4e4532d5290f15676bbe78b047d11679b5e2a
}

// Select new quote and initiate slide
function slideQuote(newQuoteID, currentQuoteID) {
<<<<<<< HEAD
  const newQuote = document.querySelector(`#sm--quotes__quote-${newQuoteID}`);

  // Change appearance of other indicator bars
  createPromise(removeQuoteActive())
    // Change appearance of current indicator bar
    .finally(
      createPromise(addQuoteActive(newQuote, newQuoteID, currentQuoteID))
    );
=======
    var newQuote = document.querySelector("#sm--quotes__quote-" + newQuoteID);

    // Change appearance of other indicator bars
    createPromise(removeQuoteActive())
        // Change appearance of current indicator bar
        .finally(createPromise(addQuoteActive(newQuote, newQuoteID, currentQuoteID)))

>>>>>>> 88b4e4532d5290f15676bbe78b047d11679b5e2a
}

// Remove active class from all quotes
function removeQuoteActive() {
<<<<<<< HEAD
  quotes.forEach(function(index) {
    index.classList.remove('sm--quotes__quote-active');
    index.classList.remove('sm--quotes__quote-active-slide-in-left');
    index.classList.remove('sm--quotes__quote-active-slide-in-right');
  });
=======
    quotes.forEach(function (index) {
        index.classList.remove("sm--quotes__quote-active");
        index.classList.remove("sm--quotes__quote-active-slide-in-left");
        index.classList.remove("sm--quotes__quote-active-slide-in-right");
    });
>>>>>>> 88b4e4532d5290f15676bbe78b047d11679b5e2a
}

// Add active class to the clicked quote
function addQuoteActive(target, newQuoteID, currentQuoteID) {
<<<<<<< HEAD
  target.classList.add('sm--quotes__quote-active');

  // Determine direction for slide class
  if (newQuoteID < currentQuoteID) {
    target.classList.add('sm--quotes__quote-active-slide-in-right');
  } else if (newQuoteID > currentQuoteID) {
    target.classList.add('sm--quotes__quote-active-slide-in-left');
  } // Else don't do anything (stay still)
}
=======
    target.classList.add("sm--quotes__quote-active");

    // Determine direction for slide class
    if (newQuoteID < currentQuoteID) {
        target.classList.add("sm--quotes__quote-active-slide-in-right");
    } else if (newQuoteID > currentQuoteID) {
        target.classList.add("sm--quotes__quote-active-slide-in-left");
    } // Else don't do anything (stay still)
}
>>>>>>> 88b4e4532d5290f15676bbe78b047d11679b5e2a
