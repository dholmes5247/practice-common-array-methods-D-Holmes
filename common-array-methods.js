/* Instructions 
You are working as a developer for a local café that needs a system to track 
customer orders. The café serves drinks and pastries, and orders are stored in a 
2D array, where each row represents a category (drinks or pastries), and each 
column represents an order within that category. 
Your task is to use the .length property to track the number of items in the 
café’s order system dynamically. */

// Task 1: Create a multidimensional array called orders with 2 rows
// first row stores 3 drink orders ("latte", "tea", Espresso")
// 2nd row has 3 pastry orders ("Croissant", " Muffin", "Bagel")

let orders = [
    ["latte", "tea", "Espresso"],
    ["Criossant", "Muffin", "Bagel"]
]

// Task 2: log # of drinks and pastries using .length on each row

console.log(orders[0].length); // row 1 should show 3
console.log(orders[1].length); // drink row 2 should show 3


//Task 3: use bracket notation to log a sepcific drink and a specific pastry w/ hardcoded #'s
// ex: log first drink and last pastry-Do this for 3 combinations

console.log(orders[0][2]); // logs "Espresso"
console.log(orders[1][2]); // logs "Bagel"
console.log(orders[0][1]); // logs "tea"


// Task 4: Access orders dynamically with Variables

let row = 0;
let column = 2;
let selectedOrder = orders[row][column];
console.log("You selected Drink: " + selectedOrder); // shows "You selected Drink: " Espresso

let row2 = 1;
let column2 = 1;
let selectedOrder2 = orders[row2][column2];
console.log("You selected Food: " + selectedOrder2); // "You selected Food: " Muffin


// Task 5: Write a loop that logs all of the items in drinks, ensuring the loop
// dynamically adjusts to the number of items using .length

for(let i = 0; i < orders[0].length; i++){
    console.log("Drink Items: "+ orders[0][i]); // logs everything in drinks row
}

for(let i = 0; i < orders[1].length; i++){
    console.log("Food Items: " + orders[1][i]); // logs everything in food row
}

/*Task 6: Add a New Order & Track Length 
Suppose a new order has been placed: a customer ordered a flat white. Add “flat 
white” to the drinks category dynamically. Log the updated number of drinks after 
the addition. 
Declare two variables and use them with bracket notation to log the selected order 
dynamically. */

orders[0].push("Flat White"); // adds "Flat White" to drinks with .push
console.log(orders[0].length); // logs 4

let row3 = 1;
let column3 = 1;
let foodOrder = orders[row3][column3];
console.log("you selected Food item: " + foodOrder); // Logs selected food item

let row4 = 0;
let column4 = 3;
let drinkOrder = orders[row4][column4];
console.log("you selected Drink item: " + drinkOrder); // Logs selected drink item
