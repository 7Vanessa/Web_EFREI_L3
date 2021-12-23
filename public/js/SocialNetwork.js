const renderHomeContent = () => {
    document.getElementById("explore").style.display = "none"
    document.getElementById("notifications").style.display = "none"
    document.getElementById("messages").style.display = "none"
    document.getElementById("profile").style.display = "none"
    document.getElementById("home").style.display = "block"
}

const renderExploreContent = () => {
    document.getElementById("home").style.display = "none"
    document.getElementById("notifications").style.display = "none"
    document.getElementById("messages").style.display = "none"
    document.getElementById("profile").style.display = "none"
    document.getElementById("explore").style.display = "block"
}

const renderNotificationsContent = () => {
    document.getElementById("home").style.display = "none"
    document.getElementById("explore").style.display = "none"
    document.getElementById("messages").style.display = "none"
    document.getElementById("profile").style.display = "none"
    document.getElementById("notifications").style.display = "block"
}

const renderMessagesContent = () => {
    document.getElementById("home").style.display = "none"
    document.getElementById("explore").style.display = "none"
    document.getElementById("notifications").style.display = "none"
    document.getElementById("profile").style.display = "none"
    document.getElementById("messages").style.display = "block"
}

const renderProfileContent = () => {
    document.getElementById("home").style.display = "none"
    document.getElementById("explore").style.display = "none"
    document.getElementById("notifications").style.display = "none"
    document.getElementById("messages").style.display = "none"
    document.getElementById("profile").style.display = "block"
}

