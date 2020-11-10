const getCard = function (book) {
    return `
        <div class="col my-2 px-2 d-flex justify-content-center">
            <div class="card">
                <img src="${book.img}" class="card-img-top" alt="">
                <div class="card-body p-2 pb-0">
                    <h6>${book.title}</h6>
                    <div class='d-flex justify-content-between align-content-between '>
                        <div class='mt-3'>
                            <span style=' font-size:15px;' class="badge badge-secondary badge-pill">${
                                book.category
                            }</span>
                        </div>
                        <div class='d-flex'>
                            <div class='d-flex flex-column pl-2 text-right'>
                                <span style='font-size:15px; text-decoration:line-through; colour:green;'>$ ${
                                    book.price + 5
                                }</span>
                                <span class='text-warning' style=' font-size:25px;'>$ ${
                                    book.price
                                }</span>
                            </div>
                            <i class="fa fa-shopping-cart bg-success text-white p-2 rounded ml-2 d-none fa-lg"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `;
};

document.addEventListener("DOMContentLoaded", function () {
    const getBooks = async () => {
        return await fetch(
            "https://striveschool-api.herokuapp.com/books"
        ).then((respone) => respone.json());
    };
    const cardsBody = document.querySelector(".container .row");
    getBooks().then((books) => {
        books.forEach((book) => {
            cardsBody.innerHTML += getCard(book);
        });

        const cardBtn = document.querySelectorAll(".fa.fa-shopping-cart");
        const chosenBooksBody = document.querySelector(".list-group");
        const cards = document.querySelectorAll(".card");

        cardBtn.forEach((btn, index) => {
            btn.addEventListener("click", () => {
                chosenBooksBody.innerHTML += `
            <li class="list-group-item d-flex justify-content-between align-items-center">
                ${books[index].title}
            <div>
                <span class="badge badge-primary badge-pill">1</span>
                <button type="button" class="btn btn-danger">Remove</button>
            </div>
            </li>
            `;
                cards[index].classList.add("bg-info");
                alert(`${books[index].title} Added To Card`);
            });
        });
    });

    // EX 7
    const input = document.querySelector("nav.navbar input");
    input.onkeyup = () => {
        const value = input.value;
        getBooks().then((books) => {
            books = books.filter((book, index) => {
                return book[index].title.includes(value);
            });

            cardsBody.innerHTML = "";
            books.forEach((book) => {
                cardsBody.innerHTML += getCard(book);
            });
        });
    };
});
