// validation

(function () {
  'use strict';
  window.addEventListener('load', function () {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');

    // check match

    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function (form) {
      form.addEventListener('submit', function (event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();

// submition

const scriptURL = "https://script.google.com/macros/s/AKfycbwmTNBtbTJcYrmQ3zcMky2hOplIIA1mmzfjaiswueFXJpnpkvc3t_hAhI1m29R6oXw/exec"
const form = document.forms['google-sheet']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(response => alert("Thanks for Contacting me..."))
    .catch(error => console.error('Error!', error.message))
})