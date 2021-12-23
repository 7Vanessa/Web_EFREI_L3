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

const phishing = () => {
    window.location.href = "../pages/Phishing.html"
}

function darkDiv(div){
    div.style.backgroundColor = "#DDDDDD";
    const id_img = document.getElementById("img_iphone");
    const text_phishing = document.getElementById("text_phishing");
    id_img.style.opacity = "0.3";
    text_phishing.style.opacity = "0.3";
}

function normalDiv(div) {
    div.style.backgroundColor = "#FFFFFF"
    const id_img = document.getElementById("img_iphone");
    const text_phishing = document.getElementById("text_phishing");
    id_img.style.opacity = "1";
    text_phishing.style.opacity = "1";
}
