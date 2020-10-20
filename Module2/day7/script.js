// EX11) Write a function to add a new link into the navbar
function addNavLink() {
    const navbar = document.querySelector("nav");
    navbar.innerHTML += '<a class="p-2 text-muted" href="#">Another link</a>';
}

// EX12) Write a function to remove the "Search" magnifying glass icon
function removeSearchIcon() {
    const searchIcon = document.querySelector("svg");
    searchIcon.innerHTML = "";
}

// EX13) Write a function to change the background of the jumbotron
function changeBackgroundJumbotron() {
    const jumbotron = document.querySelector(".jumbotron");
    jumbotron.style = "background-color: lightblue !important";
}

// EX14) Write a function to change the color of the main title
function changeTitleColour() {
    const title = document.querySelector("h1");
    title.style.color = "green";
}

// EX15) Write a function to change the column size for post headings
function changeColumnSizeHeading() {
    const headings = document.querySelectorAll(".blog-post-title");

    headings.forEach((heading) => {
        heading.style = "margin: 0 !important; padding: 0 !important";
    });
}

// EX16) Write a function to remove all the links under "Elsewhere"
function removeLinks() {
    links = document.querySelectorAll(".p-4:last-of-type ol li");
    links.forEach((link) => {
        link.innerHTML = "";
    });
}

// EX17) Write a function to trim just the first 50 characters in the first paragraph for each blog post
// function trimParagraph() {
//     const paragraphs = document.querySelectorAll(".blog-post > p:nth-child(3)");
//     // console.log(paragraps);
//     const text = "";
//     paragraphs.forEach((paragraph) => {
//         console.log(paragraph);

//         for (let i = 0; i <= paragraph.innerText.length; i++) {
//             if (i >= 50) {
//                 text += paragraph[i];
//             }
//         }
//         paragraph.innerText = text;
//         text = "";
//     });
// }

// EX18) Write a function and attach it to the "Newer" button, to add new Blog Post (just div and title)
const createBlog = function () {
    const newerBtn = document.querySelector("[aria-disabled=true]");
    // newBlog.classList;
    newerBtn.classList.remove("disabled");
    console.log(newerBtn.classList);
    newerBtn.addEventListener("click", () => {
        const blogContainer = document.querySelector(".col-md-8.blog-main");
        console.log(blogContainer);
        blogContainer.innerHTML += `<div><p>
                        Cum sociis natoque penatibus et magnis
                        <a href="#">dis parturient montes</a>, nascetur ridiculus mus.
                        Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis
                        vestibulum. Sed posuere consectetur est at lobortis. Cras mattis
                        consectetur purus sit amet fermentum.
                    </p></div>`;
    });
};

// EX19) Write a function and attach it to the "Older" button, to remove the last Blog Post

// EX20) Write an alert with the name of the author every time the user hover with the mouse over an author name
function alertUser() {
    const users = document.querySelectorAll(".blog-post-meta a");
    users.forEach((user) => {
        console.log(user);
        user.addEventListener("mouseenter", function (event) {
            alert("user");
            event.target.style.color = "red";
        });
    });
}

document.addEventListener("DOMContentLoaded", () => {
    addNavLink();
    removeSearchIcon();
    changeBackgroundJumbotron();
    changeTitleColour();
    changeColumnSizeHeading();
    removeLinks();
    // trimParagraph();
    alertUser();
    createBlog();
});
