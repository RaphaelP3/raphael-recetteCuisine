//Const formulaire
const chercherInput = document.getElementById('search')
const formRecette = document.getElementById('form-recette')
const nomRecette = document.getElementById('nom')
const recette = document.getElementById('recette')
const platForm = document.getElementById('plat-form');
const platTri = document.getElementById('plat-tri');
const btnForm = document.getElementById('btn-form')
let recettesFinies = JSON.parse(localStorage.getItem('recettesFinies')) || [];
//Const pour l'affichage de la recette
const afficherRecette = document.getElementById('afficher-recette')
const chercherBouton = document.getElementById('chercher-mot')
const trierBouton = document.getElementById('btn-tri')

//Ecouteur d'évènements du formulaire
formRecette.addEventListener('submit', function (e) {
    e.preventDefault();

    const recetteFinie = {
        nom: nomRecette.value,
        recette: recette.value,
        plat: platForm.value,
        favori: false
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

//Sauvegarde les favoris si ils existent pas
function gestionFavori(index) {
    recettesFinies[index].favori = !recettesFinies[index].favori;
    sauvegardeRecette();
    recettes();
}

//Afficher la recette
function recettes(liste = recettesFinies) {
    afficherRecette.innerHTML = '';
    liste.forEach((recetteFinie, index) => {

        afficherRecette.innerHTML += `
            <div class="carte-recette">
                <div class="titre-recette">
                <h2>${recetteFinie.nom}</h2> 
                <button class="btn" onclick="gestionFavori(${index})">${recetteFinie.favori ? "Retirer ⭐" : "Ajouter ☆"}</button>
                </div>
                <h3><strong>${recetteFinie.plat}</strong></h3>
                <p>${recetteFinie.recette}</p>
                <button class="btn" onclick="supprimerRecette(${index})">Supprimer</button>
            </div>
        `;
    });
}

//Fonction de tri par mot
function chercherMot() {
    const mot = chercherInput.value.toLowerCase()
    let resultats = [...recettesFinies];


    if (mot) {
        const rechs = resultats.filter(r => r.recette.toLowerCase().includes(mot));
        recettes(rechs);
        return;
    }
}

//Fonction de tri par type de plat 
function chercherPlat() {
    const plats = platTri.value;

    if (plats === "Favoris") {
        const favs = recettesFinies.filter(r => r.favori);
        recettes(favs);
        return;
    }

    if (plats === "Tous") {
        recettes();
        return;
    }

    const afficherPlat = recettesFinies.filter(r => r.plat === plats);
    recettes(afficherPlat);
}

//Ecouteurs d'évènements des boutons de nav
chercherBouton.addEventListener('click', chercherMot)
trierBouton.addEventListener('click', chercherPlat)

