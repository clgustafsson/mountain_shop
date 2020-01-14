//window.onload = initDivMouseOver;
var mouse = false;

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function mouseover(x) {
    mouse = x;
}

async function popup(elem) {
    //await sleep(1);
    const buyItem = document.getElementById("popupviewproduct");
    elem.style.transform = "scale(1.027, 1.027)"
    //elem.style.width = elem.clientWidth.toString() + "px";
    buyItem.style.position = "absolute";
    buyItem.style.display = "grid";
    elem.append(buyItem);
    buyItem.style.bottom = "-" + buyItem.clientHeight.toString() + "px";
}

async function hidepopup(elem) {
    //await sleep(1);
    if (mouse == false) {
        const buyItem = document.getElementById("popupviewproduct");
        elem.style.width = "100%";
        buyItem.style.display = "none";
        buyItem.style.position = "static";
        elem.style.transform = "initial";
    }
}

//async function hidepopup(elem) {
//    elem.style.transform = "initial";
//    await sleep(10);
//    if (mouse == false) {
//        const buyItem = document.getElementById("popupviewproduct");
//        parentDiv = document.getElementById("home");
//        elem.style.width = "100%";
//        buyItem.style.display = "none";
//        parentDiv.appendChild(buyItem);
//    }
//}

function gotoproduct() {
    window.open("index2.html", "_self");
}