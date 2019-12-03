function gotoproduct() {
    window.open("index2.html","_self");
}
function showpopup(x) {
    document.getElementById("popupviewproduct").style.display = "grid"; 
    x.style.width = "200%";
    x.style.zIndex = "6";
}
function hidepopup(x) {
    document.getElementById("popupviewproduct").style.display = "none"; 
    x.style.width = "100%";
}
