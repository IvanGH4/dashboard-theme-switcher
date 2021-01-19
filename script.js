const switchBtn = document.querySelector('.theme-switcher');
const ball = document.querySelector('.theme-switcher span');
const body = document.querySelector('.body');
const header = document.querySelector('.header');
const cards = document.querySelectorAll('.card');
const overviewTitle = document.querySelector('.overview-title');

switchBtn.addEventListener('click', () => {
    ball.classList.toggle('active');

    switchTheme();

    // if ball is active = light theme else dark theme
});

function switchTheme() {
    body.classList.toggle('body__dark');
    header.classList.toggle('header__dark');
    cards.forEach(card => card.classList.toggle('card__dark'));
    overviewTitle.classList.toggle('overview-title__dark');
}