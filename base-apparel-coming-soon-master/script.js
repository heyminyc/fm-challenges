const form = document.querySelector("form");
const emailInput = document.getElementById("email");

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const emailValue = emailInput.value.trim();

  if (emailValue === "") {
    showError("Email address cannot be empty");
    return;
  }

  if (!isValidEmail(emailValue)) {
    showError("Please provide a valid email address");
    return;
  }

  clearError();
  console.log("Valid email submitted:", emailValue);
});

function showError(message) {
  emailInput.classList.add("error");
  emailInput.setAttribute("aria-invalid", "true");

  let error = document.querySelector(".error-message");

  if (!error) {
    error = document.createElement("p");
    error.className = "error-message";
    error.setAttribute("aria-live", "polite");
    form.appendChild(error);
  }

  error.textContent = message;
}

function clearError() {
  emailInput.classList.remove("error");
  emailInput.removeAttribute("aria-invalid");

  const error = document.querySelector(".error-message");
  if (error) {
    error.remove();
  }
}

emailInput.addEventListener("input", clearError);
