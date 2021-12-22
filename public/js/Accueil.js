const openNav = () => {
    document.getElementById("mySidenav").style.width = "250px"
    document.getElementById("menu").style.marginLeft = "250px"
    document.body.style.backgroundColor = "#EED9C4"
}

const closeNav = () => {
    document.getElementById("mySidenav").style.width = "0"
    document.getElementById("menu").style.marginLeft= "0"
    document.body.style.backgroundColor = "#EED9C4"
}

const openForm = () => {
    document.getElementById("myForm").style.display = "block"
}

const closeForm = () => {
    document.getElementById("myForm").style.display = "none"
}

var formulaire = document.forms.popup

const onClickGameplay = () => {
    if(formulaire.age.value === "plus")
        window.location.href = "../pages/Phishing.html"
    else
        window.location.href = "../pages/SocialNetwork.html"
}

const addInTab = () => {
    var pseudo = formulaire.pseudo.value
    var age = formulaire.age.value
}
