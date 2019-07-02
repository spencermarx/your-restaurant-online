// ======================
// COMPONENT - Slideshow
// ======================

// Select all indicator bar elements
var indicatorBars = document.querySelectorAll('.sm--quotes__quote-indicator-bar');

// Select all quote elements
var quotes = document.querySelectorAll('.sm--quotes__quote');

// Default time-based Slideshow Switch
var slideshowTiming = 5000;

// On page load begin slideshow timer
window.onload = slideshowTimer;

// Define a timer for slideshow
var slideshowTimer = setInterval(runSlideshow, slideshowTiming);

// Slideshow Process
function runSlideshow() {

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

}

// Note: Attaching listener to document instead
// ...of running for loop to attach event to all
// ... indicator bars (avoiding scope issues)
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
}

// Add active class to the clicked indicator bar
function addIndicatorBarActive(eventTarget) {
    eventTarget.classList.add("sm--quotes__quote-indicator-bar-active");
}

// Add active class to the clicked indicator bar
function switchQuote(eventTarget, currentQuoteID) {
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
}

// Select new quote and initiate slide
function slideQuote(newQuoteID, currentQuoteID) {
    var newQuote = document.querySelector("#sm--quotes__quote-" + newQuoteID);

    // Change appearance of other indicator bars
    createPromise(removeQuoteActive())
        // Change appearance of current indicator bar
        .finally(createPromise(addQuoteActive(newQuote, newQuoteID, currentQuoteID)))

}

// Remove active class from all quotes
function removeQuoteActive() {
    quotes.forEach(function (index) {
        index.classList.remove("sm--quotes__quote-active");
        index.classList.remove("sm--quotes__quote-active-slide-in-left");
        index.classList.remove("sm--quotes__quote-active-slide-in-right");
    });
}

// Add active class to the clicked quote
function addQuoteActive(target, newQuoteID, currentQuoteID) {
    target.classList.add("sm--quotes__quote-active");

    // Determine direction for slide class
    if (newQuoteID < currentQuoteID) {
        target.classList.add("sm--quotes__quote-active-slide-in-right");
    } else if (newQuoteID > currentQuoteID) {
        target.classList.add("sm--quotes__quote-active-slide-in-left");
    } // Else don't do anything (stay still)
}