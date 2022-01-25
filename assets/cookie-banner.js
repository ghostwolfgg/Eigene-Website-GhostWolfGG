let accepted = localStorage.getItem("cookie");
if(!accepted || accepted == "false") {
    let elem = document.createElement("div");
    let outer = document.createElement("div");
    let title = document.createElement("div");
    let titlespan = document.createElement("span");
    let contentspan = document.createElement("span");
    let btnrow = document.createElement("div");
    let acbtn = document.createElement("div");
    let dnbtn = document.createElement("div");

    document.head.insertAdjacentHTML("beforeend", "<style>*{margin:0;padding:0;font-family:sans-serif}")
    outer.appendChild(elem);
    
    elem.style.borderRadius = "20px";
    elem.style.width = "70vw";
    elem.style.height = "70vh";
    elem.style.background = "white"
    elem.style.display = "flex"
    elem.style.flexDirection = "column"
    elem.style.justifyContent = "space-between"
    
    outer.style.width = "100vw";
    outer.style.height = "100vh";
    outer.style.backgroundColor = "rgba(0,0,0,0.2)";
    outer.style.display = "flex";
    outer.style.alignItems = "center";
    outer.style.justifyContent = "center"
    outer.style.position = "absolute"
    outer.style.top = 0
    outer.style.left = 0

    title.style.marginTop = "2.5vw"
    title.style.marginLeft = "2.5vw"

    titlespan.innerText = "Persönliche Datenverarbeitung";
    titlespan.style.fontSize = "1.5rem"
    titlespan.innerHTML += "</br></br>"

    contentspan.innerHTML = 'Ihre Sicherheit ist uns wichtig bitte lesen Sie sich die Datenschutzverordnung unserer Webseite <a href="./datenschutz.html">hier</a> durch und akzeptieren Sie sie';

    btnrow.style.height = "200px";
    btnrow.style.position = "relative"
    btnrow.style.padding = "2.5vw"
    btnrow.style.display = "flex"
    btnrow.style.flexDirection = "row"
    btnrow.style.justifyContent = "center"
    btnrow.style.gap = "2.5vw"

    acbtn.style.width = "20vw"
    acbtn.style.height = "100%"
    acbtn.style.background = "green"
    acbtn.style.borderRadius = "15px"
    acbtn.style.display = "flex"
    acbtn.style.alignItems = "center"
    acbtn.style.justifyContent = "center"
    acbtn.style.color = "white"
    acbtn.style.cursor = "pointer"
    acbtn.innerHTML = "<span>Akzeptieren</span>"
    
    dnbtn.style.width = "20vw"
    dnbtn.style.height = "100%"
    dnbtn.style.background = "red"
    dnbtn.style.borderRadius = "15px"
    dnbtn.style.display = "flex"
    dnbtn.style.alignItems = "center"
    dnbtn.style.justifyContent = "center"
    dnbtn.style.color = "white"
    dnbtn.style.cursor = "pointer"
    dnbtn.innerHTML = "<span>Ablehnen</span>"

    title.appendChild(titlespan);
    title.appendChild(contentspan)
    elem.appendChild(title)
    btnrow.appendChild(acbtn)
    btnrow.appendChild(dnbtn)
    elem.appendChild(btnrow)
    document.body.appendChild(outer)

    acbtn.onclick = () => {
        localStorage.setItem("cookie", true);
        outer.style.display = "none"
    }
    dnbtn.onclick = () => {
        history.back();
    }
}