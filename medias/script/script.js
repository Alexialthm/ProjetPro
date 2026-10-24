// Listes des variables
let ul = document.querySelector('ul');
let burger = document.getElementById('burger');

let button        = document.querySelector('#buttonAccept');
let acceptCookies = document.querySelector('#boxCookies');

/****************** Menu burger ******************/
burger.addEventListener('click', function() {
    ul.classList.toggle('active') ;
    this.classList.toggle('active');
});
/*************************************************/

/****************** Accept Cookies ******************/
button.addEventListener('click', function(){
    acceptCookies.classList.add('active');
    Cookies.set('cookieAccept','1', {expires: 365});
});

let accepter = Cookies.get('cookieAccept');

if(accepter == 1) {
    acceptCookies.classList.add('active');
} else {
    acceptCookies.classList.remove('active');
}
/***************************************************/