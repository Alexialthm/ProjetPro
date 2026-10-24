/** Listes des variables **/
let ul = document.querySelector('ul');
let burger = document.getElementById('burger');

let button        = document.querySelector('#buttonAccept');
let acceptCookies = document.querySelector('#boxCookies');

let generer  = document.getElementById('generer');
let password = document.getElementById('password');

let formulaire   = document.getElementById('formulaire');
let login        = document.getElementById('login');
let email        = document.getElementById('email');
let info         = document.getElementById('info');

/****************** Menu burger ******************/
burger.addEventListener('click', function() {
    ul.classList.toggle('active') ;
    this.classList.toggle('active');
});
/***************************************************/

/******** Génération du Password aléatoire ********/
generer.addEventListener('click', function(e){
    e.preventDefault(); 
    genererPass();
});
/**************************************************/

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

/*********** Fonction générer Password ***********/
let genererPass = () => {
    let caractere = 'abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ.!?';
    let passAleatoire = '';
    const LONGUEUR = 15;

    for(let i=0; i<LONGUEUR; i+=1) {
        let aleatoire = Math.round(Math.random() *caractere.length);
        passAleatoire += caractere.substring(aleatoire, aleatoire+1);
    }
           
    password.value = passAleatoire;
}
/*************************************************/

/*********** Fonction valider champs du formulaire ***********/
const VALIDECHAMP = () => {
    if(!login.value) {
        info.innerText = "Merci de créer un login";
        return false;
    } else if (!password.value) {
        info.innerText = "Merci de créer un Password";
        return false;
    } else if (!email.value) {
        info.innerText = "Merci d'entrer votre email";
        return false;
    } else{
        return true;
    }
}
/*************************************************************/

/********** Fonction vérification email **********/
const VALIDEREMAIL = (valeur)=> {
    let regex = /^[a-z0-9.-_]+@[a-z0-9.-_]+\.[a-z]{2,4}$/gi;
    let verifEmail = regex.test(valeur.value);
    if(verifEmail) {
        info.innerHTML = "";
        return true;
    } else {
        info.innerHTML = "L'adresse email ne semble pas correcte!";
        return false;
    }
}
/*************************************************/

/********** Controle du champ email **********/
formulaire.email.addEventListener('change', function() {
    VALIDEREMAIL(this);
});
/*********************************************/

/********** Controle des champs de formulaire **********/
formulaire.addEventListener('submit', function(e){  
    if(VALIDECHAMP() && VALIDEREMAIL(formulaire.email)) {} else { 
        e.preventDefault();
    }      
}); 
/*******************************************************/ 


