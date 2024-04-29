
const getElement = (selector) => {
    const element = document.querySelector(selector)

    if (element) return element
    throw Error(
        `Please double check your class names, there is no ${selector} class`
    )
}

const date = getElement('#date')
const currentYear = new Date().getFullYear()
date.textContent = currentYear;


const toggleMenu = () => {

    const menu = document.querySelector('.menu-links');
    const icon = document.querySelector('.hamburger-icon');

    menu.classList.toggle('open');
    icon.classList.toggle('open');
}


/* // Change the text of all headings to "Gautier was here!"
const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
for (let i = 0; i < headings.length; i++) {
    headings[i].textContent = 'Gautier was here!';
}

// Display an alert message when the page loads
window.onload = function () {
    alert('Hey Gautier, welcome to my website!'); // Replace with any message you like
} */

// document.body.style.transform = "scaleX(-1)";

