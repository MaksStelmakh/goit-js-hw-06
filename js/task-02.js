const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredient = document.querySelector(`ul#ingredients`)
const newEl = ingredients.map(item => {
  const items = document.createElement(`li`)
  items.classList.add(`item`)
  items.textContent = item
  return items
})
console.log(newEl)
ingredient.append(...newEl)