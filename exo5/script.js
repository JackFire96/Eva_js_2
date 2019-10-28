'use strict';7

var submit = document.querySelector('.submit');
function checkInput() {
    var nom = document.querySelector('#nom');
    var prenom = document.querySelector('#prenom');
    var email = document.querySelector('#email');
    var mdp = document.querySelector('#mdp');
    var error = document.querySelector('#error');
    var success = document.querySelector('#success');
    var nameRegexp = new RegExp(/([.,;:?!§@àçèé&"'()])/);
    var emailRegexp = new RegExp(/(\w+\@\w+.com|\w+\@\w+.fr)/);
    var mdpRegexp = new RegExp(/([a-zA-Z0-9])/);
    
    if (nom.nameRegexp) {
        error.innerHTML = '<p>Le champ "nom" contient des caractères non autorisés</p>';
    } 
    else if (prenom.nameRegexp) {
        error.innerHTML = '<p>Le champ "prénom" contient des caractères non autorisés</p>';
    } 
    else if (!email.emailRegexp) {
        error.innerHTML = '<p>Le fomat de l\'email est incorrect</p>';
    } 
    else if(!mdp.mdpRegexp){
        error.innerHTML = '<p>Le mot de passe doit comporter au moin 1 lettre Majuscule, 1 minuscule et 1 chiffre</p>';
    }
    else{
        success.innerHTML = '<p>Tous les champs sont corrects</p>';
    }    
}
submit.addEventListener('click', function(event){
    checkInput();
});