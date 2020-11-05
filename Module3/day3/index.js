const showImg = function (url) {
    const div = document.createElement("div");

    div.style.position = "absolute";
    div.style.width = "90%";
    div.style.height = "90vh";
    div.style.top = "2px";
    div.appendChild(img);

    div.innerHTML = `
    <div class="card bg-dark text-white">
        <img src='${url}'>
    </div>
    `;

    document.body.appendChild(div);
};

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
        const body = document.querySelector("body");
        cards.forEach((card, index) => {
            const img = document.createElement("img");
            if (images[index]) {
                img.src = images[index].url;
            } else {
                img.src = images[0].url;
            }

            card.removeChild(card.firstElementChild);
            card.insertBefore(img, card.firstChild);
        });
    });

    // EX 3
    const viewBtns = card.querySelector("button:first-child");
};
