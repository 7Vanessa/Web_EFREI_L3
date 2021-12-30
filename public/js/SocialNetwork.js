const getPseudo = () => {
    return pseudo
}

const chatWith = () => {
    const message = document.getElementById("input_message_conversation").value
    var div = document.createElement('div');
    div.id = 'container';
    div.innerHTML = message;
    div.className = 'my_message';

    document.getElementById("messages_area").appendChild(div);

    document.getElementById("input_message_conversation")
}


const onSignUp = () => {
    const pseudo = document.forms.sign_up_form.pseudo.value.toString()
    window.location.href = "../pages/SocialNetwork.html"
    document.getElementById("my_name").innerHTML = pseudo
}

const onLoadRender = () => {
    document.getElementById("explore").style.display = "none"
    document.getElementById("notifications").style.display = "none"
    document.getElementById("messages").style.display = "none"
    document.getElementById("profile").style.display = "none"
    document.getElementById("home").style.display = "block"
}

window.onload = onLoadRender()

const renderFollowState = () => {
    document.getElementById("follow_state_on").style.display = "none"
    document.getElementById("follow_state_off").style.display = "block"
}

const renderFollowState2 = () => {
    document.getElementById("follow_state_on2").style.display = "none"
    document.getElementById("follow_state_off2").style.display = "block"
}

const renderFollowState3 = () => {
    document.getElementById("follow_state_on3").style.display = "none"
    document.getElementById("follow_state_off3").style.display = "block"
}

renderFollowState()
renderFollowState2()
renderFollowState3()

const renderHomeContent = () => {
    document.getElementById("explore").style.display = "none"
    document.getElementById("sidebar-explore").style.color = "#0F141A"
    document.getElementById("sidebar-explore_img").style.filter = "invert(4%) sepia(4%) saturate(7488%) hue-rotate(173deg) brightness(93%) contrast(91%)"

    document.getElementById("notifications").style.display = "none"
    document.getElementById("sidebar-notif").style.color = "#0F141A"
    document.getElementById("sidebar-notif_img").style.filter = "invert(4%) sepia(4%) saturate(7488%) hue-rotate(173deg) brightness(93%) contrast(91%)"

    document.getElementById("messages").style.display = "none"
    document.getElementById("sidebar-message").style.color = "#0F141A"
    document.getElementById("sidebar-message_img").style.filter = "invert(4%) sepia(4%) saturate(7488%) hue-rotate(173deg) brightness(93%) contrast(91%)"

    document.getElementById("profile").style.display = "none"
    document.getElementById("sidebar-profile").style.color = "#0F141A"
    document.getElementById("sidebar-profile_img").style.filter = "invert(4%) sepia(4%) saturate(7488%) hue-rotate(173deg) brightness(93%) contrast(91%)"

    document.getElementById("sidebar-home").style.color = "#1DA0F2"
    document.getElementById("sidebar-home_img").style.filter = "invert(67%) sepia(60%) saturate(4956%) hue-rotate(176deg) brightness(95%) contrast(99%)"
    document.getElementById("home").style.display = "block"
}

const renderExploreContent = () => {
    document.getElementById("home").style.display = "none"
    document.getElementById("sidebar-home").style.color = "#0F141A"
    document.getElementById("sidebar-home_img").style.filter = "invert(4%) sepia(4%) saturate(7488%) hue-rotate(173deg) brightness(93%) contrast(91%)"

    document.getElementById("notifications").style.display = "none"
    document.getElementById("sidebar-notif").style.color = "#0F141A"
    document.getElementById("sidebar-notif_img").style.filter = "invert(4%) sepia(4%) saturate(7488%) hue-rotate(173deg) brightness(93%) contrast(91%)"

    document.getElementById("messages").style.display = "none"
    document.getElementById("sidebar-message").style.color = "#0F141A"
    document.getElementById("sidebar-message_img").style.filter = "invert(4%) sepia(4%) saturate(7488%) hue-rotate(173deg) brightness(93%) contrast(91%)"

    document.getElementById("profile").style.display = "none"
    document.getElementById("sidebar-profile").style.color = "#0F141A"
    document.getElementById("sidebar-profile_img").style.filter = "invert(4%) sepia(4%) saturate(7488%) hue-rotate(173deg) brightness(93%) contrast(91%)"

    document.getElementById("sidebar-explore").style.color = "#1DA0F2"
    document.getElementById("sidebar-explore_img").style.filter = "invert(67%) sepia(60%) saturate(4956%) hue-rotate(176deg) brightness(95%) contrast(99%)"
    document.getElementById("explore").style.display = "block"
}

const renderNotificationsContent = () => {
    document.getElementById("home").style.display = "none"
    document.getElementById("sidebar-home").style.color = "#0F141A"
    document.getElementById("sidebar-home_img").style.filter = "invert(4%) sepia(4%) saturate(7488%) hue-rotate(173deg) brightness(93%) contrast(91%)"

    document.getElementById("explore").style.display = "none"
    document.getElementById("sidebar-explore").style.color = "#0F141A"
    document.getElementById("sidebar-explore_img").style.filter = "invert(4%) sepia(4%) saturate(7488%) hue-rotate(173deg) brightness(93%) contrast(91%)"

    document.getElementById("messages").style.display = "none"
    document.getElementById("sidebar-message").style.color = "#0F141A"
    document.getElementById("sidebar-message_img").style.filter = "invert(4%) sepia(4%) saturate(7488%) hue-rotate(173deg) brightness(93%) contrast(91%)"

    document.getElementById("profile").style.display = "none"
    document.getElementById("sidebar-profile").style.color = "#0F141A"
    document.getElementById("sidebar-profile_img").style.filter = "invert(4%) sepia(4%) saturate(7488%) hue-rotate(173deg) brightness(93%) contrast(91%)"

    document.getElementById("sidebar-notif").style.color = "#1DA0F2"
    document.getElementById("sidebar-notif_img").style.filter = "invert(67%) sepia(60%) saturate(4956%) hue-rotate(176deg) brightness(95%) contrast(99%)"
    document.getElementById("notifications").style.display = "block"
}

const renderMessagesContent = () => {
    document.getElementById("home").style.display = "none"
    document.getElementById("sidebar-home").style.color = "#0F141A"
    document.getElementById("sidebar-home_img").style.filter = "invert(4%) sepia(4%) saturate(7488%) hue-rotate(173deg) brightness(93%) contrast(91%)"

    document.getElementById("explore").style.display = "none"
    document.getElementById("sidebar-explore").style.color = "#0F141A"
    document.getElementById("sidebar-explore_img").style.filter = "invert(4%) sepia(4%) saturate(7488%) hue-rotate(173deg) brightness(93%) contrast(91%)"

    document.getElementById("notifications").style.display = "none"
    document.getElementById("sidebar-notif").style.color = "#0F141A"
    document.getElementById("sidebar-notif_img").style.filter = "invert(4%) sepia(4%) saturate(7488%) hue-rotate(173deg) brightness(93%) contrast(91%)"

    document.getElementById("profile").style.display = "none"
    document.getElementById("sidebar-profile").style.color = "#0F141A"
    document.getElementById("sidebar-profile_img").style.filter = "invert(4%) sepia(4%) saturate(7488%) hue-rotate(173deg) brightness(93%) contrast(91%)"

    document.getElementById("sidebar-message").style.color = "#1DA0F2"
    document.getElementById("sidebar-message_img").style.filter = "invert(67%) sepia(60%) saturate(4956%) hue-rotate(176deg) brightness(95%) contrast(99%)"
    document.getElementById("messages").style.display = "block"
}

const renderProfileContent = () => {
    document.getElementById("home").style.display = "none"
    document.getElementById("sidebar-home").style.color = "#0F141A"
    document.getElementById("sidebar-home_img").style.filter = "invert(4%) sepia(4%) saturate(7488%) hue-rotate(173deg) brightness(93%) contrast(91%)"

    document.getElementById("explore").style.display = "none"
    document.getElementById("sidebar-explore").style.color = "#0F141A"
    document.getElementById("sidebar-explore_img").style.filter = "invert(4%) sepia(4%) saturate(7488%) hue-rotate(173deg) brightness(93%) contrast(91%)"

    document.getElementById("notifications").style.display = "none"
    document.getElementById("sidebar-notif").style.color = "#0F141A"
    document.getElementById("sidebar-notif_img").style.filter = "invert(4%) sepia(4%) saturate(7488%) hue-rotate(173deg) brightness(93%) contrast(91%)"

    document.getElementById("messages").style.display = "none"
    document.getElementById("sidebar-message").style.color = "#0F141A"
    document.getElementById("sidebar-message_img").style.filter = "invert(4%) sepia(4%) saturate(7488%) hue-rotate(173deg) brightness(93%) contrast(91%)"

    document.getElementById("sidebar-profile").style.color = "#1DA0F2"
    document.getElementById("sidebar-profile_img").style.filter = "invert(67%) sepia(60%) saturate(4956%) hue-rotate(176deg) brightness(95%) contrast(99%)"
    document.getElementById("profile").style.display = "block"
}

const follow = () => {
    if(document.getElementById("follow_state_off").style.display == "block") {
        document.getElementById("follow_state_off").style.display = "none"
        document.getElementById("follow_state_on").style.display = "block"
    }
    else if(document.getElementById("follow_state_on").style.display == "none") {
        document.getElementById("follow_state_on").style.display = "block"
        document.getElementById("follow_state_off").style.display = "none"
    }
    else if(document.getElementById("follow_state_off").style.display == "none") {
        document.getElementById("follow_state_off").style.display = "block"
        document.getElementById("follow_state_on").style.display = "none"
    }
    else {
        document.getElementById("follow_state_on").style.display = "none"
        document.getElementById("follow_state_off").style.display = "block"
    }
}

const follow2 = () => {
    if(document.getElementById("follow_state_off2").style.display == "block") {
        document.getElementById("follow_state_off2").style.display = "none"
        document.getElementById("follow_state_on2").style.display = "block"
    }
    else if(document.getElementById("follow_state_on2").style.display == "none") {
        document.getElementById("follow_state_on2").style.display = "block"
        document.getElementById("follow_state_off2").style.display = "none"
    }
    else if(document.getElementById("follow_state_off2").style.display == "none") {
        document.getElementById("follow_state_off2").style.display = "block"
        document.getElementById("follow_state_on2").style.display = "none"
    }
    else {
        document.getElementById("follow_state_on2").style.display = "none"
        document.getElementById("follow_state_off2").style.display = "block"
    }
}

const follow3 = () => {
    if(document.getElementById("follow_state_off3").style.display == "block") {
        document.getElementById("follow_state_off3").style.display = "none"
        document.getElementById("follow_state_on3").style.display = "block"
    }
    else if(document.getElementById("follow_state_on3").style.display == "none") {
        document.getElementById("follow_state_on3").style.display = "block"
        document.getElementById("follow_state_off3").style.display = "none"
    }
    else if(document.getElementById("follow_state_off3").style.display == "none") {
        document.getElementById("follow_state_off3").style.display = "block"
        document.getElementById("follow_state_on3").style.display = "none"
    }
    else {
        document.getElementById("follow_state_on3").style.display = "none"
        document.getElementById("follow_state_off3").style.display = "block"
    }
}

const startTime = () => {
    var date = new Date()
    document.getElementById('timer').innerHTML = ' ' + date.getHours() + ' : ' + date.getMinutes() + ' : ' + date.getSeconds()
}

const onClickProfile = () => {
    setInterval("startTime()", 100)
}
