function addForm() {
    const newItem = document.createElement('tr')
    const nomTd = document.createElement('td')
    const prenomTd = document.createElement('td')
    const ageTd = document.createElement('td')
    const adresseTd = document.createElement('td')
    const codePostalTd = document.createElement('td')
    const telephoneTd = document.createElement('td')
    const ribTd = document.createElement('td')
    const cryptogrammeTd = document.createElement('td')

    const parameters = location.search.substring(1).split("&");
    let value = parameters[0].split("=")
    nomTd.textContent = unescape(value[1])
    value = parameters[1].split("=")
    prenomTd.textContent = unescape(value[1])
    value = parameters[2].split("=")
    ageTd.textContent = unescape(value[1])
    value = parameters[3].split("=")
    adresseTd.textContent = unescape(value[1])
    value = parameters[4].split("=")
    codePostalTd.textContent = unescape(value[1])
    value = parameters[5].split("=")
    telephoneTd.textContent = unescape(value[1])
    value = parameters[6].split("=")
    ribTd.textContent = unescape(value[1])
    value = parameters[7].split("=")
    cryptogrammeTd.textContent = unescape(value[1])

    newItem.append(nomTd, prenomTd, ageTd, adresseTd, codePostalTd, telephoneTd, ribTd, cryptogrammeTd)

    const table = document.querySelector('.data_retrieved')
    table.appendChild(newItem)
}

function showPhishing() {
    const phishing = document.querySelector('.phishing')
    const catfishing = document.querySelector('.catfishing')
    phishing.style.display = "block"
    phishing.style.flexDirection = "column"
    phishing.style.justifyContent = "center"
    catfishing.style.display = "none"
}

function showCatfishing() {
    const phishing = document.querySelector('.phishing')
    const catfishing = document.querySelector('.catfishing')
    phishing.style.display = "none"
    catfishing.style.display = "block"
    catfishing.style.display = "block"
    catfishing.style.flexDirection = "column"
    catfishing.style.justifyContent = "center"
}