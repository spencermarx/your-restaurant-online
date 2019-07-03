// ======================
// LAYOUT - HEADER
// ======================

// FIXME: Run event on page load/reload as well
// TODO: Create auto-switch

// Scroll-based style change
<<<<<<< HEAD
document.addEventListener('scroll', function() {
  // Select navbar
  const navigation = document.querySelector('.navbar');

  // Get navbar height
  const navHeight = navigation.clientHeight;
  console.log('Nav Height:', navHeight);

  // Get document scroll location
  const scrollLocation = this.documentElement.scrollTop;
  console.log('Scroll Location:', scrollLocation);

  //  Additional scroll space
  const extraScrollSpace = 30;

  // Toggle class if scrolled below navbar height
  if (scrollLocation - extraScrollSpace > navHeight) {
    navigation.classList.add('sm--navbar__scrolled');
  } else {
    navigation.classList.remove('sm--navbar__scrolled');
  }
=======
document.addEventListener("scroll", function () {

    // Select navbar
    var navigation = document.querySelector(".navbar");

    // Get navbar height
    var navHeight =  navigation.clientHeight;
    console.log("Nav Height:", navHeight);

    // Get document scroll location
    var scrollLocation = this.documentElement.scrollTop;
    console.log("Scroll Location:", scrollLocation);

    //  Additional scroll space
    var extraScrollSpace = 30;

    // Toggle class if scrolled below navbar height
    if(scrollLocation - extraScrollSpace > navHeight){
        navigation.classList.add("sm--navbar__scrolled");
    } else {
        navigation.classList.remove("sm--navbar__scrolled");
    }
>>>>>>> 88b4e4532d5290f15676bbe78b047d11679b5e2a
});
