'use strict';

var submit = document.querySelector('.submit');
function checkInput() {
    var nom = document.querySelector('#nom');
    var prenom = document.querySelector('#prenom');
    var email = document.querySelector('#email');
    var mdp = document.querySelector('#mdp');
    var nameRegexp = new RegExp(/([.,;:?!§@&"'()])/);
    var emailRegexp = new RegExp(/(\w+\@\w+.com|\w+\@\w+.fr)/);
    var mdpRegexp = new RegExp(/?=.*([a-zA-ZÀ-ÿ0-9@#!*/$\\%?&]){6,}/);
    
    if (nameRegexp.exec(nom.value)) {
        document.querySelector('#pName').innerText = 'Le champ "nom" contient des caractères non autorisés';
    } 
    else{
        document.querySelector('#pName').innerText = 'Le champ "nom" est valide';
    }    
    if (nameRegexp.exec(prenom.value)) {
        document.querySelector('#pSurname').innerText = 'Le champ "prenom" contient des caractères non autorisés';
    } 
    else{
        document.querySelector('#pSurname').innerText = 'Le champ "prenom" est correct';
    }    
    if (!emailRegexp.exec(email.value)) {
        document.querySelector('#pEmail').innerText = 'Le fomat de l\'email est incorrect';
    }
    else{
        document.querySelector('#pEmail').innerText = 'Le fomat de l\'email est correct';
    }    
    if(!mdpRegexp.exec(mdp.value)){
        document.querySelector('#pMdp').innerText = 'Le mot de passe doit comporter au moin 6 caractères, 1 lettre Majuscule, 1 minuscule, 1 chiffre et 1 caractère spécial';
    }
    else{
        document.querySelector('#pMdp').innerText = 'Le mot de passe est correct';
    }    
}
submit.addEventListener('click', function(event){
    checkInput();
});