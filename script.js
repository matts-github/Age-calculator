function isNumberInRange(number, min, max) {
  return number >= min && number <= max;
}

function handleKeyDown(event) {
  if (event.key === 'Enter') {
    checkInput();
  }
}

function checkInput() {
  // day
  const input = document.getElementById('day');
  const value = parseInt(input.value);
  const errorMessageContainer = document.getElementById('error-message');
  // month
  const inputMonth = document.getElementById('month');
  const value1 = parseInt(inputMonth.value);
  const errorMessageContainer1 = document.getElementById('error-month');
  // year
  const inputYear = document.getElementById('year');
  const value2 = parseInt(inputYear.value);
  const errorMessageContainer2 = document.getElementById('error-year');
  const labels = document.querySelectorAll("label");
  const inputs = document.querySelectorAll("input");

  // day
  if (isNumberInRange(value, 1, 31)) {
    errorMessageContainer.innerText = '';
  } else if (isNaN(value)) {
    errorMessageContainer.innerText = 'This field is required';
  } else {
    errorMessageContainer.innerText = 'Must be a valid day';
    labels.forEach(label => {
      label.style.color = "red";
    });
    inputs.forEach(input => {
      input.style.borderColor = "red";
    });
  }

  // month
  if (isNumberInRange(value1, 1, 12)) {
    errorMessageContainer1.innerText = '';
  } else if (isNaN(value1)) {
    errorMessageContainer1.innerText = 'This field is required';
  } else {
    errorMessageContainer1.innerText = 'Must be a valid month';
    labels.forEach(label => {
      label.style.color = "red";
    });
    inputs.forEach(input => {
      input.style.borderColor = "red";
    });
  }

  // year
  const currentYear = new Date().getFullYear();
  if (value2 <= currentYear) {
    errorMessageContainer2.innerText = '';
  } else if (isNaN(value2)) {
    errorMessageContainer2.innerText = 'This field is required';
  } else {
    errorMessageContainer2.innerText = 'Must be in the past';
    labels.forEach(label => {
      label.style.color = "red";
    });
    inputs.forEach(input => {
      input.style.borderColor = "red";
    });
  }

  if (
    isNumberInRange(value, 1, 31) &&
    isNumberInRange(value1, 1, 12) &&
    value2 <= currentYear
  ) {
    const age = calculateAge(value, value1, value2);
    displayAge(age);
  }
}


document.addEventListener('DOMContentLoaded', function () {
  // Attach event listeners outside the checkInput function
  const input = document.getElementById('day');
  const inputMonth = document.getElementById('month');
  const inputYear = document.getElementById('year');

  input.addEventListener('keydown', handleKeyDown);
  inputMonth.addEventListener('keydown', handleKeyDown);
  inputYear.addEventListener('keydown', handleKeyDown);
});


// Age calculation

// function age() {
//   var d1 = parseInt(document.getElementById('day').value);
//   var m1 = parseInt(document.getElementById('month').value);
//   var y1 = parseInt(document.getElementById('year').value);

//   var date = new Date(); // new Date() is a JavaScript method that collects time from your device
//   var d2 = date.getDate();
//   var m2 = date.getMonth() + 1; // Corrected getMonth() to date.getMonth()
//   var y2 = date.getFullYear();
//   var month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

//   if (d1 > d2) {
//     d2 = d2 + month[m2 - 1];
//     m2 = m2 - 1;
//   }
//   if (m1 > m2) {
//     m2 = m2 + 12; // Corrected m2 * m2 + 12 to m2 = m2 + 12;
//     y2 = y2 - 1;
//   }
//   var d = d2 - d1;
//   var m = m2 - m1;
//   var y = y2 - y1;

//   document.getElementById('age').innerHTML = 'Your Age is ' + y + ' Years ' + m + ' Months ' + d + ' Days';
// }

