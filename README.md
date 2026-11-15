# 💱 Currency Converter

A simple and responsive Currency Converter built with HTML, CSS, and JavaScript. The application fetches real\-time exchange rates using the Frankfurter API and allows users to convert between different currencies instantly.

## 🚀 Live Demo

**Coming Soon**

(Netlify deployment link will be added here.)

---

## ✨ Features

- Convert currency values in real time.
- Supports a wide range of international currencies.
- Automatically updates country flags based on selected currencies.
- Default conversion from USD to INR.
- Input validation for empty and invalid amounts.
- Responsive and clean user interface.
- Uses Fetch API with async/await for API requests.

---

## 🛠️ Built With

- HTML5
- CSS3
- JavaScript (ES6)
- Frankfurter API
- Flags API
- Font Awesome

---

## 📂 Project Structure

Currency\-Converter/

│

├── index.html

├── style.css

├── script.js

├── codes.js

└── README.md

---

## 🔗 APIs Used

### Exchange Rate API

The application fetches live exchange rates from:

[https://api.frankfurter.dev/v1/latest](https://api.frankfurter.dev/v1/latest)

Example Request:

[https://api.frankfurter.dev/v1/latest?from=USD&to=INR](https://api.frankfurter.dev/v1/latest?from=USD&to=INR)

Example Response:

\{

  "amount": 1,

  "base": "USD",

  "date": "2026\-11\-13",

  "rates": \{

    "INR": 94.12

  \}

\}

### Country Flag API

Flags are loaded dynamically using:

[https://flagsapi.com/\{COUNTRY\_CODE\}/flat/64.png](https://flagsapi.com/{COUNTRY_CODE}/flat/64.png)

Example:

[https://flagsapi.com/US/flat/64.png](https://flagsapi.com/US/flat/64.png)

---

## ⚙️ How It Works

1. The user enters an amount.
2. Selects the source currency.
3. Selects the target currency.
4. Clicks **Get Exchange Rate**.
5. The application requests the latest exchange rate from the API.
6. The converted amount is calculated and displayed instantly.

Example:

10 USD = 941.20 INR

---

## 🧑‍💻 Run Locally

1. Clone the repository:

git clone [https://github.com/your\-username/currency\-converter.git](https://github.com/your-username/currency-converter.git)

1. Navigate to the project folder:

cd currency\-converter

1. Open index.html in your browser.

Alternatively, run a local development server.

---

## 🎯 Learning Objectives

This project helped me practice:

- DOM Manipulation
- Event Handling
- API Integration
- Async/Await
- Fetch API
- Dynamic UI Updates
- JavaScript Objects and Arrays

---

## 📈 Future Improvements

- Swap currency button functionality.
- Currency search feature.
- Historical exchange rates.
- Dark mode support.
- Exchange rate charts and trends.
- Error handling for API failures.

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome.

Feel free to fork this repository and submit a pull request.

---

## 👨‍💻 Author

**Ansh Kumar**

If you found this project useful, consider giving it a ⭐ on GitHub.

