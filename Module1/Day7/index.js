// Day

// You have been assigned to the creation of a Smartphone Shop Website.
//         The shop is just a showcase of the products of the shop with some extra informations.
//         No shopping cart / checkout features are required.
//         EX1.:
//         Add H1 title with the name of the shop
//         EX2.:
//         Add a TABLE with the top 5 products of the shop
//         EX3.:
//         Each product should have one image, title, description and price
//         EX4.:
//         Add Map to the shop
//         EX5.:
//         Add the links to Amazon products for each item in the table
//         EX6.:
//         Add a footer with the address and the name of the shop
//         EX7.:
//         Add a message board where the user can type a message in it (only client side)
//         // EXTRA
//         EX8.:
//         Write a function to change the heading text
//         EX9.:
//         Write a function to change the page background color
//         EX10.:
//         Write a function to change the footer address with a fake one

// Day 7

// EXERCISE 1
//      Create a new welcome alert message when the page successfully loads

window.onload = function () {
    alert(`Welcome to ${document.title}`);
};

//  EXERCISE 2
//       Write a function to change the Title of the page in something else (execute the function in browser console)

const changeTitle = function (titleName) {
    document.title = titleName;
};

//  EXERCISE 3a
//       Write a function to add a class to the page's h1 title in "red-color" (execute the function when title is hovered by mouse).

const addClassToTitle = function () {
    const h1 = document.querySelector("h1");
    h1.classList.add("red-color");
};

//  EXERCISE 3b
//       Write a function to remove "red-color" class from previous h1 (execute the function when the mouse leaves the title).

const removeClassFromTitle = function () {
    const h1 = document.querySelector("h1");
    h1.classList.remove("red-color");
};

//  EXERCISE 4
//   Write a function to change the text of only the p which are child of a div (execute the function by assigning it to a button's click event)

const changePContent = function () {
    let p = document.querySelector("div p");
    let input = document.querySelector("#change_p");
    p.innerText = input.value;
    input.value = "";
};

//  EXERCISE 5
//       Write a function to change the list title (you can use previous day's textarea as input or create a new text input field to grab the content

const changeListTitle = function () {
    let input = document.querySelector("#change_p");
    let listTitle = document.querySelector("#listTitle");
    listTitle.innerText = input.value;
    input.value = "";
};

//  EXERCISE 6
// Write a function to add a new item ONLY to the second list (create an input field + add button)

const addToTheSecond = function () {
    let input = document.querySelector("#change_p");
    const ul = document.querySelector("#secondList");
    let li = document.createElement("li");
    li.innerText = input.value;
    ul.appendChild(li);
    input.value = "";
};
//  EXERCISE 7
//       Write a function to make the first UL disappear (button)

const firstUlDisappear = function () {
    const ul = document.querySelector("#firstList");
    ul.style.display = "none";
};
//  EXERCISE 8
//       Write a function to make the background of every UL green (button)

const paintItGreen = function () {
    document.querySelectorAll("ul").forEach((ul) => {
        ul.style.backgroundColor = "green";
    });
};

//  EXERCISE 9
//       Add a "magnifier function" to the table.
//       When the user mouse goes on a table cell (not the image one) the font size must increase.
//       HINT use mouseenter / mouseleave events

const makeThemMagnifiable = function () {
    const aside = document.querySelectorAll("aside");

    for (let i = 0; aside.length; i++) {
        aside[i].addEventListener("mouseenter", () => {
            aside[i].classList.add("magnifier");
        });
    }
    for (let i = 0; aside.length; i++) {
        aside[i].addEventListener("mouseenter", () => {
            aside[i].classList.remove("magnifier");
        });
    }
};

//  EXERCISE 10
//       Add a button to toggle all the product images (toggle => if visible, hide, if not visible, show)

//   const toggleShowImages = function () {};

//   //##### EXTRA

//  EXERCISE 11
//       Make the heading of the page change color radomly every time the user clicks on it

//   const makeItClickable = function () {};

// EXERCISE 12
//     Refactor your HTML code with HTML5 semantic tags such as header, section, footer, etc
