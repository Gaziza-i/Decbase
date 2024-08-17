function burgerBtn(x) {
    x.classList.toggle('change')
}

document.querySelector('.burger-button').addEventListener(
    'click', function () {
        document.querySelector('.header-menu-list').classList.toggle('hide-show');
})

const homeSection = document.getElementById('home')
const servicesSection = document.getElementById('services')

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
 
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            block: 'center'
        });
    });
});