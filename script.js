//Const formulaire
const formRecette = document.getElementById('form-recette')
const nomRecette = document.getElementById('nom')
const recette = document.getElementById('recette')
const plat = document.getElementById('plat')
const btnForm = document.getElementById('btn-form')
const afficherTout = document.getElementById('result')
let recettesFinies = JSON.parse(localStorage.getItem('users')) || [];
//Const pour l'affichage de la recette
const afficherNom = document.getElementById('afficher-nom')
const afficherRecette = document.getElementById('afficher-recette')
const afficherPlat = document.getElementById('afficher-plat')
const favorisBouton = document.getElementById('favoris-btn')
const supprimerBouton = document.getElementById('supprimer-btn')



formRecette.addEventListener('submit', function (e) {
    e.preventDefault(); 

    const recetteFinie = {
        nom : nomRecette.value, 
        recette : recette.value,
        plat : plat.value
    }

    recettesFinies.push(recetteFinie)
    sauvegardeRecette(); 
    Recette();
    formRecette.reset();
})

Recette(); 

function sauvegardeRecette() {
    localStorage.setItem('recettesFinies', JSON.stringify(recettesFinies))
}


function Recette() {
    afficherNom.innerHTML=''
    afficherRecette.innerHTML=''
    afficherPlat.innerHTML=''
    favorisBouton.innerHTML=''
    supprimerBouton.innerHTML=''


    recettesFinies.forEach((recetteFinie) => {
        afficherNom.innerHTML += `<h2>${recetteFinie.nom}</h2>`
        afficherRecette.innerHTML += `<p>${recetteFinie.recette}</p>`
        afficherPlat.innerHTML += `<p>${recetteFinie.plat}</p>`
        favorisBouton.innerHTML += `<button>Favoris</button>`
        supprimerBouton.innerHTML += `<button>Supprimer</button>`

    })
}
