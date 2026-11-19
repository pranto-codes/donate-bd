# Donate Bangladesh

A responsive donation platform built to support humanitarian relief campaigns across Bangladesh. The website allows users to contribute to different causes, track campaign donation totals, monitor their available balance, and view their donation history through an interactive interface.

## Live Demo

[Visit Donate Bangladesh](#)

## Features

- **Donation Campaigns:** Three dedicated campaigns for Noakhali flood relief, Feni flood relief, and medical assistance for injured people.
- **Interactive Donations:** Enter a donation amount and confirm contributions through a simple donation flow.
- **Balance Management:** Automatically deducts successful donations from the available account balance.
- **Campaign Tracking:** Updates each campaign's raised amount and visual progress bar dynamically.
- **Donation History:** Records successful donations with campaign names, amounts, and timestamps.
- **Input Validation:** Prevents invalid amounts, zero or negative donations, decimal amounts, and donations exceeding the available balance.
- **Responsive Design:** Optimized layouts for desktop, tablet, and mobile devices.
- **Interactive Notifications:** Displays feedback messages for successful donations and validation errors.

## Technologies Used

- HTML5
- CSS3
- JavaScript (Vanilla JS)
- Tailwind CSS
- DaisyUI
- Google Fonts

## Project Structure

```text
donate-bangladesh/
│
├── index.html
│
├── assets/
│   ├── logo.png
│   ├── coin.png
│   ├── noakhali.png
│   ├── feni.png
│   └── quota-protest.png
│
└── js/
    ├── utilities.js
    ├── donate.js
    └── feature.js
```

## How to Run Locally

1. Clone the repository:

   ```bash
   git clone YOUR_REPOSITORY_URL
   ```

2. Navigate to the project directory:

   ```bash
   cd donate-bangladesh
   ```

3. Open `index.html` in your browser.

   You can also use the Live Server extension in Visual Studio Code for local development.

## JavaScript Functionality

The project uses separate JavaScript files to keep functionality organized and maintainable.

| File           | Responsibility                                                                     |
| -------------- | ---------------------------------------------------------------------------------- |
| `utilities.js` | Reusable helper functions for input handling, number formatting, and notifications |
| `donate.js`    | Donation validation, balance calculations, campaign updates, and donation history  |
| `feature.js`   | Switching between the Donations and History sections                               |

## Important Note

This project is a frontend demonstration. Donation amounts, account balance, and history are managed in browser memory and reset when the page is refreshed. It does not process real payments or transfer money.

## Future Improvements

- Integrate a backend API for persistent donation records.
- Add secure payment gateway integration.
- Store donation history in a database.
- Introduce donor accounts and authentication.
- Display campaign-specific donation statistics.

---

**Built with HTML, CSS, and JavaScript — supporting a culture of giving and community impact.**
