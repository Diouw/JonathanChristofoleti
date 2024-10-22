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