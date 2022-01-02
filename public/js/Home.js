const onSignUp = () => {
    localStorage.setItem("p", document.getElementById('pseudo').value)
    document.getElementById('pseudo').value = ""
    window.location.href = "../pages/SocialNetwork.html"
}


