const getImgs = async (query) => {
    let response = await fetch(
        `http://www.splashbase.co/api/v1/images/search?query=${query}`
    );

    const json = await response.json();
    return json.images;
};

// ex 1 and ex2
const loadImages = (query) => {
    getImgs(query).then((images) => {
        const cards = document.querySelectorAll(".card");

        cards.forEach((card, index) => {
            const img = document.createElement("img");
            if (images[index]) {
                img.src = images[index].url;
            } else {
                img.src = images[0].url;
            }

            card.removeChild(card.firstElementChild);
            card.insertBefore(img, card.firstChild);

            // EX 3
            const viewBtn = card.querySelector("button:first-child");
            viewBtn.dataToggle = "modal";
            viewBtn.dataTarget = `#exampleModal`;
            console.log(viewBtn);
        });

        // ex 3
        // const viewBtns = cards.querySelectorAll(
        //     ".card-body button:first-child"
        // );
        // console.log(viewBtns);
    });
};

// ex3
const viewBtns = document.querySelectorAll(
    ".card .card-body button:first-child"
);
// console.log(viewBtns);
viewBtns.forEach((btn, index) => {
    btn.dataToggle = "modal";
    dataTarget = "#exampleModal";

    const div = document.createElement("div");
    div.className = "modal fade";

    div.innerHTML = `
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
            </div>
            <div class="modal-body">
            ...
            </div>
            <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Save changes</button>
            </div>
        </div>
    </div>
    `;
});
