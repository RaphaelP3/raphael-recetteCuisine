const formRecette = document.getElementById('form-recette')
const nomRecette = document.getElementById('nom')
const recette = document.getElementById('recette')
const btnForm = document.getElementById('btn-form')
const afficherRecette = document.getElementById('result')
let recettesFinies = JSON.parse(localStorage.getItem('users')) || [];


formRecette.addEventListener('submit', function (e) {
    e.preventDefault(); 

    const recetteFinie = {
        nom : nomRecette.value, 
        recette : recette.value
    }

    recettesFinies.push(recetteFinie)
    sauvegardeRecette(); 
})

function sauvegardeRecette() {
    localStorage.setItem('recettesFinies', JSON.stringify(recettesFinies))
}


