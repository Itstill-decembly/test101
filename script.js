// script.js
document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission
    alert('Thank you for your message!');
});
// script.js
document.querySelector('.add-to-cart').addEventListener('click', () => {
    window.scrollTo({
        top: document.querySelector('.how-to-play').offsetTop,
        behavior: 'smooth'
    });
});
// script.js
document.querySelector('.add-to-cart').addEventListener('click', () => {
    window.location.href = 'https://merch.riotgames.com/en-us/product/wingman-plush/'; // Redirects to the URL
});
document.querySelector('.add-to-cart3').addEventListener('click', () => {
    window.scrollTo({
        top: document.querySelector('.how-to-play').offsetTop,
        behavior: 'smooth'
    });
});
// script.js
document.querySelector('.add-to-cart3').addEventListener('click', () => {
    window.location.href = 'https://merch.riotgames.com/en-us/product/vct25-masters-bangkok-dawn-duelist-hoodie/'; // Redirects to the URL
});
document.querySelector('.add-to-cart2').addEventListener('click', () => {
    window.scrollTo({
        top: document.querySelector('.how-to-play').offsetTop,
        behavior: 'smooth'
    });
});
// script.js
document.querySelector('.add-to-cart2').addEventListener('click', () => {
    window.location.href = 'https://merch.riotgames.com/en-us/product/coin-emperor-tahm-kench-figure/'; // Redirects to the URL
});
// script.js
document.querySelector('.cta-button').addEventListener('click', () => {
    window.scrollTo({
        top: document.querySelector('.how-to-play').offsetTop,
        behavior: 'smooth'
    });
});
// script.js
document.querySelector('.cta-button').addEventListener('click', () => {
    window.location.href = 'https://www.twitch.tv/riotgames'; // Redirects to the URL
});

// Existing watch-button code remains
document.querySelectorAll('.watch-button').forEach(button => {
    button.addEventListener('click', () => {
        const teams = button.previousElementSibling.querySelectorAll('.team span');
        const match = `${teams[0].textContent} vs ${teams[1].textContent}`;
        alert(`Watch ${match} live now!`);
    });
});