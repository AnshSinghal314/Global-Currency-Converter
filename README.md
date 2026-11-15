# 💱 Global Currency Converter

A simple and responsive Currency Converter built with HTML, CSS, and JavaScript. The application fetches real\-time exchange rates using the Frankfurter API and allows users to convert between different currencies instantly.

## 🚀 Live Demo

🔗 [https://gloable\-currency\-converter.netlify.app/](https://gloable-currency-converter.netlify.app/)

---

## ✨ Features

- Real\-time currency conversion.
- Supports a wide range of international currencies.
- Dynamic country flags based on selected currencies.
- Default conversion from USD to INR on page load.
- Input validation for empty or invalid amounts.
- Clean and responsive user interface.
- Uses Fetch API and async/await for asynchronous data retrieval.

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

Global\-Currency\-Converter/

│

├── index.html

├── style.css

├── script.js

├── codes.js

└── README.md

---

## 🔗 APIs Used

### Exchange Rate API

The application fetches exchange rates from:

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

Country flags are loaded dynamically using:

[https://flagsapi.com/\{COUNTRY\_CODE\}/flat/64.png](https://flagsapi.com/{COUNTRY_CODE}/flat/64.png)

Example:

[https://flagsapi.com/US/flat/64.png](https://flagsapi.com/US/flat/64.png)

---

## ⚙️ How It Works

1. Enter an amount to convert.
2. Select the source currency.
3. Select the destination currency.
4. Click **Get Exchange Rate**.
5. The application fetches the latest exchange rate.
6. The converted amount is displayed instantly.

Example:

100 USD = 9412 INR

---

## 🧑‍💻 Run Locally

1. Clone the repository:

git clone [https://github.com/your\-username/global\-currency\-converter.git](https://github.com/your-username/global-currency-converter.git)

1. Navigate to the project directory:

cd global\-currency\-converter

1. Open index.html in your browser.

Alternatively, use a local server:

npx serve

---

## 🎯 What I Learned

This project helped me strengthen my understanding of:

- DOM Manipulation
- Event Handling
- API Integration
- Fetch API
- Async/Await
- Dynamic Content Updates
- JavaScript Objects
- Responsive Web Design

---

## 🚀 Future Enhancements

- Currency swap button functionality.
- Searchable currency dropdowns.
- Historical exchange rate support.
- Dark mode.
- Exchange rate charts and visualizations.
- Better error handling for failed API requests.

---

## 👨‍💻 Author

**Ansh Kumar**

If you found this project useful, feel free to give it a ⭐ on GitHub\!

