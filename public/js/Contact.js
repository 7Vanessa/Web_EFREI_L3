const completeTable = () => {
    document.getElementById('phishing').style.display = "block"
    document.getElementById('catfishing').style.display = "none"

    var ligne = document.createElement('tr')
    ligne.className = 'ligne'

    var ligne_nom = document.createElement('th')
    ligne_nom.innerHTML = localStorage.getItem('nom')

    var ligne_prenom = document.createElement('th')
    ligne_prenom.innerHTML = localStorage.getItem('prenom')

    var ligne_age = document.createElement('th')
    ligne_age.innerHTML = localStorage.getItem('age')

    var ligne_adresse = document.createElement('th')
    ligne_adresse.innerHTML = localStorage.getItem('adresse')

    var ligne_tel = document.createElement('th')
    ligne_tel.innerHTML = localStorage.getItem('tel')

    var ligne_num_carte = document.createElement('th')
    ligne_num_carte.innerHTML = localStorage.getItem('carte_num')

    var ligne_mm_aa = document.createElement('th')
    ligne_mm_aa.innerHTML = localStorage.getItem('mm_aa')

    var ligne_cvv = document.createElement('th')
    ligne_cvv.innerHTML = localStorage.getItem('cvv')

    ligne.append(ligne_nom, ligne_prenom, ligne_age, ligne_adresse, ligne_tel, ligne_num_carte, ligne_mm_aa, ligne_cvv)

    document.getElementById("data_retrieved").appendChild(ligne)
}

const renderPictureV = () => {
    document.getElementById("realisateurs_container").style.backgroundImage = "url('../assets/Contact/vanessa.jpg')"
    document.getElementById("realisateurs_container").style.boxShadow = '0 0 8px 8px white inset'
    document.getElementById("realisateurs_container").style.backgroundColor = 'rgb(222, 219, 212)'
    document.getElementById("realisateurs_container").style.backgroundSize = 'contain'
    document.getElementById("realisateurs_container").style.backgroundRepeat = 'no-repeat'
    document.getElementById("realisateurs_container").style.backgroundPosition = 'center'
    document.getElementById("vanessa").style.opacity = 0.65
    document.getElementById("kevin").style.opacity = 0.65
}

const removePictureV = () => {
    document.getElementById("realisateurs_container").style.backgroundImage = ""
    document.getElementById("realisateurs_container").style.backgroundColor = 'white'
    document.getElementById("vanessa").style.opacity = 1
    document.getElementById("kevin").style.opacity = 1
}

const renderPictureK = () => {
    document.getElementById("realisateurs_container").style.backgroundImage = "url('../assets/Contact/kevin.png')"
    document.getElementById("realisateurs_container").style.boxShadow = '0 0 8px 8px white inset'
    document.getElementById("realisateurs_container").style.backgroundColor = 'white'
    document.getElementById("realisateurs_container").style.backgroundSize = 'contain'
    document.getElementById("realisateurs_container").style.backgroundRepeat = 'no-repeat'
    document.getElementById("realisateurs_container").style.backgroundPosition = 'center'
    document.getElementById("vanessa").style.opacity = 0.65
    document.getElementById("kevin").style.opacity = 0.65
}

const removePictureK = () => {
    document.getElementById("realisateurs_container").style.backgroundImage = ""
    document.getElementById("realisateurs_container").style.backgroundColor = 'white'
    document.getElementById("vanessa").style.opacity = 1
    document.getElementById("kevin").style.opacity = 1
}

function showPhishing() {
    document.getElementById('phishing').style.display = "block"
    document.getElementById('catfishing').style.display = "none"
}

function showCatfishing() {
    document.getElementById('phishing').style.display = "none"
    document.getElementById('catfishing').style.display = "block"
}