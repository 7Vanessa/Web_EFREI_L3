function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("menu").style.marginLeft = "250px";
    document.body.style.backgroundColor = "#EED9C4";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("menu").style.marginLeft= "0";
    document.body.style.backgroundColor = "#EED9C4";
}

function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}