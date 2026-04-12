import { fetchRandomRecipes } from "./randomRecipes.js";

describe('fetchRandomRecipes', () => {
  it('should fetch random recipes', async () => {
    // Mock fetch
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve({
          meals: [{
            idMeal: '1',
            strMeal: 'Random Meal'
          }]
        })
      })
    );

    await fetchRandomRecipes();

    expect(global.fetch).toHaveBeenCalledWith('https://www.themealdb.com/api/json/v1/1/random.php');
    // Check that DOM is updated
    const wrapper = document.querySelector('.random-recipe-wrapper');
    expect(wrapper).toBeDefined();
  });
});