import { createRecipeCard } from "./script.js";

describe('createRecipeCard', () => {
  it('should create a recipe card element', () => {
    const meal = {
      idMeal: '1',
      strMeal: 'Test Meal',
      strMealThumb: 'test.jpg'
    };

    const card = createRecipeCard(meal);

    expect(card).toBeDefined();
    expect(card.classList.contains('recipe__container-card')).toBe(true);
    expect(card.dataset.id).toBe('1');
    expect(card.querySelector('h2').textContent).toBe('Test Meal');
  });
});