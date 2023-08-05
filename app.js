const navSlide = () => {
    const mobile = document.querySelector('.mobile');
    const nav = document.querySelector('.nav_links');
    const navLinks = document.querySelectorAll('.nav_links li');

    mobile.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
    
        navLinks.forEach((link, index) => {
        if(link.style.animation) {
            link.style.animation = '';
        } else {
        link.style.animation = `navLinkFade 0.5 ease forwards ${index / 7 + 1.5}s`;}
    });

    mobile.classList.toggle('toggle');
    });
}

navSlide();
