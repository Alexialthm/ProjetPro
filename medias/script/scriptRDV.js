// Listes des variables
let ul     = document.querySelector('ul');
let burger = document.getElementById('burger');

let button        = document.querySelector('#buttonAccept');
let acceptCookies = document.querySelector('#boxCookies');

let loginInputs = document.querySelectorAll('.boxLogin input');
let loginLabels = document.querySelectorAll('.boxLogin label');

let boxCompte   = document.querySelector('.accesCompte');
let boxPassWord = document.getElementById('accesPassword');
let inputLogin  = document.getElementById('inputLogin');
let buttonNext = document.querySelector('#buttonNext input');

let afficherLogin = document.getElementById('afficherLogin');

let mofifLogin = document.getElementById('modifLogin');

let buttonValider = document.querySelector('#boxFormulaire input[type="submit"]');
let inputPassword = document.getElementById('password');

let PassInputs = document.querySelectorAll('#boxPassword input');
let PassLabels = document.querySelectorAll('#boxPassword label');

let affichePass   = document.querySelector('#affichePass'); 
let afficheFleche = document.querySelector('#affichePass i'); 
let textAffiche   = document.querySelector('#affichePass span'); 
const PASS        = document.getElementById('password');

let ouvrir = document.querySelector('#open');
let fermer = document.querySelector('.close');

let envoyer     = document.getElementById('envoyer');  
let email       = document.getElementById('email');
let explication = document.getElementById('explicationEmail');

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

/****************** POPUP ACCES COMPTE ******************/
//Transition Champ Label Login
for(let i = 0; i < loginInputs.length; i+=1){
    loginInputs[i].addEventListener('focus',function(){
        loginLabels[i].classList.add('active');
    });
    loginInputs[i].addEventListener('blur', function(){
        if(this.value == '') {
            loginLabels[i].classList.remove('active');
        }   
    });
}

// Déverrouillage du bouton suivant
inputLogin.addEventListener("input", function(e) {
    if (inputLogin.value.length >= 4) {
        buttonNext.classList.add('active');
        buttonNext.disabled = false; 
        buttonNext.addEventListener('click', function(){
            boxCompte.style.display = 'none';
            boxPassWord.style.display = 'flex';   
        });
    } else {
        e.preventDefault();
        buttonNext.classList.remove('active');
        buttonNext.disabled = true;   
    }
});
/********************************************************/

/****************** POPUP ACCES PASSWORD ******************/
//Reprise du login de la page précédente
// Fonction relié au bouton "Suivant"
function suivant() {
    inputLogin.value;
    afficherLogin.innerHTML = `${inputLogin.value} <i class="fa-solid fa-check"></i>`;
}

// Revenir à la page précédente (modifier login) 
mofifLogin.addEventListener('click', function(){
    boxCompte.style.display = 'flex';
    boxPassWord.style.display = 'none';
});

// Déverrouillage du bouton Valider 
inputPassword.addEventListener("input", function(e) {
    if (inputPassword.value.length >= 4) {
        buttonValider.classList.add('active');
        buttonValider.disabled = false; 
    } else { 
        buttonValider.classList.remove('active');
        buttonValider.disabled = true; 
    }
});

// Transition Champ Password
for(let i = 0; i < loginInputs.length; i+=1){
    PassInputs[i].addEventListener('focus',function(){
        PassLabels[i].classList.add('active');
    });
    PassInputs[i].addEventListener('blur', function(){
        if(this.value == '') {
            PassLabels[i].classList.remove('active');
        }   
    });
}

// Masquer Démasquer le mot de passe
affichePass.addEventListener('click', function(){
    if(afficheFleche.classList[1] == "fa-caret-right"){
        afficheFleche.classList.replace('fa-caret-right', 'fa-caret-up');
        PASS.type = "text";
        textAffiche.innerText = "Cacher le mot de passe";
    } else {
        afficheFleche.classList.replace('fa-caret-up', 'fa-caret-right');
        PASS.type = "password";
        textAffiche.innerText = "Afficher le mot de passe";
    }     
});

// Fenêtre modale "Mot de passe oublié" 
ouvrir.addEventListener('click', function(){
    document.querySelector('#pop').classList.add('active');
    document.querySelector('.popup div').classList.add('animate__zoomInUp');
    document.querySelector('.popup div').classList.remove('animate__backOutDown');

});
fermer.addEventListener('click', function(){
    document.querySelector('.popup div').classList.remove('animate__zoomInUp');
    document.querySelector('.popup div').classList.add('animate__backOutDown');
    setTimeout(function(){
        document.querySelector('#pop').classList.remove('active');

    }, 1000); 
});
/**********************************************************/

/****************** POPUP MOT DE PASSE OUBLIE ******************/
// Controle du champ email 
email.addEventListener('change', function() {
    VALIDEREMAIL(this);
});

// Fonction vérification email
const VALIDEREMAIL = (valeur)=> {
    let regex = /^[a-z0-9.-_]+@[a-z0-9.-_]+\.[a-z]{2,4}$/gi;
    let verifEmail = regex.test(valeur.value);
    if(verifEmail) {
        email.classList.add('vert');
        email.classList.remove('rouge');
        explication.innerHTML = "";
        envoyer.classList.add('active');
        return true;
    } else {
        email.classList.add('rouge');
        email.classList.remove('vert');
        explication.innerHTML = "L'adresse email n'est pas correcte!";
        envoyer.classList.remove('active');   
        return false;
    }
}
/***************************************************************/










