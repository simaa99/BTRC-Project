(function () {
  emailjs.init("81lJIefcLX2aq_psX");
})();

document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const formMessage = document.getElementById("formMessage");
  formMessage.textContent = "";
  formMessage.classList.remove("error", "success");

  const name = document.getElementById("name").value;
  const telephone = document.getElementById("telephone").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;
  const consent = document.getElementById("consent").checked;

  if (!name || !telephone || !email || !message || !consent) {
    formMessage.textContent = "";
    formMessage.classList.add("error");
    return;
  }

  // Send email using EmailJS
  emailjs
    .send("service_hpmgfh8", "template_vsxkdm8", {
      to_name: "BTRC Team", // Change to recipient name if needed
      from_name: name,
      from_email: email,
      telephone: telephone,
      message: message,
    })
    .then(
      function (response) {
        formMessage.textContent = "Your message has been sent successfully!";
        formMessage.classList.add("success");
        document.getElementById("contactForm").reset();
      },
      function (error) {
        formMessage.textContent =
          "Failed to send the message. Please try again.";
        formMessage.classList.add("error");
      }
    );
});
$(document).ready(function () {
  $("#contactForm").validate({
    rules: {
      name: {
        required: true,
      },
      telephone: {
        required: true,
        digits: true,
        minlength: 9,
      },
      email: {
        required: true,
        email: true,
      },
      message: {
        required: true,
      },
      consent: {
        required: true,
      },
    },
    messages: {
      name: {
        required: "Please enter your name",
      },
      telephone: {
        required: "Please enter your telephone number",
        digits: "telephone number field must be numeric",
        minlength: "telephone number field must be at least 9 numbers",
      },
      email: {
        required: "Please enter your email address",
        email: "Please enter a valid email address",
      },
      message: {
        required: "Please enter your message",
      },
      consent: {
        required: "Please accept the privacy policy",
      },
    },
    submitHandler: function (form) {
      // Here you can submit the form
      $("#formMessage").text("Form submitted successfully!");
    },
  });
});
document
  .querySelector(".button-cookies")
  .addEventListener("click", function () {
    document.querySelector(".cokkies").style.display = "none";
  });
