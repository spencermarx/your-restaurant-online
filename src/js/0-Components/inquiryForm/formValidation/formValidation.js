// ======================
// SUB-COMPONENT - Inquiry Form - Validation
// ======================

// Valid Form - Master Object
const validForm = {};

// Form validation - Check empty values
validForm.checkEmptyValues = function(inquiryFormData) {
  const emptyValuesTracker = {
    emptyValues: 0,
  };
  const inputArray = Object.keys(inquiryFormData);
  for (let i = 0; i < inputArray.length; i++) {
    // console.log(inquiryFormData[inputArray[i]]); // value
    // console.log(inquiryFormData[inputArray[i]].length); // value
    if (
      !inquiryFormData[inputArray[i]] ||
      inquiryFormData[inputArray[i]].length < 1
    ) {
      emptyValuesTracker.emptyValues += 1;
      emptyValuesTracker[inputArray[i]] = false;
    } else {
      emptyValuesTracker[inputArray[i]] = true;
    }
  }
  return emptyValuesTracker;
};

// Form validation - Check email
validForm.checkEmail = function(inquiryFormData) {
  const { email } = inquiryFormData;
  if (email && email.length > 0) {
    // eslint-disable-next-line no-use-before-define
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }
  return false;
};

// Form validation
validForm.isValidForm = function(inquiryFormData) {
  // Check empty values
  const emptyValues = parseInt(
    validForm.checkEmptyValues(inquiryFormData).emptyValues
  );
  const validEmail = validForm.checkEmail(inquiryFormData);
  console.log('Email validation:', validEmail);

  // console.log(emptyValues);
  if (emptyValues === 0 && validEmail) {
    return true;
  }
  return false;
};
