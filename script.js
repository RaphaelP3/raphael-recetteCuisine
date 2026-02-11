//Const formulaire
const searchInput = document.getElementById('search')
const formRecette = document.getElementById('form-recette')
const nomRecette = document.getElementById('nom')
const recette = document.getElementById('recette')
const platForm = document.getElementById('plat-form');
const platTri = document.getElementById('plat-tri');
const btnForm = document.getElementById('btn-form')
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
        plat : platForm.value
    }

    recettesFinies.push(recetteFinie)
    sauvegardeRecette(); 
    recettes();
    formRecette.reset();
})

recettes(); 

//Enregistrer la recette dans le localStorage
function sauvegardeRecette() {
    localStorage.setItem('recettesFinies', JSON.stringify(recettesFinies))
}

//Supprimer la recette du localStorage
function supprimerRecette(index) {
    recettesFinies.splice(index, 1);
    sauvegardeRecette();
    recettes();
}

//Afficher la recette
function recettes(liste = recettesFinies) {
    afficherRecette.innerHTML = '';

    liste.forEach((recetteFinie, index) => {
        afficherRecette.innerHTML += `
            <div class="carte-recette">
                <h2>${recetteFinie.nom}</h2>
                <p>${recetteFinie.recette}</p>
                <p>${recetteFinie.plat}</p>
                <div class="btn-recette">
                <button class="btn" onclick="supprimerRecette(${index})">Supprimer</button> 
                <button class="btn-favoris">Favoris</button> 
                </div>
            </div>
        `;
    });
}
//Fonction de tri par type de plat 
function chercher() {
    const plats = platTri.value; 
    
    if (plats === "Tous") {
    recettes(); 
        return;
    } 
    const afficherPlat = recettesFinies.filter(r => r.plat === plats);
    recettes(afficherPlat);
}

trierBouton.addEventListener('click', chercher)

class favorisRecette {
    constructor() {
        const saved = localStorage.getItem("favoris")
        this.recettesFinies = saved ? JSON.parse(saved) : []
    }

    ajouterRecette(){

    }

    enregistrerRecette(){

    }

    supprimerRecette(){

    }

    tousLesFavoris() {

    }

    favori(){

    }


}

const favoris = new favorisRecette()