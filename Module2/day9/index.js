quranReciters = [
    {
        img: "images/mishari.jpeg",
        name: "Mishari Rashid Al-Alafasi",
        duration: "10 hours",
        albumName: "Ramadan 2016",
        about: "asdasd",
    },
    {
        img: "images/mishari.jpeg",
        name: "Mishari Rashid Al-Alafasi",
        duration: "10 hours",
        albumName: "Ramadan 2016",
        about: "asdasd",
    },
    {
        img: "images/mishari.jpeg",
        name: "Mishari Rashid Al-Alafasi",
        duration: "10 hours",
        albumName: "Ramadan 2016",
        about: "asdasd",
    },
    {
        img: "images/mishari.jpeg",
        name: "Mishari Rashid Al-Alafasi",
        duration: "10 hours",
        albumName: "Ramadan 2016",
        about: "asdasd",
    },
    {
        img: "images/mishari.jpeg",
        name: "Mishari Rashid Al-Alafasi",
        duration: "10 hours",
        albumName: "Ramadan 2016",
        about: "asdasd",
    },
    {
        img: "images/mishari.jpeg",
        name: "Mishari Rashid Al-Alafasi",
        duration: "10 hours",
        albumName: "Ramadan 2016",
        about: "asdasd",
    },
    {
        img: "images/mishari.jpeg",
        name: "Mishari Rashid Al-Alafasi",
        duration: "10 hours",
        albumName: "Ramadan 2016",
        about: "asdasd",
    },
    {
        img: "images/mishari.jpeg",
        name: "Mishari Rashid Al-Alafasi",
        duration: "10 hours",
        albumName: "Ramadan 2016",
        about: "asdasd",
    },
    {
        img: "images/mishari.jpeg",
        name: "Mishari Rashid Al-Alafasi",
        duration: "10 hours",
        albumName: "Ramadan 2016",
        about: "asdasd",
    },
    {
        img: "images/mishari.jpeg",
        name: "Mishari Rashid Al-Alafasi",
        duration: "10 hours",
        albumName: "Ramadan 2016",
        about: "asdasd",
    },
    {
        img: "images/mishari.jpeg",
        name: "Mishari Rashid Al-Alafasi",
        duration: "10 hours",
        albumName: "Ramadan 2016",
        about: "asdasd",
    },
    {
        img: "images/mishari.jpeg",
        name: "Mishari Rashid Al-Alafasi",
        duration: "10 hours",
        albumName: "Ramadan 2016",
        about: "asdasd",
    },
];
const reviewAlbum = document.querySelector("#review-album");

const container = document.querySelector(".container.reciters");
const row = container.querySelector(".row");
document.addEventListener("DOMContentLoaded", () => {
    const output = [];
    quranReciters.forEach((reciter) => {
        output.push(`
        <div class="col card col-6 col-md-4 col-lg-3 ">
            <img src="http://placehold.it/250" alt="${reciter.name}">
            <a href="#"><h4>${reciter.albumName}</h4></a>
            <p>${reciter.name}</p>
            <small>Duration: ${reciter.duration}</small>
            <h6><span class="badge badge-secondary">Classical</span></h6>
        </div>
        `);
    });
    row.innerHTML = output.join("");

    const btns = document.querySelectorAll(".btn.btn-outline-danger");
    const table = document.querySelector("table.table-striped");
    console.log(table);
    btns.forEach((btn) => {
        btn.style.animationPlayState = "running";
        // table.deleteRow(0);
        btn.addEventListener("click", function () {
            btn.style.animationPlayState = "running";
            table.deleteRow(1);
        });
    });
});
