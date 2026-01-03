const searchBox = document.querySelector(".recipe__search-box");
const searchButton = document.querySelector(".recipe__search-btn");
const recipeContainer = document.querySelector(".recipe__container");

// Fetching recipes function
async function fetchRecipes(query) {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
    const data = await response.json();
    
    recipeContainer.innterHTML = "";
    data.meals.forEach((meal) => {
        const recipeCard = document.createElement('div');
        recipeCard.classList.add('recipe__container-card');
        recipeCard.innerHTML = `
            <h2>${meal.strMeal}</h2>
            <img src="${meal.strMealThumb}"/>
        `
        recipeContainer.appendChild(recipeCard);
    });

    // console.log(data.meals[0]);
};

// Enabling recipe search functionality
searchButton.addEventListener('click', (e) => {
        e.preventDefault();
        const searchRecipe = searchBox.value;
        fetchRecipes(searchRecipe);
    });

