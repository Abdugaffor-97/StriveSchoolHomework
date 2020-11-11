// PAIR PROGRAMMING EXERCISE.
//       1 DRIVER, 1 NAVIGATOR.
//       1 Exercise each. Use GitHub to share the code.
//       Less exercise, more complicated.
//       Ex1) Get and present, using async / await pattern the users from: https://jsonplaceholder.typicode.com/users
//       Ex2) Create a dropdown (<select>) that allows the user to select between name, username and email.
//            Create then a filter. When the user types in something, you should filter the user based on the input and on the value of the select.
//            Es.: select on NAME. Filter input = Glenna, only user id number 9 should remain
//       Ex3) Create a function that, from the list of users, extracts only the name
//       Ex4) Create a function that, from the list of users, creates an array of addresses as string and not as an object. Like:
//               {
//               "street": "Victor Plains",
//               "suite": "Suite 879",
//               "city": "Wisokyburgh",
//               "zipcode": "90566-7771",
//               "geo": {
//                 "lat": "-43.9509",
//                 "lng": "-34.4618"
//               }
//           Should become Victor Plains, Suite 879, Wisokyburgh (90566-7771)

//       Ex5) Add a button that sorts the list by name ascending / descending (ONE button)
//       Ex6) Add a link on each user, when clicked it must go to a detail page, where to user information are presented (from the API)
//       EXTRA)
//       Visualize on a Google Map plugin all the users (using lat & lng)

const getData = async () => {
  return await fetch(
    "https://jsonplaceholder.typicode.com/users"
  ).then((response) => response.json());
};

const addTrow = function (user) {
  return `
  <tr>
    <th scope="row">${user.id}</th>
    <td>${user.name}</td>
    <td>${user.username}</td>
    <td>${user.email}</td>
    <td>${user.website}</td>
  </tr>
  `;
};

// Adds users to the table row
const updateTableBody = function (users) {
  let tableBody = document.querySelector("table.table tbody");
  let tableRows = [];
  users.forEach((user) => {
    tableRows.push(addTrow(user));
  });
  tableBody.innerHTML = tableRows.join();
};

document.addEventListener("DOMContentLoaded", function () {
  const chosenOntion = document.querySelector("select");
  // After DOMContentLoaded
  let filterUsers = [];
  getData().then((users) => {
    updateTableBody(users);
    filterUsers = users;
  });

  const input = document.querySelector("input");
  console.log(input);
  input.onkeydown = () => {
    getData().then((users) => {
      console.log(input.value);

      if (chosenOntion.value !== "chosen") {
        filterUsers = users.filter((user) => {
          return user[chosenOntion.value]
            .toLowerCase()
            .includes(input.value.toLowerCase());
        });
        updateTableBody(filterUsers);
        console.log(filterUsers);
      }
    });
  };

  const sortBtn = document.querySelector("#sort");
  sortBtn.onclick = function () {
    let sortedUsers = filteredUsers.sort((item) => {});
  };
});
