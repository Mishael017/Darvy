
let Button = document.querySelector('button');
let mobileMenu = document.querySelector('.mobile_menu');
let body = document.querySelector('body');

    Button.addEventListener('click', function(){
    mobileMenu.classList.toggle('mobile_menu_active');
    Button.classList.toggle('button-close');
    body.classList.toggle('no-scroll');
});

let down = document.querySelector('.dark::before');
    
    
