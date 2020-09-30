/*
ASSIGNMENT RULES
- All the answers must be in JavaScript
- You can google / use StackOverflow BUT we suggest you to use just the material provided
- You can ask for tutor's help
- You can test your code in a separate file or commenting the single parts in this file or directly in the Developer Console or in the Node Console.
*/

/* EXERCISE 1
Create and array with the first 5 positive numbers
*/

const arr = [1, 2, 3, 4, 5];

/* EXERCISE 2
Create an object containing your name, surname, email address and age.
*/

const data_dict = {
    name: "Abdug'affor",
    surname: "Abdurahimov",
    email: "abdurahimv.97@list.ru",
    age: 23,
};

/* EXERCISE 3
Add to the previously created object a boolean value to rappresent wheter you have or not a driving license
*/
data_dict["driving_license"] = true;
console.log(data_dict);

/* EXERCISE 4
Remove from the previously created object the age
*/

delete data_dict.age;
console.log(data_dict);

/* EXERCISE 5
Create a second object with name, surname, email address and verify that this object has a different email address
*/

data_dict2 = {
    name: "Abdug'affor1",
    surname: "Abdurahimov1",
    email: "abdurahimv.971@list.ru",
    age: 231,
};
console.log(data_dict.email !== data_dict2.email);

/* EXERCISE 6
You are working for an eCommerce. In the variable totalShoppingCart you have the total amount spent by the current user.
In your eCommerce you have a promotion: if the customer shopping cart is more than 50€, they can have free shipping (otherwise it costs 10€).
Write an algorithm that calculate totalCost based on this assumption.
*/

let totalShoppingCart, cart;
cart = [12, 23, 4, 2];

totalShoppingCart += cart;

for (let price of cart) {
    totalShoppingCart += price;
}
if (cart < 50) {
    totalShoppingCart += 10;
}
console.log(`Total amount ${totalShoppingCart}€`);

/* EXERCISE 7
You are working for the same eCommerce. Today is the black friday and everything has a 20% discount at the end of the purchase.
Modify the previous answer inserting this information and, applying the same rules for the shipping cost, calculate the totalShopping.
*/

is_black_friday = true;
if (is_black_friday) {
    totalShoppingCart = totalShoppingCart * 0.8;
    if (totalShoppingCart < 50) {
        totalShoppingCart += 10;
        console.log(
            `Today is Black Friday so we have a 20% discount for each product. Total amount: ${totalShoppingCart}`
        );
    } else {
        console.log(
            `Today is black friday so we have 20% discount for each product and we have free delivery for you. Total amount${totalShoppingCart}`
        );
    }
}

/* EXERCISE 8
Create an object rapresenting a car with properties like brand, model, licensePlate.
After you create the first car, clone it and change the licensePlate without affecting the original car.
Do it for five cars.
*/

const car1 = {
    brand: "AUDI",
    model: "SMTH",
    licensePlate: 222,
};

const car2 = { ...car1 };
console.log(car1);
car2.licensePlate = 333;
console.log(car2);

const car3 = { ...car1 };
console.log(car1);
car3.licensePlate = 111;
console.log(car3);

const car4 = { ...car1 };
console.log(car1);
car4.licensePlate = 444;
console.log(car4);

const car5 = { ...car1 };
console.log(car1);
car5.licensePlate = 555;
console.log(car5);

const car6 = { ...car1 };
console.log(car1);
car6.licensePlate = 666;
console.log(car6);

/* EXERCISE 9
Create a new array called carsForRent containing all the cars from the previous exercise
*/
let carsForRent = [car1, car2, car3, car4, car5, car6];

/* EXERCISE 10
Remove the first and the last car from the carsForRent array.
*/
console.log(carsForRent);
carsForRent.shift();
carsForRent.pop();
console.log(`result:`, carsForRent);

/* EXERCISE 11
Print in the console, the types of a single car, of the car licensePlate and of the brand
*/

console.log(typeof car1.licensePlate);
console.log(typeof car1.brand);

/* EXERCISE 12
Create a new array called carsForSale and insert 3 cars in it.
Store in the variable totalCars the number of cars in both carsForSale and carsForRent arrays
*/

let carsForSale = [car1, car4, car3];
const totalCars = carsForSale.length + carsForRent.length;
console.log(totalCars);
console.log(carsForSale.length); /* WRITE YOUR CODE HERE */

/* EXERCISE 13
Print in the console the data from each car in the carsForSale array
*/

for (let _data of carsForSale) {
    console.log(_data);
}
/* WHEN YOU ARE FINISHED
Send the code on Discord via a message to your tutor! In the next days we'll also learn how to use GIT 
*/
