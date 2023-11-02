//1
// Create an array with different pet types
const pets = ['bird', 'cat', 'dog'];

// Console log the array
console.log(pets);

//2
// Create an array with different phone types
const cellPhones = ['iphone', 'samsung'];

// Console log the array
console.log(cellPhones);

//3
// Create an empty array called schoolPrograms
const schoolPrograms = [];

// Add elements to the array in the specific order
schoolPrograms[0] = 'computer science';
schoolPrograms[1] = 'business';
schoolPrograms[2] = 'arts';

// Console log the school programs array
console.log(schoolPrograms);

//4
// Create an array called schoolPrograms with empty elements at positions 2 and 4
const supplies = [];
supplies[1] = '';
supplies[3] = '';

// Rearrange the other elements
supplies[0] = 'erasers';
supplies[2] = 'pens';
supplies[4] = 'paper';

// Console log the school programs array
console.log(supplies);

//5
// Create an array with different pet types
const pets2 = ['bird', 'cat', 'dog'];

// Remove the last item in the array using pop
pets2.pop();

// Console log the updated pets array
console.log(pets2);

//6
const schoolPrograms2 = ['computer science','business','arts'];
schoolPrograms2.pop();
console.log(schoolPrograms2);

//7
const schoolPrograms3 = ['computer science', 'business', 'arts'];
schoolPrograms3.push('medicine');
console.log(schoolPrograms3);

//8
const schoolPrograms4 = ['computer science', 'business', 'arts'];
schoolPrograms4[1] = 'medicine';
console.log(schoolPrograms4);

//9
var cars = ['Toyota','Ford','BMW','Nissan'];
console.log(cars);

//10
var starbucksHotDrinks = ['Hot Chocolate','Caramel Apple Spice','Steamed Milk','Vanilla Steamer'];
console.log(starbucksHotDrinks);

//11
var schoolPrograms5=[];
schoolPrograms5[0]='Computer Systems(Database), Computer Systems(Human Computer Interface), Computer Systems(Network Security Administration)';
schoolPrograms5[1]='Business';
schoolPrograms5[2]='arts';
console.log(schoolPrograms5)

//12
var schoolProgramsOne = ['computer science', 'business', 'arts'];
var schoolProgramsTwo = ['medicine', 'construction'];
console.log(schoolProgramsOne.concat(schoolProgramsTwo));

//13
var schoolProgramsThree = ['computer science', 'business', 'arts'];
var schoolProgramsFour = ['medicine', 'construction'];
var totalSchoolPrograms = schoolProgramsThree.concat(schoolProgramsFour);
console.log(totalSchoolPrograms);
console.log(totalSchoolPrograms.slice(1,4));