document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    window.scrollY > 50 ?
        navbar.style.backgroundColor = 'rgba(10, 10, 10, 0.98)' :
        navbar.style.backgroundColor = 'rgba(10, 10, 10, 0.95)';
});

var texts = [
    "Full-stack Developer",
    "Penetration Testing"
];

var textIndex = 0;
var charIndex = 0;
var speed = 100;
var el = document.getElementById("header-typing");

function typeWriter() {
    if (charIndex < texts[textIndex].length) {
        el.innerHTML =
            texts[textIndex].substring(0, charIndex + 1) +
            '<span class="cursor">|</span>';
        charIndex++;
        setTimeout(typeWriter, speed);
    } else {
        setTimeout(() => {
            charIndex = 0;
            textIndex = (textIndex + 1) % texts.length;
            el.innerHTML = "";
            typeWriter();
        }, 1500);
    }
}

typeWriter();


