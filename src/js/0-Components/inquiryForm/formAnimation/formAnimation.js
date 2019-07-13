// ======================
// SUB-COMPONENT - Inquiry Form - Animation
// ======================

// Select Inquiry Form (Jquery)
const $inquiryForm = $('.sm--inquiry__form');

// Select Inquiry Form Input Groups (Jquery)
const $inquiryFormInputGroups = $('.sm--inquiry__form .form-group');

// Animate Form - Master Object
const formAnimation = {};

// Base loader HTML
const loaderHTML =
  '<div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>';

//   Base Check mark HTML
const checkmarkHTML = `<svg class="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52"><circle class="checkmark__circle" cx="26" cy="26" r="25" fill="none"/><path class="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/></svg>`;

//   Base Error mark HTML
const errormarkHTML = `<svg class="errormark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
<circle class="errormark__circle" cx="26" cy="26" r="25" fill="none"></circle>
<path class="errormark__x" fill="none" d="M16 16 36 36 M36 16 16 36"></path>
</svg>`;

// Base Load Message Header HTML
formAnimation.loadMessageHeaderHTML = function(loaderMessage, err) {
  // console.log(err);
  if (!err) {
    return `<div class="sm--inquiry__loading-message-header"><h2>${loaderMessage}</h2><div>`;
  }
  return `<div class="sm--inquiry__loading-message-header-error"><h2>${loaderMessage}</h2><div>`;
};
// Base Load Message Body HTML
formAnimation.loadMessageBodyHTML = function(loaderMessage) {
  return `<div class="sm--inquiry__loading-message-body"><p>${loaderMessage}</p><div>`;
};

// Remove loader and loader message
formAnimation.modifyLoadingElements = function(
  loaderMessageHeader,
  loaderMessageBody,
  err
) {
  // Remove loader
  const $loader = $('.lds-roller');
  $loader.remove();

  //   Remove initial loading message
  const $loaderMessageHeader = $('.sm--inquiry__loading-message-header');
  const $loaderMessageBody = $('.sm--inquiry__loading-message-body');
  $loaderMessageHeader.remove();
  $loaderMessageBody.remove();

  //   Add new loader message
  $inquiryForm.prepend(
    formAnimation.loadMessageHeaderHTML(loaderMessageHeader, err)
  );
  $inquiryForm.prepend(formAnimation.loadMessageBodyHTML(loaderMessageBody));
};

// Success Animation - Sequence
formAnimation.animateCheckMark = function() {
  // Prepend Loader
  $inquiryForm.prepend(checkmarkHTML);
};
// Failure Animation - Sequence
formAnimation.animateErrorMark = function() {
  // Prepend Loader
  $inquiryForm.prepend(errormarkHTML);
};

// Reset Inquiry Form
formAnimation.reset = function() {
  // Clear animation svgs
  $('.sm--inquiry__form svg').remove();

  // Clear messages
  $('.sm--inquiry__loading-message-header-error').remove();
  $('.sm--inquiry__loading-message-body').remove();

  // Fade In Fields
  $inquiryFormInputGroups.removeClass('sm--inquiry__form-fields-fade');

  //  Reset button
  $inquiryFormButton.removeClass('sm--inquiry__submit-button-fail'); // Disable
  $inquiryFormButton.addClass('sm--inquiry__submit-button'); // Disable
  $inquiryFormButton.text('Request Free Intro Call');

  // Turn old listener on
  $inquiryFormButton.on('click.handleInquiryForm', function(event) {
    ajaxSubmitInquiryForm(event);
  });
};

// AJAX form - Start Animation
formAnimation.start = function() {
  //   Disable button
  $inquiryFormButton.attr('disabled', 'true'); // Disable
  $inquiryFormInputGroups.addClass('sm--inquiry__form-fields-fade');

  const $loader = $('.lds-roller');
  // console.log($loader);

  const $loaderMessage = $('.sm--inquiry__loading-message');
  // console.log($loaderMessage);

  //   Check if already loading
  if ($loader.length < 1 && $loaderMessage.length < 1) {
    setTimeout(function() {
      // Prepend Loader
      $inquiryForm.prepend(loaderHTML);
      //   Prepend Loader Message
      $inquiryForm.prepend(
        formAnimation.loadMessageHeaderHTML('Sending Message')
      );
      $inquiryForm.prepend(
        formAnimation.loadMessageBodyHTML("Won't be long now!")
      );

      //   Handle Button Events
      $inquiryFormButton.text('Sending request information'); // Update text
    }, 500);
  }
};

// AJAX form - Finish Animation
formAnimation.finish = function(result) {
  // console.log(result.data);

  // If successful -> Display new animation
  if (result.data === 'success') {
    setTimeout(function() {
      // Modify Loader and Loading Message
      formAnimation.modifyLoadingElements(
        'Message Sent',
        "We'll be in touch shortly",
        false
      );

      //   Change Button Text
      $inquiryFormButton.text('Completed!');

      formAnimation.animateCheckMark();
      //   $inquiryFormInputGroups.removeClass('sm--inquiry__form-fields-fade');
    }, 2500);
  } else {
    // If failed -> Try again
    setTimeout(function() {
      // Modify Loader and Loading Message
      formAnimation.modifyLoadingElements(
        'Error Occurred',
        'Try submitting the form again.',
        true
      );

      //   Disable button
      $inquiryFormButton.removeAttr('disabled'); // Disable
      $inquiryFormButton.removeClass('sm--inquiry__submit-button'); // Disable
      $inquiryFormButton.addClass('sm--inquiry__submit-button-fail'); // Disable
      //   Change Button Text
      $inquiryFormButton.text('Try again!');

      formAnimation.animateErrorMark();
    }, 2500);

    // Turn previous listener off
    $inquiryFormButton.off('click.handleInquiryForm');

    // Turn listener on for reset
    $inquiryFormButton.on('click', function() {
      formAnimation.reset();
    });
  }
};
