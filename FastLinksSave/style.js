const spasiDugmeBtn = document.getElementById("spasiDugme");
const ulazEl = document.getElementById("ulaz-el");
let nizLinkova = [];
let ulEl = document.getElementById("ulEl");

localStorage.setItem("mojiLinkovi", "www.exampled.com");
localStorage.clear()
spasiDugmeBtn.addEventListener("click", function () {
    nizLinkova.push(ulazEl.value)
    osvjeziLinkove()
    ulazEl.value = ""
})

function osvjeziLinkove() {
    let listaNiza = ""
    for (let i = 0; i < nizLinkova.length; i++) {
        listaNiza += `
    <li><a target='_blank' href="${nizLinkova[i]}">${nizLinkova[i]} </a>
    </li>`
    }
    ulEl.innerHTML = listaNiza;
}
