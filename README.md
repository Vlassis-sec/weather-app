# Weather App

![Made with React](https://img.shields.io/badge/Made%20with-React-blue.svg)
![Made with TypeScript](https://img.shields.io/badge/Made%20with-TypeScript-blue.svg)

## Description

A responsive app created with **React** and **TypeScript** that allows users to search for any city and view current weather data using the **OpenWeatherMap API**. A dropdown with city suggestions appears as the user types, powered by the **LocationIQ API**.

The app includes animations, modals, a loading component, and error messages that guide the user if a city is not found or an API call fails. It was developed as a hands-on project to practice working with APIs, state management, and building responsive UIs with React and TypeScript.

### What I Learned

- **State-based UI rendering** using React for dynamic user feedback
- **Error handling with fallback UI** to guide users during API failures or invalid city names
- **Modals built with React Portals**, including keyboard `Escape` and click-outside functionality to close
- **Focus trapping** and accessible form navigation with `Tab` support
- **Form validation** using `react-hook-form` and regular expressions for reliable input handling
- Emphasis on **clean, reusable components** and maintaining clear separation of concerns

## Usage

1. Start typing a city name on the landing page.
2. Select from the dropdown suggestions.
3. View the current weather data for the selected city.

### Screenshots

![Landing animation](/screenshots/landing_page.mp4.gif)
_Animated landing sequence with cloud and rain effects._
![City search dropdown](/screenshots/dropDown.png)
_Dropdown with city suggestions_
![Weather data](/screenshots/weatherCard.png)
_Real-time weather information from OpenWeatherMap._
If the city is not found or if there is an API error, a clear error message will guide the user.

### Features

    - Polished animated landing page for an engaging user experience
    - City autocomplete with smart dropdown suggestions
    - Real-time weather data fetching from OpenWeatherMap API
    - Smooth loading animations and user-friendly error messages
    - Signup and login forms with client-side validation and error handling

### Notes

    - The signup form collects input and simulates submission by logging a message to the console.
    - Login form UI is styled but does not perform real authentication.

### Additional screenshots

![Error message](/screenshots/errorMessage.png)
_Clear feedback when an invalid city is entered._
![Signup form](/screenshots/signUpForm.png)
_Signup form with input validation._
![Validation feedback](/screenshots/signUpValidation.png)
_Real-time validation guiding the user during signup._
![Login form](/screenshots/logInForm.png)
_Login form UI with input fields_

## Installation

### Prerequisites

- [Node.js](https://nodejs.org/) (version 14 or higher recommended) — please install the latest LTS version for best compatibility.
- API keys for the following services:

  - **OpenWeatherMap API** — used to fetch the current weather data. Get your key from [https://openweathermap.org/api](https://openweathermap.org/api)
  - **LocationIQ API** — used for city name autocomplete suggestions. Get your key from [https://locationiq.com/](https://locationiq.com/)

  **Note:**

  > Please review the API providers' usage policies and monitor your API key usage to avoid unexpected issues or costs.

### Environment Variables Setup

Before running the app, create a file named `.env` in the root of the project (same folder as `package.json`)
Inside the `.env` file, create **two environment variables** with the exact names below, replacing the placeholder values withyour actual API keys:

```env
VITE_APP_ID=your_openweathermap_api_key_here
VITE_AUTOCOMPLETE_API_KEY=your_locationiq_api_key_here
```

### Steps

1. **Clone the repository**

```
git clone https://github.com/Vlassis-sec/weather-app.git
```

2. **Navigate into the project directory**

```
cd weather-app
```

3. **Install dependencies**

```
npm install
```

4. **Run the development server**

```
npm run dev
```

5. Open the app in your browser at http://localhost:5173/
   (The exact address and port will be shown in your terminal after running npm run dev.)

## Credits

This project was fully designed and developed by me, as a hands-on exercise to practice React, TypeScript, and working with external APIs.

### Resources and Inspiration

- The initial idea and card layout were inspired by a weather card component tutorial by **GreatStack** on YouTube.
- Additional guidance came from several creators on YouTube who helped explain concepts like form handling, regex validation, and working with external APIs.
- [React documentation](https://react.dev/), [React Hook Form docs](https://react-hook-form.com/), and [CSS-Tricks](https://css-tricks.com/) were valuable resources throughout the process.
