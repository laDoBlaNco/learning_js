/**Shopping List
Create a shopping list in the variable myList. The list should be a multi-dimensional array containing several sub-arrays.

The first element in each sub-array should contain a string with the name of the item. The second element should be a number representing the quantity i.e.

["Chocolate Bar", 15]
There should be at least 5 sub-arrays in the list. */


const myList = [];
function addToList(item,ct){
  myList.push([item,ct]);
}
addToList('yautia',3);
addToList('rice',1);
addToList('tortillas',3);
addToList('bread',2);
addToList('sugar',1);
addToList('water',18);
addToList('ground beef',4);
addToList('chicken',2);
addToList('toilet paper',1);
addToList('oreos',2);

console.log(myList);