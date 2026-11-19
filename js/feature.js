// ========================================
// DONATION AND HISTORY TAB FUNCTIONALITY
// ========================================

const donationButton = document.getElementById("show_donation");
const historyButton = document.getElementById("show_history");

const donationSection = document.getElementById("donation_section");
const historySection = document.getElementById("history_section");

// Show donation section
donationButton.addEventListener("click", function () {
  donationSection.classList.remove("hidden");
  historySection.classList.add("hidden");

  donationButton.classList.add("active");
  historyButton.classList.remove("active");
});

// Show history section
historyButton.addEventListener("click", function () {
  donationSection.classList.add("hidden");
  historySection.classList.remove("hidden");

  historyButton.classList.add("active");
  donationButton.classList.remove("active");

  // Refresh donation history
  renderHistory();
});
