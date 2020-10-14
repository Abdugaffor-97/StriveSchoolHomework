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

const container = document.querySelector(".container");
const row = container.querySelector(".row");
document.addEventListener("DOMContentLoaded", () => {
    const output = [];
    quranReciters.forEach((reciter) => {
        output.push(`
        <div class="col col-6 col-md-4 col-lg-3">
            <img src=${reciter.img} alt="${reciter.name}">
            <a href="#"><h4>${reciter.albumName}</h4></a>
            <p>${reciter.name}</p>
            <small>Duration: ${reciter.duration}</small>
        </div>
        `);
    });
    row.innerHTML = output.join("");
});
