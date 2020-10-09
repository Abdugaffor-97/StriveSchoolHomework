window.onload = function () {
    const bingoCells = 76;
    const bingoTable = document.getElementById("bingoTable");

    let nums = []; // To store 'td' elements
    let randomNumbers = []; // To store randon numbers then I use it for pick num inside this array

    for (let i = 1; i <= bingoCells; i++) {
        randomNumbers.push(i);
        const td = document.createElement("td");
        td.id = `square${i}`;
        const h4 = document.createElement("h4");

        h4.innerText = i;
        td.appendChild(h4);
        nums.push(td);

        if (i % 19 === 0) {
            const tr = document.createElement("tr");

            for (num of nums) {
                tr.appendChild(num);
            }
            bingoTable.appendChild(tr);
            nums = [];
        }
    }

    const removeItem = function (array, value) {
        const index = array.indexOf(value);
        if (index > -1) {
            array.splice(index, 1);
        }
        return array;
    };

    const randButton = document.getElementById("randButton");
    randButton.onclick = function () {
        const randomNum = Math.floor(Math.random() * randomNumbers.length + 1);
        randomNumbers = removeItem(randomNumbers, randomNum);

        console.log(randomNum);
        console.log(randomNumbers);

        const td = document.getElementById(`square${randomNum}`);
        td.style.background = "green";
    };
};
