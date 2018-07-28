const menu = document.getElementById("menu"),
        submenu = document.querySelectorAll(".submenu");

for (const element in submenu) {
    if (submenu.hasOwnProperty(element)) {
        let arrow = document.createElement("i");
        arrow.innerText = ">";
        const elem = submenu[element];
        elem.classList.add("hide");
        elem.parentElement.appendChild(arrow);
    }
}
let state = false, lastElem;

menu.addEventListener("click", function () {
    if (event.target.nodeName == "I") {
        if (lastElem) {
            lastElem.classList.add("hide");
            state = false;
        }
        if (!state) {
            lastElem = event.target.previousElementSibling;
            lastElem.classList.remove("hide");
            state = true;
        }
        else {
            event.target.previousElementSibling.classList.add("hide");
            state = false;
        }
    }
})