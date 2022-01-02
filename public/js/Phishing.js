const comment = () => {
    const title = document.getElementById("input_title").value
    const text = document.getElementById("input_text").value

    document.getElementById("input_title").value = ""
    document.getElementById("input_text").value = ""

    var div_main = document.createElement('div_main')
    div_main.className = 'comment'

    var div_header = document.createElement('div_header')
    div_header.className = 'comment_header'

    var img = document.createElement('img')
    img.className = 'comment_author_picture'
    img.src = "../assets/ProfilePicture/unknown.png"

    var name = document.createElement('name')
    name.className = 'comment_author_name'
    name.innerHTML = "Anonyme"

    var content = document.createElement('content')
    content.className = 'comment_content'

    var content_title = document.createElement('content_title')
    content_title.className = 'comment_title'
    content_title.innerHTML = title

    var content_text = document.createElement('content_text')
    content_text.className = 'comment_text'
    content_text.innerHTML = text

    div_header.appendChild(img)
    div_header.appendChild(name)
    content.appendChild(content_title)
    content.appendChild(content_text)
    div_main.appendChild(div_header)
    div_main.appendChild(content)

    document.getElementById("comments").prepend(div_main)
}

const payer = () => {
    localStorage.setItem("nom", document.getElementById('nom').value)
    document.getElementById('nom').value = ""

    localStorage.setItem("prenom", document.getElementById('prenom').value)
    document.getElementById('prenom').value = ""

    localStorage.setItem("age", document.getElementById('age').value)
    document.getElementById('age').value = ""

    localStorage.setItem("adresse", document.getElementById('adresse').value)
    document.getElementById("adresse").value = ""

    localStorage.setItem("tel", document.getElementById('tel').value)
    document.getElementById('tel').value = ""

    localStorage.setItem("carte_num", document.getElementById('carte_num').value)
    document.getElementById('carte_num').value = ""

    localStorage.setItem("mm_aa", document.getElementById('mm_aa').value)
    document.getElementById('mm_aa').value = ""

    localStorage.setItem("cvv", document.getElementById('cvv').value)
    document.getElementById('cvv').value = ""

    window.location.href = "../pages/Contact.html"
}