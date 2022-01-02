const messages = [
    {
        id: 0,
        message: "Tu réponds enfin, il était temps."
    },
    {
        id: 1,
        message: "On ne s'est jamais rencontrés."
    },
    {
        id: 2,
        message: "Je détiens des informations plutôt personnelles te concernant."
    },
    {
        id: 3,
        message: "Si tu ne veux pas que ces informations soient diffusées je t'invite à faire un virement au plus vite sur ce compte FR00 1234 5123 4512 3456 7891 A12"
    }
]

const getDateInfo = () => {

    var d = new Date();
    var dj1
    var dm1

    var dj = d.getDate()
    if(dj < 10)
        dj1 = '0' + dj
    else
        dj1 = dj

    var dm = d.getMonth()+1
    if(dm < 10)
        dm1 = '0' + dm
    else
        dm1 = dm

    var date = dj1 + '/' + dm1 + '/' + d.getFullYear();

    var h = new Date()
    var hh1
    var hm1

    var hh = h.getHours()
    if(hh < 10)
        hh1 = '0' + hh
    else
        hh1 = hh

    var hm = h.getMinutes()
    if(hm < 10)
        hm1 = '0' + hm
    else
        hm1 = hm

    var hours = hh1 + ":" + hm1;

    return date + "  " + hours
}

const sleep = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const addFollower = () => {
    if(document.getElementById("follow_state_on").style.display == "block") {
        document.getElementById("abonnement_netflix").style.display = "block"
    }
    if(document.getElementById("follow_state_on").style.display == "none") {
        document.getElementById("abonnement_netflix").style.display = "none"
    }

    if(document.getElementById("follow_state_on2").style.display == "block") {
        document.getElementById("abonnement_disney").style.display = "block"
    }
    if(document.getElementById("follow_state_on2").style.display == "none") {
        document.getElementById("abonnement_disney").style.display = "none"
    }

    if(document.getElementById("follow_state_on3").style.display == "block") {
        document.getElementById("abonnement_spotify").style.display = "block"
    }
    if(document.getElementById("follow_state_on3").style.display == "none") {
        document.getElementById("abonnement_spotify").style.display = "none"
    }
}

var idMessage = 0

const chatWith = () => {
    const message = document.getElementById("input_message_conversation").value
    document.getElementById("input_message_conversation").value = ''

    if(message == "")
        return

    var div = document.createElement('div')
    div.className = 'my_message'

    var div_content = document.createElement('div_content')
    div_content.id = 'content'
    div_content.innerHTML = message
    div_content.className = 'my_message_content'

    var div_hour = document.createElement('div_hour')
    div_hour.id = 'hour'
    div_hour.innerHTML = getDateInfo()
    div_hour.className = 'my_message_date_info'

    div.appendChild(div_content)
    div.appendChild(div_hour)
    document.getElementById("messages_area").appendChild(div)

    document.getElementById("messages_area").scrollTop = document.getElementById("messages_area").scrollHeight

    sleep(2000).then(() => {
        var div2 = document.createElement('div2')
        div2.className = "unknown_message"

        var div2_content = document.createElement('div2_content')
        div2_content.id = 'content2'
        div2_content.innerHTML = messages[idMessage].message
        idMessage++
        div2_content.className = 'unknown_message_content'

        var div2_hour = document.createElement('div2_hour')
        div2_hour.id = 'hour2'
        div2_hour.innerHTML = getDateInfo()
        div2_hour.className = 'unknown_message_date_info'

        div2.appendChild(div2_content)
        div2.appendChild(div2_hour)
        document.getElementById("messages_area").appendChild(div2)

        document.getElementById("messages_area").scrollTop = document.getElementById("messages_area").scrollHeight
    })
}

const logOut = () => {
    window.location.href = "../pages/Home.html"
}

const onLoadRender = () => {
    document.getElementById("my_name").innerHTML = localStorage.getItem("p")
    document.getElementById("my_at").innerHTML = "@" + localStorage.getItem("p").toLowerCase()
    document.getElementById("explore").style.display = "none"
    document.getElementById("notifications").style.display = "none"
    document.getElementById("messages").style.display = "none"
    document.getElementById("profile").style.display = "none"
    document.getElementById("home").style.display = "block"
}

const pwitter = () => {
    const pweet_message = document.getElementById("input_pweet").value
    document.getElementById("input_pweet").value = ''

    var div = document.createElement('div')
    div.className = 'pweet'

    var div_main = document.createElement('div_main')
    div_main.className = 'pweet_main'

    var div_header = document.createElement('div_header')
    div_header.className = "pweet_header"

    var img = document.createElement('img')
    img.className = 'pweet_author-logo'
    img.src = "../assets/ProfilePicture/MyProfilePicture.png"

    var name = document.createElement('name')
    name.className = 'pweet_author-name'
    name.innerHTML = localStorage.getItem("p")

    var tag = document.createElement('tag')
    tag.className = 'pweet_author-at'
    tag.innerHTML = '@' + localStorage.getItem("p").toLowerCase()

    var time = document.createElement('time')
    time.className = 'pweet_publish-time'
    time.innerHTML = 'now'

    var div_content = document.createElement('div_content')
    div_content.innerHTML = pweet_message
    div_content.className = 'pweet_content'

    div.appendChild(img)
    div.appendChild(div_main)
    div_header.appendChild(name)
    div_header.appendChild(tag)
    div_header.appendChild(time)
    div_main.appendChild(div_header)
    div_main.appendChild(div_content)

    document.getElementById("home").prepend(div)
}

window.onload = onLoadRender()

const renderFollowState = () => {
    document.getElementById("follow_state_on").style.display = "none"
    document.getElementById("follow_state_off").style.display = "block"
    document.getElementById("abonnement_netflix").style.display = "none"
}

const renderFollowState2 = () => {
    document.getElementById("follow_state_on2").style.display = "none"
    document.getElementById("follow_state_off2").style.display = "block"
    document.getElementById("abonnement_disney").style.display = "none"
}

const renderFollowState3 = () => {
    document.getElementById("follow_state_on3").style.display = "none"
    document.getElementById("follow_state_off3").style.display = "block"
    document.getElementById("abonnement_spotify").style.display = "none"
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

    addFollower()
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

    addFollower()
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

    addFollower()
}
