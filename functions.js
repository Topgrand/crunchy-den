function showFoods(destination) {
  var foodList = document.getElementById('food-list');
  foodList.innerHTML = '';

  var foods = []; // Array to store food items

  // Populate food items based on destination
  switch(destination) {
    case 'destination1':
      foods = ['Spaghetti Bolognese', 'Grilled Chicken', 'Beef Lasagna'];
      break;
    case 'destination2':
      foods = ['Chocolate Cake', 'Tiramisu', 'Cheesecake'];
      break;
    case 'destination3':
      foods = ['Mojito', 'Pina Colada', 'Iced Tea'];
      break;
    case 'destination4':
      foods = ['Bruschetta', 'Garlic Shrimp', 'Stuffed Mushrooms'];
      break;
    case 'destination5':
      foods = ['Caesar Salad', 'Greek Salad', 'Caprese Salad'];
      break;
    case 'destination6':
      foods = ['Tomato Soup', 'Chicken Noodle Soup', 'Butternut Squash Soup'];
      break;
    case 'destination7':
      foods = ['Fettuccine Alfredo', 'Carbonara', 'Pesto Pasta'];
      break;
    case 'destination8':
      foods = ['Grilled Salmon', 'Shrimp Scampi', 'Lobster Linguine'];
      break;
    case 'destination9':
      foods = ['Vegetable Stir Fry', 'Eggplant Parmesan', 'Mushroom Risotto'];
      break;
    case 'destination10':
      foods = ['Coca-Cola', 'Orange Juice', 'Iced Coffee'];
      break;
    default:
      break;
  }

  // Display food items
  foods.forEach(function(food) {
    var foodItem = document.createElement('div');
    foodItem.classList.add('food-item');
    foodItem.textContent = food;
    foodList.appendChild(foodItem);
  });

  // Toggle flip animation
  var card = document.querySelector('.' + destination);
  if (card) {
    card.classList.toggle('flipped');
  }

  document.getElementById('foods').style.display = 'block';
}