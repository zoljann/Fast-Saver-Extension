const spasiDugmeBtn = document.getElementById("spasiDugme");
let obrisiDugmeBtn = document.getElementById("obrisiDugme");
const ulazEl = document.getElementById("ulaz-el");
let ulEl = document.getElementById("ulEl");
let nizLinkova = [];

const nizLocalStorage = JSON.parse(localStorage.getItem("nizLinkova"));

if(nizLocalStorage){
    nizLinkova=nizLocalStorage;
    osvjeziLinkove(nizLinkova);
}

spasiDugmeBtn.addEventListener("click", function () {
    if(!(ulazEl.value === "")){
        nizLinkova.push(ulazEl.value)
        ulazEl.value = ""
        localStorage.setItem("nizLinkova", JSON.stringify(nizLinkova))
        osvjeziLinkove(nizLinkova)
    }
})

obrisiDugmeBtn.addEventListener("dblclick", function(){
    localStorage.clear();
    nizLinkova = [];
    osvjeziLinkove(nizLinkova);
})

function osvjeziLinkove(linkovi) {
    let listaNiza = ""
    for (let i = 0; i < linkovi.length; i++) {
        listaNiza += `
    <li><a target='_blank' href="${linkovi[i]}">${linkovi[i]} </a>
    </li>`
    }
    ulEl.innerHTML = listaNiza;
}
