import { getRecipeDetails } from "./ingredients.js";

describe('getRecipeDetails', () => {
  it('should fetch recipe details and update DOM', async () => {
    // Mock fetch
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve({
          meals: [{
            idMeal: '1',
            strMeal: 'Test Meal',
            strInstructions: 'Test instructions',
            strIngredient1: 'Ingredient 1',
            strMeasure1: 'Measure 1'
          }]
        })
      })
    );

    await getRecipeDetails('1');

    expect(global.fetch).toHaveBeenCalledWith('https://www.themealdb.com/api/json/v1/1/lookup.php?i=1');
    // Add more assertions as needed
  });
});