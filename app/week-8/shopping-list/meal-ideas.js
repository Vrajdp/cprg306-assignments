"use client";
import { useState, useEffect } from 'react';

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);

  async function fetchMealIdeas(ingredient) {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
    const data = await response.json();
    return data.meals;
  }

  useEffect(() => {
    async function loadMealIdeas() {
      if (ingredient) {
        const meals = await fetchMealIdeas(ingredient);
        setMeals(meals || []);
      }
    }
    loadMealIdeas();
  }, [ingredient]);

  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Meal Ideas</h2>
      <ul className="space-y-2">
        {meals.map(meal => (
          <li key={meal.idMeal} className="flex items-center space-x-4 p-2 border border-gray-300 rounded-md">
            <img src={meal.strMealThumb} alt={meal.strMeal} className="w-16 h-16 rounded-md object-cover" />
            <span>{meal.strMeal}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
