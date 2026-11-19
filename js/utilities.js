// ========================================
// COMMON REUSABLE FUNCTIONS
// ========================================

// Get numeric value from an input field
function getInputFieldById(id) {
  const inputElement = document.getElementById(id);
  const inputValue = inputElement.value.trim();

  if (inputValue === "") {
    return NaN;
  }

  return Number(inputValue);
}

// Get numeric value from a text element
function getTextFieldById(id) {
  const textValue = document.getElementById(id).innerText;
  return Number(textValue.replace(/[^0-9.-]+/g, ""));
}

// Update text content of an element
function setTextFieldById(id, value) {
  document.getElementById(id).innerText = value;
}

// Format number with commas
function formatMoney(amount) {
  return amount.toLocaleString("en-BD");
}

// Show a notification message
let toastTimer;

function showToast(message) {
  const toast = document.getElementById("toast");

  toast.innerText = message;
  toast.classList.add("show");

  clearTimeout(toastTimer);

  toastTimer = setTimeout(function () {
    toast.classList.remove("show");
  }, 2800);
}
