//Const formulaire
const searchInput = document.getElementById('search')
const formRecette = document.getElementById('form-recette')
const nomRecette = document.getElementById('nom')
const recette = document.getElementById('recette')
const plat = document.getElementById('plat')
const btnForm = document.getElementById('btn-form')
const afficherTout = document.getElementById('result')
let recettesFinies = JSON.parse(localStorage.getItem('recettesFinies')) || [];
//Const pour l'affichage de la recette
const afficherRecette = document.getElementById('afficher-recette')
const trierBouton = document.getElementById('btn-tri')
const favorisBouton = document.getElementById('favoris-btn')
const supprimerBouton = document.getElementById('supprimer-btn')


//Ecouteur d'évènements du formulaire
formRecette.addEventListener('submit', function (e) {
    e.preventDefault(); 

    const recetteFinie = {
        nom : nomRecette.value, 
        recette : recette.value,
        plat : plat.value
    }

    recettesFinies.push(recetteFinie)
    sauvegardeRecette(); 
    recette();
    formRecette.reset();
})

recette(); 

//Enregistrer la recette dans le localStorage
function sauvegardeRecette() {
    localStorage.setItem('recettesFinies', JSON.stringify(recettesFinies))
}

//Supprimer la recette du localStorage
function supprimerRecette(index) {
    recettesFinies.splice(index, 1);
    sauvegardeRecette();
    recette();
}

//Afficher la recette
function recette() {
    afficherRecette.innerHTML = '';

    recettesFinies.forEach((recetteFinie, index) => {
        afficherRecette.innerHTML += `
            <div class="carte-recette">
                <h2>${recetteFinie.nom}</h2>
                <p>${recetteFinie.recette}</p>
                <p>${recetteFinie.plat}</p>
                <button class="btn" onclick="supprimerRecette(${index})">Supprimer</button>
                
            </div>
        `;
    });
}

function chercher() {
    const plats = plat.value; 
    let afficherPlat = [];
    
    if (plat) {
        afficherPlat = recettesFinies.filter(p =>p.plat === plat)
    } 
    recette(afficherPlat)
}

trierBouton.addEventListener('click', chercher)