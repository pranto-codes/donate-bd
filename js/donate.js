// ========================================
// DONATION DATA
// ========================================

let mainBalance = 5500;

const campaigns = {
  1: {
    name: "Noakhali Flood Relief",
    raised: 500,
    goal: 10000,
  },

  2: {
    name: "Feni Flood Relief",
    raised: 500,
    goal: 10000,
  },

  3: {
    name: "Medical Support for Injured People",
    raised: 500,
    goal: 10000,
  },
};

// Store successful donations
const donationHistory = [];

// ========================================
// UPDATE MAIN ACCOUNT BALANCE
// ========================================

function updateMainBalance() {
  setTextFieldById("main_balance", formatMoney(mainBalance) + " BDT");
}

// ========================================
// UPDATE CAMPAIGN BALANCE AND PROGRESS
// ========================================

function updateCampaignBalance(id) {
  const campaign = campaigns[id];

  // Update raised amount
  setTextFieldById("donation_balance" + id, formatMoney(campaign.raised));

  // Calculate progress percentage
  const percentage = Math.min((campaign.raised / campaign.goal) * 100, 100);

  // Update progress bar
  document.getElementById("progress" + id).style.width = percentage + "%";
}

// ========================================
// RENDER DONATION HISTORY
// ========================================

function renderHistory() {
  const historyList = document.getElementById("history_list");
  const historyCount = document.getElementById("history_count");

  historyCount.innerText =
    donationHistory.length +
    (donationHistory.length === 1 ? " donation" : " donations");

  if (donationHistory.length === 0) {
    historyList.innerHTML = `
      <div class="text-center py-14 px-5 text-gray-500 text-sm">
        <span class="block text-4xl mb-3">♡</span>
        No donations yet. Your first contribution can make a difference.
      </div>
    `;
    return;
  }

  historyList.innerHTML = donationHistory
    .map(function (donation) {
      return `
        <div class="history-item">
          <div>
            <h4 class="font-bold text-[#123d32] text-sm">
              ${donation.campaign}
            </h4>

            <p class="text-xs text-gray-500 mt-1">
              ${donation.date}
            </p>
          </div>

          <div class="history-amount">
            +${formatMoney(donation.amount)} BDT
          </div>
        </div>
      `;
    })
    .join("");
}

// ========================================
// HANDLE DONATION
// ========================================

function handleDonation(id) {
  const inputId = "input_donation" + id;

  // Get donation amount
  const donationAmount = getInputFieldById(inputId);

  // Validate input
  if (!Number.isFinite(donationAmount) || donationAmount <= 0) {
    showToast("Please enter a valid donation amount.");
    document.getElementById(inputId).focus();
    return;
  }

  if (!Number.isInteger(donationAmount)) {
    showToast("Please enter a whole number.");
    document.getElementById(inputId).focus();
    return;
  }

  // Check available balance
  if (donationAmount > mainBalance) {
    showToast("Insufficient account balance.");
    return;
  }

  const campaign = campaigns[id];

  // Ask for confirmation
  const confirmed = window.confirm(
    "Are you sure you want to donate " +
      formatMoney(donationAmount) +
      " BDT to " +
      campaign.name +
      "?",
  );

  if (!confirmed) {
    return;
  }

  // Deduct from main balance
  mainBalance -= donationAmount;

  // Add donation to campaign
  campaign.raised += donationAmount;

  // Update UI
  updateMainBalance();
  updateCampaignBalance(id);

  // Add to donation history
  const donationRecord = {
    campaign: campaign.name,
    amount: donationAmount,
    date: new Date().toLocaleString(),
  };

  donationHistory.unshift(donationRecord);

  // Refresh history
  renderHistory();

  // Clear input
  document.getElementById(inputId).value = "";

  // Success message
  showToast("Thank you! Your donation was successful.");
}

// ========================================
// DONATION BUTTON EVENT LISTENERS
// ========================================

document.getElementById("btn_donate1").addEventListener("click", function () {
  handleDonation(1);
});

document.getElementById("btn_donate2").addEventListener("click", function () {
  handleDonation(2);
});

document.getElementById("btn_donate3").addEventListener("click", function () {
  handleDonation(3);
});

// ========================================
// INITIAL UI
// ========================================

updateMainBalance();

updateCampaignBalance(1);
updateCampaignBalance(2);
updateCampaignBalance(3);

renderHistory();
