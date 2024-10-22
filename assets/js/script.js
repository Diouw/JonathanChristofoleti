document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Previne o comportamento padrão

        document.querySelectorAll('nav ul li a').forEach(link => link.classList.remove('active'));
        this.classList.add('active'); 

        const targetID = this.getAttribute('href');
        const targetElement = document.querySelector(targetID);

        window.scrollTo({
            top: targetElement.offsetTop - 60, // Faz scroll até a posição da seção
            behavior: 'smooth' // Transição suave
        });
    });
});


const words = ['Web', 'Mobile'];
let currentIndex = 0;
let currentWord = '';
let isDeleting = false;
const dynamicTextElement = document.getElementById('dynamic-text');
const typingSpeed = 150;
const deletingSpeed = 100; 
const delayBetweenWords = 1500;

function type() {
    const fullWord = words[currentIndex];

    if (isDeleting) {
        currentWord = fullWord.substring(0, currentWord.length - 1);
    } else {
        currentWord = fullWord.substring(0, currentWord.length + 1);
    }

    dynamicTextElement.textContent = currentWord;

    let timeout = typingSpeed;

    if (isDeleting) {
        timeout = deletingSpeed;
    }

    if (!isDeleting && currentWord === fullWord) {
        timeout = delayBetweenWords;
        isDeleting = true;
    } else if (isDeleting && currentWord === '') {
        isDeleting = false;
        currentIndex = (currentIndex + 1) % words.length;
        timeout = 500;
    }
    setTimeout(type, timeout);
}

document.addEventListener('DOMContentLoaded', () => {
    type();
});
