// ======================
// LAYOUT - HEADER
// ======================

// Scroll-based style change
document.addEventListener("scroll", function () {

    // Select navbar
    var navigation = document.querySelector(".navbar");

    // Get navbar height
    var navHeight =  navigation.clientHeight;

    // Get document scroll location
    var scrollLocation = this.documentElement.scrollTop;

    //  Additional scroll space
    var extraScrollSpace = 30;

    // Toggle class if scrolled below navbar height
    if(scrollLocation - extraScrollSpace > navHeight){
        navigation.classList.add("sm--navbar__scrolled");
    } else {
        navigation.classList.remove("sm--navbar__scrolled");
    }
});