// EXERCISE 5:
// Add a new task to the list.
// Suggestion:
// // - Use document.getElementById to get the UL item and the input text
// - Use the document.createElement to create the new List Item
// - Append the child to the UL

function addNewTask() {
    let newTask = document.querySelector("#newTask");
    li = document.createElement("li");
    li.innerText = newTask.value;
    document.querySelector("ul").appendChild(li);
    newTask.value = "";
    console.log(newTask);
}

// EXERCISE 6:
// // Create a method "removeLast" which removes the last item from the task list
function removeLast() {
    let tasks = document.querySelectorAll("li");
    tasks[tasks.length - 1].parentNode.removeChild(tasks[tasks.length - 1]);
}

/* EXERCISE 7: 
Create a method "removeFirst" which removes the first item from the task list
*/
function removeFirst() {
    let tasks = document.querySelectorAll("li");
    tasks[0].parentNode.removeChild(tasks[0]);
}

/* EXERCISE 8: 
Create a method "getTasksAsArray" which returns (and print to the console) an array containing the tasks as string
            */
function getTasksAsArray() {
    let tasks = document.querySelectorAll("li");
    tasksArray = [];
    for (task of tasks) {
        tasksArray.push(task.innerText);
    }
    console.log(tasksArray);
}

/* EXERCISE 9:
Create a method "changeTaskBackgroundColor" which takes color from the color picker with an 
onchange event listener ad applies it as background to list item
            */
function changeTaskBackgroundColor() {
    const color = document.querySelector("#colorPicker");

    document.querySelector("ul").style.background = color.value;
}

/* EXTRA */

/* EXERCISE 10: 
Create a method "bubbleSort()" which sort the task alphabetically using the bubble sort algorithm

Use your spare time to beautify your task list with CSS.
Suggestion:
- Break the code into many function for semplicity 
- Reuse the functions previously created
*/

function bubbleSort() {
    let taskList = document.querySelector("ul");
    const tasks = document.querySelectorAll("li");
}
