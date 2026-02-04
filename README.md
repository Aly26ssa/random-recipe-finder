# 🍳 Random Recipe Finder

A simple and responsive web application that allows users to search for delicious recipes. This project fetches data from [TheMealDB API](https://www.themealdb.com) to display meal suggestions including names and thumbnail images.

## 📸 Screenshot

<img width="1037" height="538" alt="image" src="https://github.com/user-attachments/assets/9f10f964-eee2-42d9-88ce-8faec1d49e70" />

## ✨ Features

* **Recipe Search:** Users can input keywords to find specific meals.
* **Dynamic Results:** Fetches and renders recipe cards asynchronously.

* **Modern UI:** Clean styling with hover effects and CSS variables.

## 🛠️ Tech Stack

* **HTML5:** Semantic structure.
* **CSS3:** Flexbox, Grid, and Custom Properties (Variables).
* **JavaScript (ES6+):** `async/await`, Fetch API, and DOM manipulation.
* **API:** TheMealDB (Free open source recipe database).

## 🚀 Getting Started

To run this project locally on your machine, follow these steps:

1.  **Clone the repository**
    ```bash
    git clone https://aly26ssa.github.io/random-recipe-finder/
    ```

2.  **Navigate to the project directory**
    ```bash
    cd random-recipe
    ```

3.  **Launch the application**
    * Since this project uses ES6 Modules (`<script type="module" ...>`), you need to run it via a local server to avoid CORS errors.
    * **VS Code Users:** Install the "Live Server" extension, right-click `index.html`, and select "Open with Live Server".

## 📂 Project Structure

```text
random-recipe/
├── index.html          # Main HTML structure
├── style.css           # CSS styling and layout
├── script.js           # Logic for fetching API data
├── classNames.js       # Exports for classname variables
├── exitContainer.js    # Exit button and container functions
├── ingredients.js      # Functionality of recipe ingredients
├── randomRecipes.js    # Random recipe button functions and API data
└── README.md           # Project documentation
```
## 📝 License

This project is open source and available under the [MIT License](LICENSE).
