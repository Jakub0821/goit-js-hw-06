
const ingredients = [
    'Potatoes',
    'Mushrooms',
    'Garlic',
    'Tomatos',
    'Herbs',
    'Condiments',
  ];
  
  const ulIngredients = document.getElementById('ingredients');
  
  
  const elements = [];
  ingredients.forEach(ingredient => {
    const newLi = document.createElement("li");
     newLi.textContent = ingredient;
     newLi.classList.add("item");
    elements.push(newLi)
    })
  append(...elements);