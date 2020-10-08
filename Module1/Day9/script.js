window.onload = function () {
    const bingoCells = 76;
    const bingoTable = document.getElementById("bingoTable");

    let nums = []; // To store 'td' elements

    for (let i = 1; i <= bingoCells; i++) {
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

    const randNumGenerator = function () {
        return Math.floor(Math.random() * 77);
    };

    const randButton = document.querySelector("#randButton");
    randButton.onclick = function () {
        randNum = randNumGenerator();
        const td = document.querySelector(`#square${randNum}`);
        td.style.backgroundColor = "green";

        randNums = [].push(random)
        randNums.

    };
};
